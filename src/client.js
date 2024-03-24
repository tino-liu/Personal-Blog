import sanityClient from "@sanity/client";

// For Hosting
export default sanityClient({
  dataset: process.env.REACT_APP_SANITY_STUDIO_API_DATASET,
  projectId: process.env.REACT_APP_SANITY_STUDIO_API_PROJECT_ID,
  useCdn: true,
  apiVersion: "2021-08-05",
});
