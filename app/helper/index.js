export const findAsset = (id, assets) => {
  return assets.find((asset) => asset.sys.id === id);
};

export const findCategory = (id, entries) => {
  return entries.find((entry) => entry.sys.id === id);
};
