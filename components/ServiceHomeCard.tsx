import { Button } from "./ui/button";
import Image from "next/image";

interface ServiceHomeCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const ServiceHomeCard = ({
  title,
  content,
  imageUrl,
}: ServiceHomeCardProps) => {
  return (
    <div className="rounded-lg bg-white text-neutral-900 lg:my-0 my-4">
      <div className="relative h-40">
        <Image
          src={`/assets/images/${imageUrl}.jpg`}
          width={320}
          height={320}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p>{content}</p>
        <Button className="text-secondary w-full hover:bg-primary/90 ">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ServiceHomeCard;
