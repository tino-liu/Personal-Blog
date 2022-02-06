import { imageUrlBuilder } from "@sanity/image-url";
import sanityClient from "@sanity/client";

export default sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: "ovsx12m8",
  useCdn: true,
  apiVersion: "2021-08-05",
});
