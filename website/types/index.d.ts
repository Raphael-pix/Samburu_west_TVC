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
