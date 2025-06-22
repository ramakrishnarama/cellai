const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  points
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  points: Array<{ title: string; description: string }>;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[30px]">
          {title}
        </h2>
        <p className="font-medium">
          {paragraph}
        </p>
        {points && (
        <ul className="list-disc ml-6 mt-4 space-y-2 text-left">
          {points.map((point: { title: string; description: string }, index: number) => (
            <li key={index}>
              <span className="font-medium">{point.title}</span>
              {point.description && <> — {point.description}</>}
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
};

export default SectionTitle;
