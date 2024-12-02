import Image from "next/image";

interface ChooseHomeCardProps {
  title: string;
  content: string;
  imageUrl: string;
}

const ChooseHomeCard = ({ title, content, imageUrl }: ChooseHomeCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-20 w-20">
        <Image
          src={`/assets/images/${imageUrl}.jpg`}
          alt={title}
          height={200}
          width={200}
          className="rounded-full object-cover h-20 w-20"
        />
      </div>
      <h5 className="text-2xl font-bold text-center">{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default ChooseHomeCard;
