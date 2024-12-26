# Hybrbase E-commerce

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

This project is an e-commerce platform that includes a product list page and a product detail page. The cart functionality is not yet implemented. The project uses [Sanity](https://www.sanity.io/) to store the database.

## Getting Started

First, install the required dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install

Then, run the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

This project uses next/font to automatically optimize and load Geist, a new font family for Vercel.

Sanity Integration
The project uses Sanity to store the database. Currently, data is being added manually, so it may not be perfect. There are many rooms for improvement and a lot of pages to be done.

Upload Image Function
To upload images to the database, use the uploadImage function.

Delete Products
To delete all products, use the deleteProducts function. Run the function using the following command:

npx tsx <file.name>.mjs

Data File
The products.ndjson file will be the data file pushed to Sanity.

Access Sanity Studio
To access Sanity Studio, run the following command:

sanity dev

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

Future Improvements
There are many areas for improvement and additional pages to be completed. Contributions and suggestions are welcome!