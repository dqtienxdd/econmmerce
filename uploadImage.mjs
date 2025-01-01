import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import fetch from 'node-fetch'; // Ensure you have 'node-fetch' installed

dotenv.config();

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: false,
});

// Function to upload a single image from a URL
async function uploadImageFromURL(url, filename) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Failed to fetch image: ${response.statusText}`);

    const buffer = await response.arrayBuffer();
    const asset = await client.assets.upload('image', Buffer.from(buffer), { filename });
    console.log(`Uploaded asset for ${filename}:`, asset);
    return { filename, assetId: asset._id }; // Return the asset reference ID
  } catch (error) {
    console.error(`Error uploading image (${filename}):`, error.message);
    throw error;
  }
}

// Function to upload multiple images
async function uploadMultipleImages(images) {
  const uploadResults = [];
  for (const { url, filename } of images) {
    const result = await uploadImageFromURL(url, filename);
    uploadResults.push(result);
  }
  return uploadResults;
}

// Main function to upload the images and log their references
(async () => {
  const imageDetails = [
    { url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3d1378302174857a14819683114d7cf_9366/Adizero_Boston_12_Shoes_White_ID4236_HM1.jpg', filename: 'white.jpg' },
    { url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/90c6a6fa827a4da18102d9ede0382778_9366/Adizero_Boston_12_Shoes_Black_ID4234_HM1.jpg', filename: 'black.jpg' },
    { url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcb3638c2dc54675b45244447918db99_9366/Adizero_Boston_12_Shoes_Blue_IF9211_HM1.jpg', filename: 'blue.jpg' },
    { url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b81f46fbcca4db1a6ab4f881b0fa417_9366/Adizero_Boston_12_Shoes_Black_IF9212_HM1.jpg', filename: 'another-black.jpg' },
    { url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/959c50a4907640b4b7fd2db73f05dc4d_9366/Adizero_Boston_12_Shoes_Grey_JI4472_HM1.jpg', filename: 'grey.jpg' },
  ];

  try {
    const uploadResults = await uploadMultipleImages(imageDetails);
    console.log('All images uploaded successfully:', uploadResults);
  } catch (error) {
    console.error('Error uploading images:', error.message);
  }
})();
