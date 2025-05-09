# Building React Project with Vite, TailwindCSS, Docker, and Deploying To DigitalOcean

This is a simple React project that uses Vite for bundling and Tailwind CSS for styling, all set up within a Dockerized environment. The purpose of this project is to learn how Docker can be used for both local development and production environments.

I've also written a blog post about it - [click here to read it](https://dev.to/pembans/building-react-project-with-vite-tailwindcss-docker-and-deploying-to-digitalocean-3glp)


### Key Features:
- **Dockerized Setup**: The project includes a Dockerfile that supports both the development and production environments using multi-stage build.
- **CI/CD Pipeline**: In the production environment, the project uses GitHub Actions to build a Docker image, which is then pushed to the DigitalOcean Container Registry. Once the image is successfully pushed, the DigitalOcean App Platform automatically pulls the latest image and deploys the updated application.

### What I Did

I focused on setting up two environments: **development** and **production**.

I created a **Dockerfile** using a **multi-stage build** approach. Let me explain how it works:

> *Note: I will not be explaining individual Docker commands in detail, assuming you already have a basic understanding of them.*

- **Base Stage**:  
 First, I defined a base stage:

  ```dockerfile
  FROM node:20-alpine AS base
  WORKDIR /app
  COPY package*.json .
  RUN npm install && npm install tailwindcss @tailwindcss/vite
  COPY . .
  ```

- **Development Stage**:  
  As part of the multi-stage build process, I created a development stage named `dev`, based on the base image:

  ```dockerfile
  FROM base AS dev
  EXPOSE 5137
  CMD ["npm", "run", "dev"]
  ```
  In the development environment, a seperate web server is not required since Vite provides its own server.

- **Build Stage**:  
  Continuing the multi-stage build process, I created a `build` target from the base image to generate the files.

  ```dockerfile
  FROM base AS build
  RUN npm run build
  ```

- **Production Stage**:  
  Finally, I defined a `prod` stage where I used the Nginx image to serve the built application. 

  ```dockerfile
  FROM nginx:1.25.1-alpine AS prod
  COPY --from=build /app/dist /usr/share/nginx/html
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  ```

  In the production stage, you can see the `COPY --from=build instruction` — this copies the compiled files from the build stage into Nginx’s default web directory.

  For more information about multi-stage builds, refer to this [article](https://dev.to/massivebrains/use-same-dockerfile-for-dev-production-1l7f)

  ### Build Process
  ### Development 
  For the development environment, I created a separate Docker Compose file called `docker-compose.dev`, which builds and runs the container locally. In my Compose file, you will notice the following configuration:
  ```web:
  build:
    context: .
    target: dev
  ```

  This configuration specifies the use of the dev build target, indicating that we are building the container starting from the dev stage.

  ### Production
    For the production environment, I created a GitHub Actions workflow that builds the Docker image whenever a pull request is created or when code is pushed to the main branch. It uses the `prod` build target and then pushes the Docker image to the DigitalOcean Container Registry. You can refer to my docker-image.yml file for the configuration. Additionally, I have set up the Digital Ocean App Platform to automatically deploy the application when the image is pushed to the registry.

  ![Screenshot](https://raw.githubusercontent.com/pemba17/react-vite-project/refs/heads/main/public/screenshots/app-platform.png)

  However, I have created a separate `docker-compose.prod` file to facilitate running the application on AWS EC2 or DigitalOcean Droplets. This file allows you to build the Docker image directly from the registry on these platforms.

