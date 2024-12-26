# Hybrbase E-commerce

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

Hybrbase is an e-commerce platform that includes a **product list page** and a **product detail page**. Currently, the **cart functionality** is not yet implemented. The project integrates with [Sanity](https://www.sanity.io/) to store the database.

### Features Implemented:
- Product list page
- Product detail page
- Image upload functionality for products (integrated with Sanity)
- Ability to delete all products via a function

### Limitations:
- The data is currently being added manually as the dataset has not been obtained yet.
- Several improvements and additional pages are yet to be developed.

## Getting Started

Follow these steps to set up the project on your local machine.

### 1. Install Dependencies

First, install the required dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install

```
### 2. Run the Development Server
Then, run the development server:

```bash

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit http://localhost:3000 in your browser to view the website. The page will auto-update as you edit the files.

### 3. Access Sanity Studio
To access Sanity Studio, run the following command:
```bash
sanity dev
```
This will allow you to manage the content and data for the project through the Sanity interface.

Sanity Integration
This project uses Sanity to store the database. Currently, data is being manually added, so it may not be perfect. There are many areas for improvement and more pages to be developed.

Upload Image Function
To upload images to the database, use the following function. This allows you to manage product images and store them in Sanity.

Delete Products
To delete all products in the database, use the deleteProducts function. Run the function using the following command:

```bash
npx tsx <file.name>.mjs
```
Data File
The products.ndjson file is the data file used to push product data to Sanity. To push data to Sanity, use the following command:
    
```bash 
sanity dataset import products.ndjson production
```
Future Improvements
Implement cart functionality
Automate data population from a dataset (currently added manually)
Add more pages and features for the platform
Improve the UI/UX and responsiveness
Learn More
To learn more about Next.js, check out the following resources:

Next.js Documentation - Learn about Next.js features and API.
Learn Next.js - An interactive Next.js tutorial.
Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel platform, created by the team behind Next.js.

For more details, check out the Next.js deployment documentation.