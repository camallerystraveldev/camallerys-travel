export type ComponentProps = {
  className?: string;
};

export type Experience = {
  title: string;
  description: string;
  locations: Array<string>;
  duration: number;
  groupSize: number;
  included: Array<string>;
  languages: Array<string>;
  places: Array<string>;
  categories: Array<string>;
  price: number;
};
