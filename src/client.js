import sanityClient from "@sanity/client";

export default sanityClient({
  dataset: "production",
  projectId: "ovsx12m8",
  useCdn: true,
  apiVersion: "2021-08-05",
});
