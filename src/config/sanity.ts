import sanityClient from '@sanity/client';

 const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});
export default client;

export const fetchProductsFromSanity = async () => {
  const query = `*[_type == "product"]{ 
    _id,
    name,
    price,
    slug,
    image
  }`;
  return await sanityClient.fetch(query);
};

export const fetchProductDetailsFromSanity = async (slug: string) => {
  const query = `*[_type == "product" && slug.current == $slug][0]{ 
    _id,
    name,
    price,
    description,
    colors,
    sizes,
    image
  }`;
  return await sanityClient.fetch(query, { slug });
};
