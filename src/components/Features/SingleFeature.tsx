import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, points } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="mb-5 font-medium">
          {paragraph}
        </p>
        <ul className="list-disc ml-6 space-y-2">
        {points.map((point, index) => (
          <li key={index}>
            <span className="font-medium"><b>{point.title}</b></span> {point.description}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default SingleFeature;
