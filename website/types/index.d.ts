
// Nav items types
interface SectionItems {
  title: string;
  url: string;
}

interface NavItem {
  title: string;
  url: string;
  links?: Array<{
    section?: string;
    items: SectionItems[];
  }>;
}

interface AboutItem {
  title: string,
  imageUrl: string,
  text: string,
  url?: string,
}

interface TimelineProps {
  year:string;
  title:string;
  icon: string;
  description: string;
  color:string;
  bgColor: string;
  details?:string[];
  image?:string;
}