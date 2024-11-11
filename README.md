# NestJS Products API

This project is a RESTful API built with NestJS for managing products. It allows users to create, read, update, and delete products. The API uses GraphQL for query handling.

## Technologies

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [GraphQL Queries and Mutations](#graphql-queries-and-mutations)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete (CRUD) products
- GraphQL API for easy data manipulation
- TypeScript for type safety
- Validation of input data


## Setup

1. **Clone the repository**:

   ```bash
    git clone https://github.com/hugueslopezpardo/nestjs-api-products.git
   ```

2. **Navigate to the project directory**:

   ```bash
    cd nestjs-api-products
   ```

## Running the Application

1. **Run the application**:

   ```bash
    docker-compose up -d
   ```

2. **Access GraphQL Playground**:
    - Open your browser and go to `http://localhost:3000/graphql` to access the GraphQL playground.

## GraphQL Queries and Mutations

### 1. Create Product Mutation

```graphql
mutation {
  createProduct(createProductInput: {
    name: "Sample Product",
    price: 19.99,
    description: "This is a sample product."
  }) {
    id
    name
    price
    description
  }
}
```

### 2. Get All Products Query

```graphql
query {
  products {
    id
    name
    price
    description
  }
}
```

### 3. Get Product by ID Query

```graphql
query {
  product(id: 1) {
    id
    name
    price
    description
  }
}
```

### 4. Update Product Mutation

```graphql
mutation {
  updateProduct(updateProductInput: {
    id: 1,
    name: "Updated Product Name",
    price: 24.99,
    description: "Updated description for the product."
  }) {
    id
    name
    price
    description
  }
}
```

### 5. Remove Product Mutation

```graphql
mutation {
  removeProduct(id: 1) {
    id
    name
  }
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

