import React, { useState, useEffect } from 'react';
import { FiHome, FiImage, FiMenu, FiLayout, FiSettings, FiUser, FiBell, FiEdit2 } from 'react-icons/fi';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Types
interface Page {
  id: string;
  title: string;
  content?: string;
}

const sections = [
  { key: 'pages', label: 'Pages', icon: FiHome },
  { key: 'images', label: 'Images', icon: FiImage },
  { key: 'navigation', label: 'Navigation', icon: FiMenu },
  { key: 'layout', label: 'Layout', icon: FiLayout },
  { key: 'settings', label: 'Settings', icon: FiSettings },
];

const mockImages = [
  { id: '1', name: 'landing.jpg', url: '/assets/images/landing.jpg' },
  { id: '2', name: 'about.jpg', url: '/assets/images/about.jpg' },
  { id: '3', name: 'gallery1.jpg', url: '/assets/images/gallery/gallery1.jpg' },
  { id: '4', name: 'logo.png', url: '/assets/images/logo.png' },
];

const mockNavigation = [
  { id: '1', label: 'Home', url: '/' },
  { id: '2', label: 'About', url: '/about' },
  { id: '3', label: 'Gallery', url: '/gallery' },
  { id: '4', label: 'Contact', url: '/contact' },
];

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('pages');
  const [pages, setPages] = useState<Page[]>([]);
  const [images, setImages] = useState(mockImages);
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const [newImageName, setNewImageName] = useState('');
  const [newImageFile, setNewImageFile] = useState<File | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [navigation, setNavigation] = useState(mockNavigation);
  const [navEditId, setNavEditId] = useState<string | null>(null);
  const [navEditLabel, setNavEditLabel] = useState('');
  const [navEditUrl, setNavEditUrl] = useState('');
  const [addingNav, setAddingNav] = useState(false);
  const [newNavLabel, setNewNavLabel] = useState('');
  const [newNavUrl, setNewNavUrl] = useState('');
  const [pageContent, setPageContent] = useState('');
  const [editingContentId, setEditingContentId] = useState<string | null>(null);
  const [loadingPages, setLoadingPages] = useState(false);

  useEffect(() => {
    setLoadingPages(true);
    axios.get<Page[]>('http://localhost:4000/api/pages')
      .then((res) => {
        setPages(res.data);
        setLoadingPages(false);
      })
      .catch(() => setLoadingPages(false));
  }, []);

  const handleEditClick = (page: Page) => {
    setEditingPageId(page.id);
    setEditTitle(page.title);
    setEditingContentId(page.id);
    axios.get<Page>(`http://localhost:4000/api/pages/${page.id}`)
      .then((res) => setPageContent(res.data?.content || ''));
  };

  const handleSaveTitle = (id: string) => {
    const page = pages.find((p) => p.id === id);
    axios.put(`http://localhost:4000/api/pages/${id}`,
      {
        title: editTitle,
        content: page?.content || ''
      })
      .then(() => {
        setPages(pages.map((p) => (p.id === id ? { ...p, title: editTitle } : p)));
        setEditingPageId(null);
        setEditTitle('');
      });
  };

  const handleEditContent = (id: string) => {
    const page = pages.find((p) => p.id === id);
    axios.put(`http://localhost:4000/api/pages/${id}`,
      {
        title: page?.title || '',
        content: pageContent
      })
      .then(() => {
        setPages(pages.map((p) => (p.id === id ? { ...p, content: pageContent } : p)));
        setEditingContentId(null);
        setPageContent('');
      });
  };

  const handleImageDelete = (id: string) => {
    setImages(images.filter(img => img.id !== id));
  };

  const handleImageRename = (id: string) => {
    setImages(images.map(img => img.id === id ? { ...img, name: renameValue } : img));
    setRenamingId(null);
    setRenameValue('');
  };

  const handleImageUpload = () => {
    if (!newImageFile) return;
    setImages([
      { id: Date.now().toString(), name: newImageFile.name, url: URL.createObjectURL(newImageFile) },
      ...images,
    ]);
    setUploading(false);
    setNewImageFile(null);
    setNewImageName('');
  };

  const handleNavDelete = (id: string) => {
    setNavigation(navigation.filter(link => link.id !== id));
  };

  const handleNavEdit = (id: string) => {
    setNavigation(navigation.map(link => link.id === id ? { ...link, label: navEditLabel, url: navEditUrl } : link));
    setNavEditId(null);
    setNavEditLabel('');
    setNavEditUrl('');
  };

  const handleNavAdd = () => {
    if (!newNavLabel || !newNavUrl) return;
    setNavigation([
      ...navigation,
      { id: Date.now().toString(), label: newNavLabel, url: newNavUrl },
    ]);
    setAddingNav(false);
    setNewNavLabel('');
    setNewNavUrl('');
  };

  const handleNavMove = (index: number, direction: 'up' | 'down') => {
    const newNav = [...navigation];
    if (direction === 'up' && index > 0) {
      [newNav[index - 1], newNav[index]] = [newNav[index], newNav[index - 1]];
    } else if (direction === 'down' && index < newNav.length - 1) {
      [newNav[index + 1], newNav[index]] = [newNav[index], newNav[index + 1]];
    }
    setNavigation(newNav);
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className={`transition-all duration-300 bg-white shadow-lg h-screen flex flex-col ${sidebarOpen ? 'w-64' : 'w-20'} sticky top-0 z-30`}>
        <div className="flex items-center justify-between px-4 py-6 border-b">
          <span className="font-bold text-xl text-green-700">{sidebarOpen ? 'Site Admin' : 'SA'}</span>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-400 hover:text-green-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" /></svg>
          </button>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-2">
          {sections.map(section => {
            const Icon = section.icon as React.FC<React.SVGProps<SVGSVGElement>>;
            return (
              <button
                key={section.key}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-lg transition-all duration-200 w-full text-left ${activeSection === section.key ? 'bg-green-100 text-green-700' : 'hover:bg-green-50 text-gray-700'}`}
                onClick={() => setActiveSection(section.key)}
              >
                <span className="text-2xl"><Icon /></span>
                {sidebarOpen && <span>{section.label}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Topbar */}
        <header className="flex items-center justify-between px-8 h-16 bg-white shadow border-b sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-700">Management Dashboard</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-gray-500 hover:text-green-700">
              {(() => { const Icon = FiBell as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon className="w-6 h-6" />; })()}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
            </button>
            <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
              {(() => { const Icon = FiUser as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon className="w-5 h-5 text-green-700" />; })()}
              <span className="font-semibold text-green-700">Admin</span>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-50">
          {/* Pages Management Section */}
          {activeSection === 'pages' && (
            <div className="bg-white rounded-xl shadow p-8 min-h-[400px]">
              <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">{(() => { const Icon = FiHome as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon />; })()} Manage Pages</h2>
              <div className="overflow-x-auto">
                {loadingPages ? (
                  <div>Loading pages...</div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page ID</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-4 py-2"></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                      {pages.map(page => (
                        <tr key={page.id}>
                          <td className="px-4 py-2 text-gray-700 font-mono">{page.id}</td>
                          <td className="px-4 py-2">
                            {editingPageId === page.id ? (
                              <input
                                className="border border-green-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-200"
                                value={editTitle}
                                onChange={e => setEditTitle(e.target.value)}
                                onBlur={() => handleSaveTitle(page.id)}
                                autoFocus
                              />
                            ) : (
                              <span>{page.title}</span>
                            )}
                          </td>
                          <td className="px-4 py-2 text-right">
                            <button
                              className="text-green-600 hover:text-green-900 mr-2"
                              onClick={() => handleEditClick(page)}
                            >
                              {(() => { const Icon = FiEdit2 as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon />; })()}
                            </button>
                            <button
                              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded shadow"
                              onClick={() => { setEditingContentId(page.id); handleEditClick(page); }}
                            >
                              Edit Content
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
              {/* Rich Text Editor Modal */}
              {editingContentId && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
                    <h3 className="text-lg font-bold mb-4 text-green-700">Edit Page Content</h3>
                    <ReactQuill value={pageContent} onChange={setPageContent} className="mb-4" />
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setEditingContentId(null)}>Cancel</button>
                      <button
                        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                        onClick={() => handleEditContent(editingContentId)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          {/* Images Management Section */}
          {activeSection === 'images' && (
            <div className="bg-white rounded-xl shadow p-8 min-h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">{(() => { const Icon = FiImage as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon />; })()} Manage Images</h2>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                  onClick={() => setUploading(true)}
                >
                  Upload Image
                </button>
              </div>
              {/* Upload Modal */}
              {uploading && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                    <h3 className="text-lg font-bold mb-4 text-green-700">Upload New Image</h3>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={e => setNewImageFile(e.target.files?.[0] || null)}
                      className="mb-4"
                    />
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setUploading(false)}>Cancel</button>
                      <button
                        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                        onClick={handleImageUpload}
                        disabled={!newImageFile}
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map(img => (
                  <div key={img.id} className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center relative">
                    <img src={img.url} alt={img.name} className="h-32 w-auto object-contain rounded mb-2 border" />
                    {renamingId === img.id ? (
                      <input
                        className="border border-green-300 rounded px-2 py-1 mb-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                        value={renameValue}
                        onChange={e => setRenameValue(e.target.value)}
                        onBlur={() => handleImageRename(img.id)}
                        autoFocus
                      />
                    ) : (
                      <span className="font-semibold text-gray-700 mb-2">{img.name}</span>
                    )}
                    <div className="flex gap-2 mt-2">
                      <button
                        className="text-green-600 hover:text-green-900"
                        onClick={() => { setRenamingId(img.id); setRenameValue(img.name); }}
                      >
                        {(() => { const Icon = FiEdit2 as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon />; })()}
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleImageDelete(img.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Navigation Management Section */}
          {activeSection === 'navigation' && (
            <div className="bg-white rounded-xl shadow p-8 min-h-[400px]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-green-700 flex items-center gap-2">{(() => { const Icon = FiMenu as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon />; })()} Manage Navigation</h2>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
                  onClick={() => setAddingNav(true)}
                >
                  Add Link
                </button>
              </div>
              {/* Add Link Modal */}
              {addingNav && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                    <h3 className="text-lg font-bold mb-4 text-green-700">Add Navigation Link</h3>
                    <input
                      type="text"
                      placeholder="Label"
                      className="border rounded px-3 py-2 mb-3 w-full"
                      value={newNavLabel}
                      onChange={e => setNewNavLabel(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="URL"
                      className="border rounded px-3 py-2 mb-4 w-full"
                      value={newNavUrl}
                      onChange={e => setNewNavUrl(e.target.value)}
                    />
                    <div className="flex gap-2 justify-end">
                      <button className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300" onClick={() => setAddingNav(false)}>Cancel</button>
                      <button
                        className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                        onClick={handleNavAdd}
                        disabled={!newNavLabel || !newNavUrl}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="space-y-4">
                {navigation.map((link, idx) => (
                  <div key={link.id} className="flex items-center gap-4 bg-gray-50 rounded-lg shadow p-4">
                    {navEditId === link.id ? (
                      <>
                        <input
                          className="border border-green-300 rounded px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                          value={navEditLabel}
                          onChange={e => setNavEditLabel(e.target.value)}
                          placeholder="Label"
                        />
                        <input
                          className="border border-green-300 rounded px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-green-200"
                          value={navEditUrl}
                          onChange={e => setNavEditUrl(e.target.value)}
                          placeholder="URL"
                        />
                        <button
                          className="text-green-600 hover:text-green-900 mr-2"
                          onClick={() => handleNavEdit(link.id)}
                        >
                          Save
                        </button>
                        <button
                          className="text-gray-500 hover:text-gray-700"
                          onClick={() => setNavEditId(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="font-semibold text-gray-700 mr-2">{link.label}</span>
                        <span className="text-gray-500 mr-2">{link.url}</span>
                        <button
                          className="text-green-600 hover:text-green-900 mr-2"
                          onClick={() => { setNavEditId(link.id); setNavEditLabel(link.label); setNavEditUrl(link.url); }}
                        >
                          {(() => { const Icon = FiEdit2 as React.FC<React.SVGProps<SVGSVGElement>>; return <Icon />; })()}
                        </button>
                        <button
                          className="text-red-500 hover:text-red-700 mr-2"
                          onClick={() => handleNavDelete(link.id)}
                        >
                          Delete
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          onClick={() => handleNavMove(idx, 'up')}
                          disabled={idx === 0}
                        >
                          ↑
                        </button>
                        <button
                          className="text-yellow-500 hover:text-yellow-700"
                          onClick={() => handleNavMove(idx, 'down')}
                          disabled={idx === navigation.length - 1}
                        >
                          ↓
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Placeholder for other management sections */}
          {activeSection !== 'pages' && (
            <div className="bg-white rounded-xl shadow p-8 min-h-[400px] flex flex-col items-center justify-center">
              <span className="text-4xl text-green-400 mb-4">{(() => { const Icon = sections.find(s => s.key === activeSection)?.icon as React.FC<React.SVGProps<SVGSVGElement>> | undefined; return Icon ? <Icon /> : null; })()}</span>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{sections.find(s => s.key === activeSection)?.label}</h2>
              <p className="text-gray-500">This is the {sections.find(s => s.key === activeSection)?.label} management area. (Editing UI coming next!)</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 