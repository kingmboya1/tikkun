export interface EventItem {
  id: string;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  extra?: string;
  additionalImages?: string[];
  documents?: { label: string; url: string }[];
  /** Shown in full (not cropped) under the description, e.g. an event poster. */
  featuredImage?: string;
  /** Self-hosted video clips (paths under public/). */
  videos?: { title: string; src: string; poster?: string }[];
  /** YouTube videos, embedded by video id. */
  youtube?: { title: string; id: string }[];
  /** External links, e.g. the full broadcast on Facebook. */
  links?: { label: string; url: string }[];
}

export const events: EventItem[] = [
  {
    id: "international-mens-day-2026",
    title: "International Men's Day 2026",
    date: "19th November 2026",
    location: "Growing Strong Men, Nurturing Strong Communities",
    image: "assets/images/events/international-mens-day-2026.jpg",
    featuredImage: "assets/images/events/international-mens-day-2026.jpg",
    description:
      "Today, Tikkun Africa Foundation celebrates the men and boys who positively shape our families, communities, and society through leadership, responsibility, integrity, and service. We recognize the important role men play in promoting healthy families, supporting education, advancing community development, and creating opportunities for future generations. As we mark this day, we encourage all men and boys to continue being champions of positive change, equality, well-being, and sustainable development. Together, we can build stronger communities where everyone has the opportunity to thrive.",
    additionalImages: [],
    documents: [],
  },
  {
    id: "breast-cancer-screening-walk-2026",
    title: "Free Breast Cancer Screening and Community Walk Awareness",
    date: "30th October 2026",
    location: "Nkaimurunya Ward, Kajiado North Sub County",
    image: "assets/images/events/breast-cancer-walk-2026-07.jpg",
    extra: "About 200 women screened",
    description: [
      "Under the theme “Cancer Can Affect Anyone – Early Detection Saves Lives”, stakeholders came together on 30th October 2026 for a community walk and breast cancer awareness and screening exercise aimed at promoting early detection, prevention and access to essential healthcare services.",
      "The event began with a community walk from Masai Lodge to Honeymoon Grounds, bringing together healthcare professionals, development partners, faith-based leaders, community health teams and members of the public in a strong show of solidarity against cancer. Key stakeholders included the Kajiado County Department of Medical Services, Public Health and Sanitation, Wama Hospital, Nosim Medical Centre, Tikkun Africa Foundation, Ultra Diagnostic Centre and Global Ministry for Christ.",
      "Mr. Samwel Muchiri, Sub-County Administrator, representing the County Government, reaffirmed the importance of collaborative efforts in strengthening community health services. The Chief Guest, Dr. Richard Wangombe, Director of Wama Hospital, emphasized the need to prioritize cancer awareness and screening. Dr. Paul Gwako, Director of Nosim Cancer Centre, delivered an informative health talk on cancer awareness, prevention and the importance of early diagnosis.",
      "Partner representatives Ms. Gertrude of Tikkun Africa Foundation and Ms. Rahma Abdikadir of Ultra Diagnostic Centre shared brief remarks highlighting the importance of partnerships in advancing healthcare. Pastor Isaiah Atieno of Global Ministry for Christ and Pastor Kidiavai of New Life Mission Centre, Kware, offered spiritual encouragement and words of hope. Lucy Nzenya, CHP Coordinator, recognized the vital contribution of Community Health Assistants (CHAs) and Community Health Promoters (CHPs), whose efforts were instrumental in community mobilization.",
      "The screening team screened approximately 200 clients, both young and elderly women. The exercise demonstrated the power of partnership, community participation and preventive healthcare in the fight against cancer. Together, we can create awareness, encourage early screening and save lives.",
    ].join("\n\n"),
    additionalImages: [
      "assets/images/events/breast-cancer-walk-2026-01.jpg",
      "assets/images/events/breast-cancer-walk-2026-02.jpg",
      "assets/images/events/breast-cancer-walk-2026-03.jpg",
      "assets/images/events/breast-cancer-walk-2026-04.jpg",
      "assets/images/events/breast-cancer-walk-2026-05.jpg",
      "assets/images/events/breast-cancer-walk-2026-06.jpg",
    ],
    youtube: [
      {
        title: "Citizen TV: Kenyans urged to go for early breast cancer screening",
        id: "8PxT2-W4h44",
      },
    ],
    videos: [
      {
        title: "The Walk",
        src: "assets/videos/breast-cancer-walk-2026/walk.mp4",
        poster: "assets/videos/breast-cancer-walk-2026/walk.jpg",
      },
      {
        title: "Dr. Richard Wangombe, Founder – WAMA Medical Centre",
        src: "assets/videos/breast-cancer-walk-2026/brief-1.mp4",
        poster: "assets/videos/breast-cancer-walk-2026/brief-1.jpg",
      },
      {
        title: "Ms. Gertrude, Founder – Tikkun Africa Foundation",
        src: "assets/videos/breast-cancer-walk-2026/brief-2.mp4",
        poster: "assets/videos/breast-cancer-walk-2026/brief-2.jpg",
      },
      {
        title: "Dr. Paul Gwako, Founder – Nosim Cancer Centre",
        src: "assets/videos/breast-cancer-walk-2026/brief-3.mp4",
        poster: "assets/videos/breast-cancer-walk-2026/brief-3.jpg",
      },
      {
        title: "Pastor Isaiah Atieno – Global Ministry for Christ",
        src: "assets/videos/breast-cancer-walk-2026/brief-4.mp4",
        poster: "assets/videos/breast-cancer-walk-2026/brief-4.jpg",
      },
    ],
    links: [
      {
        label: "Watch the full TPM TV live broadcast on Facebook",
        url: "https://www.facebook.com/share/v/1CMphQxDbJ/",
      },
    ],
    documents: [],
  },
  {
    id: "donate-sanitary-towels-2026",
    title: "Donate Sanitary Towels: Empower Girls in Kinango",
    date: "11th & 18th July 2026",
    location: "Kinango Sub County, Kwale County",
    image: "assets/images/donate-sanitary-towels-2026.jpg",
    description:
      "11th & 18th July 2026 · Kinango Sub County, Kwale County · Target: 1,000 Girls",
    extra: "Target: 1,000 Girls",
    additionalImages: [],
    documents: [],
  },
  {
    id: "mayor-road-cleanup-exercise",
    title: "Cleanup Exercise!",
    date: "9.00 AM - 12.00 PM",
    location: "Mayor Road, Ongata Rongai | Nkaimurunya Chief's Camp",
    image: "assets/images/June.jpg",
    description:
      "9.00 AM - 12.00 PM · Mayor Road, Ongata Rongai · Nkaimurunya Chief's Camp",
    additionalImages: [],
    documents: [],
  },
  {
    id: "plant-a-tree-labor-day",
    title: "Plant a tree This Labor day!",
    date: "10.00 AM - 12.00 PM",
    location: "Ongata Rongai Primary School | Nkaimurunya Chief's Camp",
    image: "assets/images/labor.jpg",
    description:
      "10.00 AM - 12.00 PM · Ongata Rongai Primary School · Nkaimurunya Chief's Camp",
    additionalImages: [],
    documents: [],
  },
];
