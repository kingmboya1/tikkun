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
        `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-01.jpg`,
    ];
    const [bannerSlide, setBannerSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setBannerSlide(prev => (prev + 1) % bannerSlides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [bannerSlides.length]);

    const galleryItems: GalleryItem[] = [
        {
            id: 4,
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
            id: 1,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/malawi_3.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Malawi GWLN Class"
        },
        {
            id: 5,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/canada_1.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Canada DE"
        },
        {
            id: 6,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/canada_2.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Canada DE Graduation"
        },

        {
            id: 7,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_1.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "MSA Farm Kits"
        },

        {
            id: 8,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_2.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "MSA Farm Kits"
        },

        {
            id: 9,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_3.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },

        {
            id: 37,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_5.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },

        {
            id: 39,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_7.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },

        {
            id: 40,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_8.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },

        {
            id: 41,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_9.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },

        {
            id: 55,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/climate_10.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Climate Action & Renewable Energy"
        },

        {
            id: 12,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening_1.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Ongata Greening"
        },
        {
            id: 13,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening_2.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Ongata Greening"
        },
        {
            id: 15,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_1.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Maalawi Annual Youth Conference"
        },
        {
            id: 16,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_2.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Maalawi Annual Youth Conference"
        },
        {
            id: 18,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_4.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Maalawi Annual Youth Conference"
        },
        {
            id: 20,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_6.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Maalawi Annual Youth Conference"
        },
        {
            id: 22,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/conf_8.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Maalawi Annual Youth Conference"
        },
        {
            id: 23,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/behavior_1.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Behavior Change Catch Up"
        },
        {
            id: 24,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 25,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_2.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 26,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_3.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 28,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_5.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 29,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_6.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 30,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_7.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 31,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_8.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 42,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_10.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 43,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_11.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 44,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_12.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 45,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_13.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 33,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 34,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_2.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },
        {
            id: 35,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_after_3.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 48,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_3.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 49,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_4.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 52,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_7.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 51,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_6.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 50,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/tollen_children_5.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Tollen"
        },

        {
            id: 53,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_1.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },

        {
            id: 54,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_2.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },

        {
            id: 80,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_4.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },

        {
            id: 81,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/women_3.jpg`,
            categories: ["Transformative Education & Empowerment"],
            alt: "Women"
        },

        {
            id: 69,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/malawi_11.jpg`,
            categories: ["Organization and Capacity Building"],
            alt: "Women"
        },

        {
            id: 68,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/malawi_12.jpg`,
            categories: ["Organization and Capacity Building"],
            alt: "Women"
        },

        {
            id: 67,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/malawi_10.jpg`,
            categories: ["Organization and Capacity Building"],
            alt: "Women"
        },

        {
            id: 92,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/children_1.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Youth"
        },

        {
            id: 97,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community_3.jpg`,
            categories: ['Networking and Partnerships'],
            alt: "Women"
        },

        {
            id: 98,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth1.jpg`,
            categories: ['Organization and Capacity Building'],
            alt: "Women"
        },

        {
            id: 99,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth2.jpg`,
            categories: ['Organization and Capacity Building'],
            alt: "Women"
        },

        {
            id: 100,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/youth3.jpg`,
            categories: ['Organization and Capacity Building'],
            alt: "Women"
        },

        {
            id: 102,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-01.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 103,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-02.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 106,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-05.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 107,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-06.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 108,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-07.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 109,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-08.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 110,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-09.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 111,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-10.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 112,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-11.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 113,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-12.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 114,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-13.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 115,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-14.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },
        {
            id: 116,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/jasmin-girls-empowerment-15.jpg`,
            categories: ['Transformative Education & Empowerment'],
            alt: "Jasmin Girls Empowerment"
        },

        {
            id: 117,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-01.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 118,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-02.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 119,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-03.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 120,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-04.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 121,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-05.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 122,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-06.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 123,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-07.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 124,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-08.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 125,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-09.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 126,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-10.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },
        {
            id: 127,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/community-cleanup-11.jpg`,
            categories: ['Behavior Change Catch Up'],
            alt: "Community Cleanup"
        },

        {
            id: 128,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-01.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 129,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-02.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 130,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-03.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 131,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-04.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 132,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-05.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 133,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-06.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 134,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-07.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 135,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-08.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 136,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-09.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 137,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-10.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },
        {
            id: 138,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/greening-drive-11.jpg`,
            categories: ['Climate Action & Renewable Energy'],
            alt: "Tree Planting Drive"
        },

        {
            id: 139,
            imageUrl: `${process.env.PUBLIC_URL}/assets/images/gallery/together-we-are-stronger.png`,
            categories: ['Networking and Partnerships'],
            alt: "Together, we are stronger"
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

    // Sort items: Portrait first, then Landscape
    const sortedItems = [...filteredItems].sort((a, b) => {
        const orientationA = orientations[a.id];
        const orientationB = orientations[b.id];

        // If one is loaded and other is not, prioritize loaded? No, order by portrait/landscape
        // If both undefined (not loaded), keep original order
        if (!orientationA || !orientationB) return 0;

        if (orientationA === orientationB) return 0;
        return orientationA === 'portrait' ? -1 : 1; // Portrait first (appears first)
    });


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

            <section className="gallery-page-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
                <div className="auto-container">
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
                                        backgroundColor: activeFilter === category ? '#2e7d32' : '#fff',
                                        color: activeFilter === category ? '#fff' : '#333',
                                        boxShadow: activeFilter === category
                                            ? '0 4px 15px rgba(46, 125, 50, 0.4)'
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
                            {sortedItems.map(item => (
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
                                            color: '#2e7d32',
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