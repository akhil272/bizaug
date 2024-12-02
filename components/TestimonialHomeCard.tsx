import Image from "next/image";

interface TestimonialHomeCardProps {
  name: string;
  businessName: string;
  content: string;
  imageUrl: string;
}

const TestimonialHomeCard = ({
  name,
  businessName,
  content,
  imageUrl,
}: TestimonialHomeCardProps) => {
  return (
    <div className="flex bg-white text-neutral-900 rounded-lg lg:items-center">
      <div className="relative lg:max-h-72 w-2/5">
        <Image
          src={`/assets/images/${imageUrl}.jpg`}
          alt={name}
          width={300}
          height={300}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="flex flex-col p-4 text-left w-3/5">
        <p className="my-4 text-sm">{content}</p>
        <h5 className="text-xl font-semibold">{name}</h5>
        <p>{businessName}</p>
      </div>
    </div>
  );
};

export default TestimonialHomeCard;
