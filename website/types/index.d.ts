
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
  url: string,
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

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface PersonalFormData {
  firstName: string;
  middleName: string;
  surname: string;
  disable: boolean;
  title: string;
  gender: string;
  nationality: string;
  ethnicity: string;
  kcse: string;
  kcpe: string;
  county: string;
  dob:Date | null;
  intake:string;
  programme_type:string;
  stage:string;
  programme:string;
  address:string;
  phoneNumber:string;
  postalCode:string;
  email:string;
  town:string;
  kcpeResults:string;
  kcseResults:string;
  leavingCertificate: string;
  NationalID:string;
  birthCertificate: string;
  applicationForm: string;
  passports: string[];
}

interface SelectOption {
  value: string;
  label: string;
}