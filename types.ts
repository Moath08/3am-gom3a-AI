
export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
