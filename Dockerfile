# Author: Hugues LOPEZ-PARDO
# Dockerfile for building and running a Node.js application with a two-stage build process

# Step 1: Build the application
# Use Node.js version 22 again as the build base image
FROM node:22 AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all dependencies for building
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Step 2: Run the application
# Use Node.js version 22 again as the runtime base image
FROM node:22

# Set the working directory for the runtime
WORKDIR /usr/src/app

# Copy the built application from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Copy package.json and package-lock.json again for runtime dependencies
COPY package*.json ./

# Install only production dependencies to optimize the image size
RUN npm install --only=production

# Expose port 3000 to allow access to the application
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main.js"]
