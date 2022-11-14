import React, { FC } from "react";
import { TRecommendedContent } from "../../../interfaces";

export type TRecommendedProps = {
  content: TRecommendedContent;
};

const Recommended: FC<TRecommendedProps> = ({ content }) => {
  return (
    <div className="duration-100 ease-out transition-all translate-y-0 w-72 h-50 flex items-start justify-start flex-col gap-2 bg-white dark:bg-slate-800 max-w-xs p-3 rounded-md shadow-md">
      <img
        className="w-24 h-24 rounded-sm"
        src={content.image_link}
        alt={`Ilustração do livro ${content.book_name}`}
      />

      <p className="text-lg font-semibold overflow-hidden truncate w-60 whitespace-nowrap">
        {content.book_name}
      </p>
      <p className="text-sm">por: {content.Author}</p>
      <p className="text-sm">Categoria: {content.Category}</p>
    </div>
  );
};

export default Recommended;
