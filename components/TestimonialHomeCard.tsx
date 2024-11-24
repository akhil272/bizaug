interface TestimonialHomeCardProps {
  name: string;
  businessName: string;
  content: string;
}

const TestimonialHomeCard = ({
  name,
  businessName,
  content,
}: TestimonialHomeCardProps) => {
  return (
    <div className="flex bg-white text-neutral-900 rounded-lg">
      <div className="bg-slate-500 w-2/5" />
      <div className="flex flex-col p-4 text-left w-3/5">
        <p className="my-4 text-sm">{content}</p>
        <h5 className="text-xl font-semibold">{name}</h5>
        <p>{businessName}</p>
      </div>
    </div>
  );
};

export default TestimonialHomeCard;
