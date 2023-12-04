import { format } from "date-fns";
import { Badge, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { findAsset, findCategory } from "../helper";
import getBase64 from "@/utils/getBase64";

async function CardPost({ data, includes }) {
  const image = findAsset(data.fields.thumbnail.sys.id, includes.Asset);
  const category = findCategory(data.fields.category.sys.id, includes.Entry);
  const date = format(new Date(data.fields.createdAt), "dd MMMM yyyy");
  const base64 = await getBase64(`https:${image.fields.file.url}`);

  return (
    <Link href={`/${data.fields.slug}`}>
      <Card>
        <div className="relative h-[190px]">
          <Image
            fill
            src={`https:${image.fields.file.url}`}
            alt="Thumbnail image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={base64}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <Badge color="success" size="xs" className="w-fit">
              {category.fields.title}
            </Badge>
            <Badge color="gray" size="xs" className="w-fit">
              {date}
            </Badge>
          </div>

          <h5 className="line-clamp-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.fields.title}
          </h5>
          <p className="line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
            {data.fields.descriptions}
          </p>
        </div>
      </Card>
    </Link>
  );
}

export default CardPost;
