# Frontend Project: Farm Market

## Description:

This is the frontend part of the Farm Market project, which is aimed at creating an online marketplace for farmers to sell their products directly to consumers. The frontend is built using modern web technologies and frameworks to provide an intuitive user experience for both farmers and consumers.

## Technologies Used for Frontend Creation:

- **Framework:** React with TypeScript
- **Web Application Building Tool:** Vite
- **Routing:** React Router
- **State Management:** Redux
- **Requests:** RTK-Query
- **Styling:** SCSS

## Frontend Functionality:

### HomePage:

- View a list of all available products (name, description, farmer name, farmer region, date of supplemental, product’s picture, pack)
- Sort products by product name / farmer name / farmer region / date of supplemental
- Filter products by product name / farmer name / farmer region / date of supplemental (only new products)
- Navigate to farmer’s pages / product’s page

### SignIn/SignUp Page:

- Allow users to sign in to their accounts or sign up for a new account.

### Farmer:

#### Profile Page:

- View farmer’s page
- Update farmer’s info
- Delete account

#### Dashboard Page:

- View a list of all my transactions
  - Date of transaction
  - Product details
  - Transaction status
- Search for a transaction by product from my transactions list
- Hide/display a transaction on the market
  - Toggle visibility of transactions to control product availability

### Admin:

#### User Management:

- View a list of all users
- Block/unblock a user account
- View user details

#### Product Management:

- View a list of all products
- Add new products
- Edit existing product details
- Delete products from the marketplace
