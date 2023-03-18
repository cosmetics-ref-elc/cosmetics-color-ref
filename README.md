# chrōma: Cosmetic Color Reference 

## Introduction
chrōma: Cosmetic Color Reference is an app designed to help people with color vision deficiency (CVD) better identify and understand the colors in makeup products. Currently, we have 2 make-up categories (Lips and Eyes), each with two lines of product from Estée Lauder. Each product has multiple shades that users can look through. Each shade information includes:
- Reference images that help to understand the color
- Detailed textual color description
- Alt names for the color
- Color ‘story’ which allow users to envision a scene in nature
- Color support information (Hue, Hex code, RGB, HSL)

This project is a group submission for the ELC Accessible Beauty Hackathon <a href=”https://elchackathon.devpost.com/”> created by Caiyi Chen, Chris Kim, Heidi Ye, Ingrid Yau, and Neha Bhole.

<!-- Neha Bhole - Portfolio -  http://nehabhole.com/ ; Github - https://github.com/bholeneha ; LinkedIn - https://www.linkedin.com/in/nehabhole/ -->


## Accessibility

The cosmetics industry has made progress in accessible design, but individuals with Color Vision Deficiency (CVD) still face significant challenges when it comes to exploring the world of cosmetics. From ambiguous color labels and packaging, to having to rely on others to make informed purchases, to feeling limited in their options, these obstacles can create a sense of exclusion.

Recognizing the need for increased accessibility to color for users with CVD, we developed chrōma, an online database providing a comprehensive cosmetic color reference specifically for this community. Through chrōma, users can look up products to learn more about the color profile, texture, coverage, sensory or associations with nature of the color, and makeup suggestions. We also designed a grayscale UI option to provide a more comfortable experience for individuals with Achromatopisa (Total Color Blindness). This setting ensures that users exploring our database in greyscale have the same experience as those exploring in color, fulfilling our goal of inclusivity and accessibility. Our goal is to empower individuals with CVD to confidently navigate and explore the world of beauty and makeup by eliminating any barriers they may face.

## Features
Fully functional, responsive, and accessible full-stack application built using the MERN stack:	
- Database: MongoDB
- Front-end: React.js
- Back-end: Express.js/Node.js
- Deployed on: 

UI Design
- Grayscale toggle that allows users to switch between full color and grayscale
- Comprehensive color descriptors including, color profile, texture, coverage, sensory or associations with nature of the color, and makeup suggestions, to provide a better understanding of the color for individuals with CVD.

## Build Processes

### Design
Design: Figma 
The design prioritizes accessibility and centers users who experience color differently. It is intentionally straightforward, functional, and provides ample contrast and interaction cues for seamless navigation.

![Landing Page Layout](/src/assets/readme/design1.png)

Our core functionality is to make color information easily accessible and understandable. We achieve this by presenting swatches of the color range of a product against pure black (#000000) and pure white (#FFFFFF), serving as a reference for the color's shade and tint.

![Reference Swatches 1](/src/assets/readme/design2.png)
![Reference Swatches 2](/src/assets/readme/design3.png)

Based on our user research, we understand that texture and associations with sensory or natural elements are crucial in helping individuals with CVD comprehend color. With this in mind, we have created a comprehensive breakdown of color information, including color description (with alternative names), color story, and color support details. Our images showcase the product, texture, complementary imagery for color story, color alone, and color against black and white to enhance the user's understanding of the color profile. To make the selection process more accessible, we have also included a brief description of texture and color in the dropdown selector.

![Color Information](/src/assets/readme/design4.png)

The design system was also intentionally kept uncomplicated, by exploring different ways to enhance visual hierarchy and interest in lieu of a wider color system. Our goal was to make the colors from the products stand out without sacrificing the overall visual appeal of the database. We utilized well-established font family, weight, and sizes, shadow elevation and micro interactions to assist with visual hierarchy and interaction cues.

![Typography](/src/assets/readme/design5.png)

![Colors](/src/assets/readme/design6.png)

Responsive mobile design designed with touchscreen interactions

![Mobile Design](/src/assets/readme/design7.png)

Grayscale toggle option to provide a more comfortable experience for individuals with Achromatopsia (Total Color Blindness).

![Gray Scale Design](/src/assets/readme/design8.png)

### Development

#### Architechture

The backend system is built using the Model-View-Controller (MVC) architecture pattern. The Model is created using Mongoose to connect to MongoDB Atlas, the Controller uses Express.js, and the View is built using React. By using this pattern, the code is organized in a way that makes it easier to maintain and scale the application.

#### Database Setup

The project uses MongoDB Atlas as the database for storing data. There are three models used in the database - Category, Product, and Shade.
Categories to Products have a one-to-many relationship, where each category can have many products associated with it.
Category Schema is referenced in the Product Schema so that products can be queried independently.
Products to Shades also have a one-to-many relationship, where each product can have many shades associated with it.
Shade Schema is embedded in the Product Schema to simplify queries and improve performance. 

##### ERD
![ERD](/src/assets/readme/ERD.png)

#### API Endpoints
The backend provides only one API endpoint at the moment, which is implemented using the Express.js router in the ./routes/api/categories.js file. This endpoint allows you to query data about categories in the database using a GET request.

In future implementations, we plan to add more endpoints to provide additional functionality, such as the ability to create, update, and delete categories and products, as well as endpoints for managing user-related tasks.


## Future Implementations
- Add more categories and products into the database
- Add more brands beyond Estée Lauder into the database
- Add CRUD functionlity to add more products to the database with ease
- Add search and filter functionality:
  - By similar products or colors
  - Complementary products or colors
- Display settings that can be personalized (i.e contrast or text size adjustments)
- User Authentication (i.e. build favorites list, own profiles, different access points for different types of users) 
- Community aspect (i.e. discussions, comments, reviews, likes)
- Multiple toggle settings to target all types of CVD (i.e. red-green, blue-yellow, etc.)
