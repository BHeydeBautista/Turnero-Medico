export interface NavLink {
  text: string;
  url?: string;
  submenu?: {
    title: string;
    url: string;
    description?: string;
  }[];
}
