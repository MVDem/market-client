# Farm Market Frontend

This repository contains the frontend code for the Farm Market project.

## Structure

farm-market-frontend/

```
│
├── public/ # Public assets and HTML template
│ ├── index.html
│ └── ...
│
├── src/ # Source files
│ ├── components/ # React components
│ │ ├── SignIn.tsx
│ │ ├── SignUp.tsx
│ │ ├── List.tsx # Products | Offers | Users
│ │ ├── PaginationCard.tsx
│ │ ├── NavBar.tsx
│ │ ├── Geader.tsx
│ │ └── ...
│ │
│ ├── UI/ # React components
│ │ ├── ThemeButton.tsx
│ │ ├── LanguageButton.tsx
│ │ ├── FormUI.tsx
│ │ ├── InputUI.tsx
│ │ ├── ButtonUI.tsx
│ │ ├── LinkUI.tsx
│ │ └── ...
│ │
│ ├── pages/ # React pages
│ │ ├── Layout/
│ │ │ ├── Layout.tsx
│ │ │ └── ...
│ │ ├── SignPage/
│ │ │ ├── SignPage.tsx
│ │ │ └── ...
│ │ ├── Farmer/
│ │ │ ├── Dashboard/
│ │ │ │ ├── OfferList.tsx
│ │ │ │ ├── OfferDetails.tsx
│ │ │ │ └── ...
│ │ │ └── ...
│ │ ├── Admin/
│ │ │ ├── UserManagement/
│ │ │ │ ├── UserList.tsx
│ │ │ │ ├── UserDetail.tsx
│ │ │ │ └── ...
│ │ │ ├── ProductManagement/
│ │ │ │ ├── ProductList.tsx
│ │ │ │ ├── AddProductForm.tsx
│ │ │ │ ├── EditProductForm.tsx
│ │ │ │ ├── ProductDetail.tsx
│ │ │ │ └── ...
│ │ │ └── ...
│ │ └── ...
│ │
│ ├── store/ # Redux store configuration
│ │ ├── services/ # API services
│ │ │ ├── userService.ts
│ │ │ ├── productService.ts
│ │ │ └── ...
│ │ ├── slices/
│ │ │ ├── authSlice.ts
│ │ │ └── ...
│ │ ├── store.ts
│ │ └── ...
│ │
│ ├── styles/ # Global styles, SCSS files
│ │ ├── variables.scss
│ │ ├── base.scss
│ │ └── ...
│ │
│ ├── types/ # typescript types
│ │ └── ...
│ │
│ ├── App.tsx # Main App component
│ └── index.tsx # Entry point
│
├── .gitignore # Files and directories to ignore in Git
├── package.json # List of dependencies and scripts
└── README.md # Project README file
```
