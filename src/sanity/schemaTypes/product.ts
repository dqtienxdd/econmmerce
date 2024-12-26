export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      // Product Name
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule) => Rule.required().min(3).max(100),
      },
      // Product Price
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      // Installments Information
      {
        name: 'installmentInfo',
        title: 'Installment Info',
        type: 'string',
        description: 'Information about installment payment options',
      },
      // Product Description
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule) => Rule.required().min(10).max(1000),
      },
      // Product Images
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required().min(1).max(10),
      },
      // Product Colors
      {
        name: 'colors',
        title: 'Colors',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'colorName', title: 'Color Name', type: 'string' },
              { name: 'hexCode', title: 'Hex Code', type: 'string' },
            ],
          },
        ],
        validation: (Rule) => Rule.required().min(1),
      }, 
      // Product Sizes
      {
        name: 'sizes',
        title: 'Sizes',
        type: 'array',
        of: [
          {
            type: 'string',
            options: {
              list: [
                { title: 'XS', value: 'XS' },
                { title: 'S', value: 'S' },
                { title: 'M', value: 'M' },
                { title: 'L', value: 'L' },
                { title: 'XL', value: 'XL' },
                { title: 'XXL', value: 'XXL' },
                { title: '3XL', value: '3XL' },
              ],
            },
          },
        ],
        validation: (Rule) => Rule.required().min(1),
      },
      // Size & Fit Guide
      {
        name: 'sizeFitGuide',
        title: 'Size & Fit Guide',
        type: 'text',
        description: 'Provide guidance on size and fit for the product',
      },
      // Variations
      {
        name: 'variations',
        title: 'Product Variations',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'color', title: 'Color', type: 'string' },
              { name: 'size', title: 'Size', type: 'string' },
              { name: 'price', title: 'Price', type: 'number' },
              { name: 'stock', title: 'Stock', type: 'number' },
            ],
          },
        ],
      },
      // Shipping Information
      {
        name: 'shippingInfo',
        title: 'Shipping Info',
        type: 'string',
        description: 'Information about shipping policies (e.g., Free Shipping)',
      },
      // Returns Information
      {
        name: 'returnsInfo',
        title: 'Returns Info',
        type: 'string',
        description: 'Information about return policies',
      },
      // Product Rating
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'Average customer rating',
        validation: (Rule) => Rule.min(0).max(5),
      },
      // Reviews
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'reviewer', title: 'Reviewer Name', type: 'string' },
              { name: 'comment', title: 'Comment', type: 'text' },
              { name: 'rating', title: 'Rating', type: 'number', validation: (Rule) => Rule.min(0).max(5) },
            ],
          },
        ],
      },
    ],
  };
  