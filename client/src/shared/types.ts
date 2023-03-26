export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses ="ourclasses",
    ContactUs = "contactus"
  }

  export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

  export interface ClassesType {
    image: JSX.Element;
    name: string;
    description: string;
  }