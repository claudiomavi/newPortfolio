import { Link } from "react-router-dom";

export default function Project({
  imageUrl,
  title,
  description,
  siteUrl,
  lenguages,
  date,
}) {
  return (
    <div className="not-md:grid-cols-1 not-md:gap-8 not-md:text-center grid grid-cols-[1.5fr_1fr] gap-20">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="max-w-1/2 m-auto mb-8 block object-cover"
          loading="lazy"
        />
      </div>
      <div className="not-md:items-center flex flex-col items-start justify-center py-8">
        <h3 className="not-sm:font-4xl mb-8 text-5xl font-bold">{title}</h3>
        <h4 className="not-sm:text-2xl leading-12 mb-12 max-w-5xl text-3xl text-gray-400">
          {lenguages && lenguages}
        </h4>
        <p className="not-sm:text-2xl leading-12 mb-12 max-w-5xl text-3xl text-gray-400">
          {description}
        </p>
        <p className="not-sm:text-2xl leading-12 mb-12 max-w-5xl text-3xl text-gray-400">
          {date && `Last update: ${date}`}
        </p>
        <a
          href={siteUrl}
          disabled={siteUrl ? false : true}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-n-blue mb-16 px-[5rem] py-6 text-[1.6rem] text-white disabled:bg-gray-500/10"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}
