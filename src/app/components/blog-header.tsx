import Image from "next/image";
import { parseISO, format } from "date-fns";
import { type Author } from "@/interfaces/author";
import { BlogTitle } from "@/app/components/blog-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function BlogHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <BlogTitle>{title}</BlogTitle>
      <div className="hidden md:block md:mb-12">
        <div className="flex items-center">
          <Image src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} width={100} height={100} />
          <div className="text-xl font-bold">{author.name}</div>
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          width={1300}
          height={630}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <div className="flex items-center">
            <Image src={author.picture} className="w-12 h-12 rounded-full mr-4" alt={author.name} width={100} height={100} />
            <div className="text-xl font-bold">{author.name}</div>
          </div>
        </div>
        <div className="mb-6 text-lg">
          <time dateTime={date}>{format(parseISO(date), "LLLL	d, yyyy")}</time>
        </div>
      </div>
    </>
  );
}
