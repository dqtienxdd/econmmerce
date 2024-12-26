import { createClient } from '@sanity/client';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables from the `.env` file
dotenv.config();
// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

// Function to upload an image from a URL
async function uploadImageFromURL(url) {
  try {
    console.log('Uploading image:', url);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);

    const buffer = await response.buffer();
    const asset = await client.assets.upload('image', buffer, { filename: 'viktor.jpg' });
    console.log('Uploaded asset:', asset);
    return asset._id; // Return the asset reference ID
  } catch (error) {
    console.error('Error uploading image:', error.message);
    throw error;
  }
}

// Main function to upload the image and log its reference ID
(async () => {
  const imageURL = 'https://static.zara.net/assets/public/14ce/8264/db364b5fa127/d73fdc61d8a1/08611459800-e6/08611459800-e6.jpg';
  const assetRef = await uploadImageFromURL(imageURL);
  console.log('Image asset reference:', assetRef);
})();
