export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
}

export interface Skill {
  category: string;
  items: string[];
}