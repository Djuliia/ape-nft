# Ape NFT Landing Page

This is the landing page for Ape NFT, designed and implemented according to the provided technical specifications.

## Technologies Used

- React
- Styled-components
- Formik & Yup for form validation
- React Slick for sliders

## Getting Started

To run the project locally, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and navigate to `http://localhost:3000`.

## Features Implemented

### Header

- Contains a logo and a burger menu on all devices.
- The logo is a link to the home page.
- The burger menu includes a close button, navigation menu, and social media icons.
- Each menu item is clickable, and clicking on it closes the mobile menu and smoothly scrolls to the corresponding section on the page.
- The height of the burger menu is fullscreen on mobile with a black background. On tablets, it becomes transparent, losing its background, and looks similar to the desktop version.
- Optional: Added animation for the appearance and disappearance of the mobile menu.

### Hero

- Clicking on "Meet Apes" smoothly scrolls to the Mint section.

### About

- Contains a title, two text blocks, an image, and a banner.
- Optional: The banner has a "moving line" animation.

### MIND Map

- Implemented using CSS Grid for tablet and desktop versions.
- In the mobile version, the cards are placed in a slider. The slider can be navigated by dragging or using buttons, with standard behavior (not infinite).
- The red card is active and contains a link.
  
### FAQ

- By default, the first answer is open.
- On mobile, only the title and text are visible and appear when opened. Starting from the tablet version, opening different items also changes the image.
- Only one answer can be open at a time.
- When opening an item, the question's color and numbers change, and a background (and image on all screens except mobile) appear. On hover or focus, only the color changes.

### Arts

- Contains a slider on all devices.
- In the mobile version, it's a single slide, two slides on tablets, and four on desktops. The slider can be navigated by dragging or using buttons, with standard behavior.

### Contact Us (MINT)

- The form includes validation.
- Field states during input and errors are present, following the styles defined in the UI kit.
- All form fields are required.
- Users can submit the form and receive feedback.

### Footer

- Contains copyright information.

