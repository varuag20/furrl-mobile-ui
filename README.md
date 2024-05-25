# Furrl_Mobile_UI

This project is a React.js implementation of Furrl's HomeHunts mobile website page, built to meet the specific requirements of your Furrl assignment.

## Features

- **Mobile-first Design**: Optimized for responsive viewing on mobile devices.
- **Top Navbar**:
  - Wishlist button redirects to Furrl Wishlist (URL provided by Furrl).
  - Cart button redirects to Furrl Cart.
- **Product List**:
  - Infinite scroll for seamless product loading as the user scrolls down.
  - Each product entry leads to the corresponding product details page.
  - Generic share button for product links (customizable).
- **API Integration**:
  - Utilizes Furrl's production API (endpoints to be identified from network inspection).
  - No External Libraries: Strictly adheres to the assignment's constraint, implementing infinite scroll without third-party libraries.

## Prerequisites

- Node.js and npm (or yarn) installed.

## Running the Application

### Clone the Repository

```bash
git clone https://github.com/varuag20/furrl_mobile_ui.git
cd furrl_mobile_ui
```
###Install Dependencies
bash
`npm install axios`  # Include Axios for HTTP requests

###Start the Development Server
bash
`npm start `  #This will launch the application in your default browser, accessible on a mobile    device or emulated mobile view in your browser.

###API Integration
Fetching product data (list).
Fetching product details (individual product page).

###Replace Placeholders

  headers: {
    Authorization: `YOUR_ACCESS_TOKEN`,
    'Device-Id': `YOUR_DEVICE_ID`
  }
