
export interface Coach {
  id: string;
  name: string;
  position: string;
  team: string;
  experience: string[];
  imageUrl: string;
}

export interface Branch {
  name: string;
  type: string;
  coordinates: { lat: number; lng: number };
}

export interface NewsItem {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface ChartData {
  month: string;
  standard: number;
  aav: number;
}
