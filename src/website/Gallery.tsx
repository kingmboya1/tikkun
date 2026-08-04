import React, { useEffect, useState } from 'react'
import Headers from "../layouts/Headers";
import Footer from '../layouts/Footer'
import Search from '../layouts/Search'

type GalleryItem = {
    id: number;
    imageUrl: string;
    categories: string[];
    alt: string;
    orientation?: 'landscape' | 'portrait';
};

const Gallery: React.FC = () => {
    useEffect(() => {
        document.title = "Our Gallery - Tikkun Africa Foundation"
    }, []);

    const [orientations, setOrientations] = useState<Record<number, 'landscape' | 'portrait'>>({});

    const bannerSlides = [
        `${process.env.PUBLIC_URL}/assets/images/gallery.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-09.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-15.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-06.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/women_5.jpg`,
    ];
    const [bannerSlide, setBannerSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBannerSlide(prev => (prev + 1) % bannerSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [bannerSlides.length]);

    const pageBgSlides = [
        `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-04.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/climate_3.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-06.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-06.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_3.jpg`,
        `${process.env.PUBLIC_URL}/assets/images/gallery/women_3.jpg`,
    ];
    const [pageBgSlide, setPageBgSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPageBgSlide(prev => (prev + 1) % pageBgSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [pageBgSlides.length]);

    const galleryItems: GalleryItem[] = [
        // 1. Malawi Group
        {
            id: 1,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/malawi_1.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi GWLN"
        },
        {
            id: 2,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/malawi_2.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi GWLN Group"
        },
        {
            id: 3,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/malawi_3.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi GWLN Class"
        },
        {
            id: 4,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/malawi_10.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },
        {
            id: 5,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/malawi_11.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },
        {
            id: 6,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/malawi_12.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },


        // 2. Women Group
        {
            id: 10,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_1.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },
        {
            id: 11,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_2.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },
        {
            id: 13,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_4.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },
        {
            id: 14,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_5.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women Empowerment"
        },
        {
            id: 15,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_1.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "MSA Farm Kits"
        },
        {
            id: 16,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_5.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },
        {
            id: 17,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_6.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },


        // 3. Tollen Group
        {
            id: 20,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 21,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_2.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 22,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_3.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 23,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_4.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 24,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_5.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 25,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_6.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 27,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_8.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },


        // 4. Tollen After Group
        {
            id: 30,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen After"
        },
        {
            id: 31,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_2.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen After"
        },
        {
            id: 32,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_3.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen After"
        },


        // 5. Youth Group
        {
            id: 35,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },
        {
            id: 36,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth2.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },
        {
            id: 37,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth3.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },
        {
            id: 38,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth4.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },
        {
            id: 39,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth5.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },
        {
            id: 40,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/children_1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },


        // 6. Tollen Children Group
        {
            id: 41,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_4.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen Children"
        },
        {
            id: 42,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_6.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen Children"
        },
        {
            id: 43,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_7.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen Children"
        },


        // 7. Canada Group
        {
            id: 45,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/canada_1.jpg`,
            categories: ['Organization and Capacity Building'],
            alt: "Canada DE"
        },
        {
            id: 46,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/canada_2.jpg`,
            categories: ['Organization and Capacity Building'],
            alt: "Canada DE Graduation"
        },


        // 8. Conf Group
        {
            id: 50,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_1.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi Annual Youth Conference"
        },
        {
            id: 51,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_2.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi Annual Youth Conference"
        },
        {
            id: 52,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_4.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi Annual Youth Conference"
        },
        {
            id: 53,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_6.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi Annual Youth Conference"
        },
        {
            id: 54,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_8.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi Annual Youth Conference"
        },


        // 9. Jasmin Girls Empowerment Group (02-15 only, excluding 01, 03, 04)
        {
            id: 60,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-02.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 61,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-05.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 62,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-06.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 63,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-07.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 64,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-08.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 65,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-09.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 66,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-10.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 67,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-11.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 68,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-12.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 69,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-13.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 70,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-14.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 71,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-15.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },


        // 10. Community Cleanup Group
        {
            id: 80,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-01.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 81,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-02.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 82,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-03.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 83,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-04.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 84,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-05.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 85,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-06.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 86,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-07.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 87,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-08.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 88,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-09.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 90,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-11.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Community Cleanup"
        },
        {
            id: 91,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community_3.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community"
        },


        // 11. Climate Group
        {
            id: 100,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_2.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action"
        },
        {
            id: 101,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_3.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action"
        },
        {
            id: 102,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_7.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action"
        },
        {
            id: 103,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_8.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action"
        },
        {
            id: 104,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_9.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action"
        },
        {
            id: 105,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_10.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action"
        },
        {
            id: 106,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening_1.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Ongata Greening"
        },
        {
            id: 107,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening_2.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Ongata Greening"
        },


        // 12. Greening Drive Group
        {
            id: 110,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-01.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 111,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-02.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 112,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-03.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 113,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-04.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 114,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-05.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 115,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-06.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 116,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-07.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 117,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-08.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 118,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-09.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 119,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-10.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 120,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-11.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        }
    ];

    useEffect(() => {
        galleryItems.forEach(item => {
            const img = new Image();
            img.src = item.imageUrl;
            img.onload = () => {
                setOrientations(prev => ({
                    ...prev,
                    [item.id]: img.naturalHeight > img.naturalWidth ? 'portrait' : 'landscape'
                }));
            };
        });
    }, []);

    const categories = ['Behavior Change Catch Up',
        'all',
        'Transformative Education & Empowerment',
        'Climate Action & Renewable Energy', 'Organization and Capacity Building', 'Networking and Partnerships'];
    const [activeFilter, setActiveFilter] = useState<string>('all');

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.categories.includes(activeFilter));

    // No sorting - preserve the exact order from galleryItems array (grouped by tag)
    const sortedItems = filteredItems;


    return (

        <div className={"page-wrapper"} >

            <Headers />
            <Search />

            <section className="page-banner">
                {bannerSlides.map((slide, index) => (
                    <div
                        key={slide}
                        className="image-layer"
                        style={{
                            backgroundImage: `url(${slide})`,
                            opacity: index === bannerSlide ? 1 : 0,
                            transition: 'opacity 1.5s ease-in-out',
                        }}
                    ></div>
                ))}
                <div className="bottom-rotten-curve"></div>

                <div className="auto-container">
                    <h1>Our Gallery</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="/">Home</a></li>
                        <li className="active">Gallery</li>
                    </ul>
                </div>
            </section>

            <section className="gallery-page-section" style={{ padding: '80px 0', position: 'relative' }}>
                {pageBgSlides.map((slide, index) => (
                    <div
                        key={slide}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            backgroundImage: `url(${slide})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            opacity: index === pageBgSlide ? 1 : 0,
                            transition: 'opacity 2s ease-in-out',
                            zIndex: 0,
                        }}
                    ></div>
                ))}
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(248, 249, 250, 0.88)',
                    zIndex: 0,
                }}></div>
                <div className="auto-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="gallery-container">
                        {/* Category Filter Pills */}
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '10px',
                            marginBottom: '40px'
                        }}>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    style={{
                                        padding: '10px 24px',
                                        border: 'none',
                                        borderRadius: '25px',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        transition: 'all 0.3s ease',
                                        backgroundColor: activeFilter === category ? '#228B22' : '#fff',
                                        color: activeFilter === category ? '#fff' : '#333',
                                        boxShadow: activeFilter === category
                                            ? '0 4px 15px rgba(34, 139, 34, 0.4)'
                                            : '0 2px 8px rgba(0,0,0,0.1)',
                                    }}
                                >
                                    {category === 'all' ? 'All Photos' : category}
                                </button>
                            ))}
                        </div>

                        {/* Gallery Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '20px',
                        }}>
                            {filteredItems.map(item => (
                                <div
                                    key={item.id}
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '12px',
                                        aspectRatio: '4/3',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                                    }}
                                >
                                    <img
                                        src={item.imageUrl}
                                        alt={item.alt}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s ease',
                                        }}
                                    />
                                    <a
                                        href={item.imageUrl}
                                        className="lightbox-image"
                                        data-fancybox="gallery"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'rgba(0,0,0,0.4)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                                    >
                                        <span style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '20px',
                                            color: '#228B22',
                                        }}>
                                            +
                                        </span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>

    )

}

export default Gallery
