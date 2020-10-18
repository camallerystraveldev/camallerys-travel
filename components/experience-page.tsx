import { Experience, ComponentProps } from "../types";

type ExperiencePageProps = {
  experience: Experience;
} & ComponentProps;

export default function ExperiencePage({
  experience: {
    title,
    description,
    locations,
    duration,
    groupSize,
    included,
    languages,
    places,
    categories,
    price,
  },
  className,
}: ExperiencePageProps) {
  return <div className={`${className}`}></div>;
}
