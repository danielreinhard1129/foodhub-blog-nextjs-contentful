import { appConfig } from "@/utils/config";

const { baseUrl, spaceId, accessToken, environmentId } = appConfig;

export const getEntriesPagination = async (page) => {
  const limit = 6;
  const skip = (page - 1) * limit;
  const res = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=-fields.createdAt&skip=${skip}&limit=${limit}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  return res.json();
};

export const getEntries = async () => {
  const res = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=-fields.createdAt`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  return res.json();
};

export const getEntryBySlug = async (slug) => {
  const res = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries/?access_token=${accessToken}&content_type=blog&fields.slug=${slug}`,
    {
      next: {
        revalidate: 10,
      },
    },
  );
  return res.json();
};
