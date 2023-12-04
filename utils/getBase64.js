import { getPlaiceholder } from "plaiceholder";

export default async function getBase64(imgUrl) {
  try {
    const buffer = await fetch(imgUrl).then(async (res) => {
      return Buffer.from(await res.arrayBuffer());
    });
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (error) {
    console.log(error);
  }
}
