interface ChooseHomeCardProps {
  title: string;
  content: string;
}

const ChooseHomeCard = ({ title, content }: ChooseHomeCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <div className="h-20 w-20 rounded-full bg-slate-500" />
      <h5 className=" text-2xl font-bold text-center">{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default ChooseHomeCard;
