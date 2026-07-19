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
}

export const events: EventItem[] = [
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
];
