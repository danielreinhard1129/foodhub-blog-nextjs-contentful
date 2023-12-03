import Autocomplete from "./components/Autocomplete";
import CardPost from "./components/CardPost";
import Pagination from "./components/Pagination";
import { getEntries, getEntriesPagination } from "@/utils/contentful";

export default async function Home({ searchParams }) {
  const entriesAutoComplete = await getEntries();
  const entriesPagination = await getEntriesPagination(
    Number(searchParams.page) || 1,
  );
  const totalPages = Math.ceil(entriesPagination.total / 6);

  return (
    <main className="container mx-auto max-w-7xl px-4">
      {/* JUMBOTRON */}
      <section className="mt-10 flex h-52 flex-col items-center text-center sm:justify-center md:mt-0 md:h-96">
        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
          The FoodHub Blog
        </h1>
        <p className="mb-8">A blog about food, experiences, and recipes</p>
        <Autocomplete data={entriesAutoComplete.items} />
      </section>

      {/* BLOGS */}
      <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {entriesPagination.items.map((entry, index) => {
          return (
            <CardPost
              key={index}
              data={entry}
              includes={entriesPagination.includes}
            />
          );
        })}
      </section>

      {/* PAGINATION */}
      <Pagination totalPages={totalPages} />
    </main>
  );
}
