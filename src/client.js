import sanityClient from "@sanity/client";

export default sanityClient({
  dataset: process.env.SANITY_STUDIO_API_DATASET || "production",
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || "ovsx12m8",
  useCdn: true,
  apiVersion: "2021-08-05",
});
