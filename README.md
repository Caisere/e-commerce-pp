# E-Commerce Product Page

A modern, responsive e-commerce product page built with React, TypeScript, and Tailwind CSS. This project demonstrates a clean UI for viewing products, managing a shopping cart, and interacting with product images, optimized for both desktop and mobile experiences.

## Features

- **Product Gallery:**  
  View product images with a modal for larger previews and thumbnail navigation.

- **Responsive Design:**  
  Mobile-friendly layout with a sliding menu and adaptive components.

- **Cart Functionality:**  
  Add products to the cart, update quantities, and remove items. 

- **Product Description:**  
  Interactive quantity selector and dynamic price calculation.

- **UI Components:**  
  Uses Material UI for modals and buttons, Lucide icons for visual elements.

## Project Structure

```
src/
  components/
    cart.tsx                # Cart display and item management
    header.tsx              # Site header, navigation, and cart icon
    image.tsx               # Thumbnail image component
    productdescription.tsx  # Product info, quantity, and add-to-cart logic
    productmodal.tsx        # Modal for viewing product images
  constant/
    constant.ts             # Image thumbnail data
  types.ts                  # TypeScript types for cart items
```

## Key Components

### `Header`
- Displays site logo, navigation links, and cart icon.
- Mobile menu slides in/out with smooth animation.
- Cart dropdown shows current cart items.

### `Cart`
- Lists products in the cart with image, name, price, and quantity.
- Allows removing items from the cart.

### `ProductDescription`
- Shows product details and price.
- Lets users select quantity and add to cart.
- Updates cart if product already exists.

### `ProductModal`
- Modal for viewing product images in large format.
- Only displays on screens wider than 768px.
- Thumbnail navigation for switching images.

## Setup & Usage

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## Customization

- **Add new products:**  
  Update product details in `productdescription.tsx`.
- **Change images:**  
  Edit `constant/constant.ts` and update image paths.
- **Styling:**  
  Modify Tailwind classes in component files for custom look.

## Troubleshooting

- **Module not found errors:**  
  Ensure all image paths are correct and aliases are configured in `jsconfig.json` or `tsconfig.json`.
- **Cart issues:**  
  Check that cart item IDs are unique and consistent.

**Built with React, TypeScript, Tailwind CSS, Material UI,