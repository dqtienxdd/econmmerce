import { defineConfig } from 'sanity';
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './src/sanity/schemaTypes';

console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tbiiqe4b',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-01-01',
  title: 'E-commerce CMS',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
