import { createClient } from '@sanity/client';
import dotenv from 'dotenv';

// Load environment variables from the `.env` file
dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this matches your Sanity project ID
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,     // Ensure this matches your dataset
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // API version (e.g., '2023-01-01')
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,         // Token with delete permissions
  useCdn: false,                                       // Disable CDN for mutating operations
});

async function deleteAllProducts() {
  try {
    const products = await client.fetch('*[_type == "product"]{_id}'); // Fetch all products
    const deleteOps = products.map((product) =>
      client.delete(product._id)
    ); // Create delete operations
    await Promise.all(deleteOps); // Run all delete operations
    console.log('All products deleted successfully.');
  } catch (error) {
    console.error('Failed to delete products:', error.message);
  }
}

deleteAllProducts();
