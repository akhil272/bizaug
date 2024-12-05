interface ServiceCardProps {
  title: string;
  imageUrl: string;
}

const ServiceCard = ({ title, imageUrl }: ServiceCardProps) => {
  return (
    <div className="relative  h-48 rounded-lg overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all opacity-40 group-hover:opacity-10 group-hover:animate-pulse"
        style={{
          backgroundImage: `url('/assets/images/${imageUrl}.jpg')`,
        }}
      ></div>
      <h4 className="absolute inset-0 flex items-center pl-10 text-2xl font-bold text-secondary">
        {title}
      </h4>
    </div>
  );
};

export default ServiceCard;
