// types.d.ts

// Interface for Interns
interface Intern {
    name: string;
    age: number;
    skills: string[];
  }
  // Interface for Juniors
  export enum Domain {
    Web = "Web",
    Connect = "Connect",
    Backend = "Backend",
  }
  
  interface Junior {
    name: string;
    age: number;
    skills: string[];
    date_of_promotion: Date;
    domain: Domain;
  }
  
  // Interface for Company
  export interface Company {
    Interns: Intern[];
    Juniors: Junior[];
    Country: string;
  }