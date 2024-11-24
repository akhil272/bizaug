import { Button } from "./ui/button";

interface ServiceHomeCardProps {
  title: string;
  content: string;
}

const ServiceHomeCard = ({ title, content }: ServiceHomeCardProps) => {
  return (
    <div className="rounded-lg bg-white text-neutral-900 lg:my-0 my-4">
      <div className="h-40 bg-slate-500" />
      <div className="p-4 flex flex-col gap-2">
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p>{content}</p>
        <Button className="text-white w-full ">Learn More</Button>
      </div>
    </div>
  );
};

export default ServiceHomeCard;
