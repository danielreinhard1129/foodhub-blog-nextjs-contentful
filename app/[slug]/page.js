import { getEntryBySlug } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { format } from "date-fns";
import { Badge } from "flowbite-react";
import Image from "next/image";
import { findAsset, findCategory } from "../helper";
import getBase64 from "@/utils/getBase64";

export async function generateMetadata({ params }, parent) {
  // read route params
  const slug = params.slug;

  // fetch data
  const blog = await getEntryBySlug(slug);

  const thumbnail = findAsset(
    blog.items[0].fields.thumbnail.sys.id,
    blog.includes.Asset,
  );

  return {
    metadataBase: new URL("https://foodhub-blog-daniel.vercel.app/"),
    title: blog.items[0].fields.title,
    description: blog.items[0].fields.descriptions,
    openGraph: {
      description: blog.items[0].fields.descriptions,
      images: [
        {
          url: `https:${thumbnail.fields.file.url}`,
        },
      ],
    },
  };
}

const BlogDetail = async ({ params }) => {
  const blog = await getEntryBySlug(params.slug);
  const date = format(new Date(blog.items[0].fields.createdAt), "dd MMMM yyyy");

  const idAsset = blog.items[0].fields.thumbnail.sys.id;
  const assets = blog.includes.Asset;
  const thumbnail = findAsset(idAsset, assets);

  const idCategory = blog.items[0].fields.category.sys.id;
  const entries = blog.includes.Entry;
  const category = findCategory(idCategory, entries);

  const base64 = await getBase64(`https:${thumbnail.fields.file.url}`);

  function RichTextAsset({ id, assets }) {
    const asset = findAsset(id, assets);

    return (
      <div className="relative my-4 h-[200px] lg:h-[400px]">
        <Image
          fill
          src={`https:${asset.fields.file.url}`}
          alt="Thumbnail image"
          className="object-cover"
        />
      </div>
    );
  }

  const Code = ({ children }) => {
    return <span className="bg-gray-200 font-mono">{children}</span>;
  };
  const RICHTEXT_OPTIONS = {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return <Code>{text}</Code>;
      },
    },
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return (
          <h2 className="my-2 text-xl font-semibold lg:my-4">{children}</h2>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="text-lg font-light">{children}</p>;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        return (
          <RichTextAsset
            id={node.data.target.sys.id}
            assets={blog.includes.Asset}
          />
        );
      },
    },
  };

  return (
    <main className="container mx-auto mt-10 max-w-6xl px-4">
      {/* HEADER */}
      <section className="mb-4">
        <Badge color="success" size="md" className="mb-2 w-fit">
          {category.fields.title}
        </Badge>
        <h1 className="mb-2 text-5xl font-semibold">
          {blog.items[0].fields.title}
        </h1>
        <h3 className="mb-4">{date}</h3>
        <div className="relative h-[200px] lg:h-[400px]">
          <Image
            fill
            src={`https:${thumbnail.fields.file.url}`}
            alt="Thumbnail image"
            className="object-cover"
            placeholder="blur"
            blurDataURL={base64}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section>
        {documentToReactComponents(
          blog.items[0].fields.content,
          RICHTEXT_OPTIONS,
        )}
      </section>
    </main>
  );
};

export default BlogDetail;
