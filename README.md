
# Hybrbase E-commerce

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The project integrates with [Sanity](https://www.sanity.io/) for backend content management and includes features for a product list page, product detail page, and image management.

---

## 📦 Project Overview

Hybrbase is an e-commerce platform that features:
- A **product list page** displaying all available products.
- A **product detail page** showcasing product-specific details.
- **Sanity integration** for managing products and data.
- **Image upload functionality** for products.
- A **delete all products** feature via a custom function.

---

## ✨ Features Implemented

- **Product Listing**: Browse all products on the list page.
- **Product Details**: View details about individual products.
- **Image Management**: Upload product images directly to Sanity.
- **Sanity Integration**: Manage and store product data via the Sanity Studio.

---

## ⚠️ Current Limitations

- Data is manually added since the dataset is not automated.
- Cart functionality is not yet implemented.
- UI/UX and responsiveness are in early stages.
- Additional pages and features are planned for future development.

---

## 🚀 Getting Started

Follow the steps below to set up and use the project locally:

---

### 1. **Clone the Repository**

Clone this repository to your local machine:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

---

### 2. **Download Dependencies**

Ensure you have `node` and `npm` (or another package manager like `yarn` or `pnpm`) installed.

Install all required dependencies from the `package.json` file:

```bash
npm install
# or
yarn install
# or
pnpm install
```

---

### 3. **Set Up Sanity Studio**

Sanity is used to manage the backend data for this project.

#### Steps to Access Sanity:
1. Navigate to the Sanity Studio directory:
   ```bash
   cd sanity
   ```
2. Install dependencies for Sanity:
   ```bash
   npm install
   ```
3. Run the Sanity development server:
   ```bash
   sanity dev
   ```
4. Open the link provided in the terminal to access the Sanity Studio in your browser.

Use the Sanity Studio to add, edit, and delete product data.

---

### 4. **Run the Frontend (Shop)**

To start the frontend of the e-commerce platform:

1. Navigate to the main project directory:
   ```bash
   cd ..
   ```
2. Run the Next.js development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
3. Open your browser and visit:
   ```
   http://localhost:3000
   ```

This will display the frontend of your e-commerce shop.

---

## 🛠 Additional Commands

### Upload Data to Sanity
To import pre-defined product data into Sanity:
```bash
sanity dataset import products.ndjson production
```

### Delete All Products
To remove all products from the database, run the `deleteProducts` function:
```bash
npx tsx <file.name>.mjs
```

---

## 🎯 Future Improvements

- Implement **cart functionality**.
- Automate data import from a dataset.
- Add more pages like **checkout** and **user profiles**.
- Improve UI/UX and make the platform fully responsive.
- Enhance performance for larger datasets.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Sanity Documentation](https://www.sanity.io/docs) - Learn how to manage content with Sanity.
- [Vercel Deployment](https://vercel.com/docs) - Learn how to deploy your app on Vercel.

---

## 🌐 Deploy on Vercel

Deploy your frontend easily with [Vercel](https://vercel.com/):
1. Push your code to GitHub.
2. Import your repository into Vercel.
3. Configure the project settings and deploy.

For detailed instructions, check out [Next.js deployment documentation](https://nextjs.org/docs/deployment).

--- 

### Author

Hybrbase E-commerce © 2025
