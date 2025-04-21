# Simple React Project with Vite, Tailwind CSS, and Docker

This is a simple React project that uses Vite for bundling and Tailwind CSS for styling, all set up within a Dockerized environment. The purpose of this project is to learn how Docker can be used for both local development and production environments.

### Key Features:
- **Dockerized Setup**: The project includes two separate `docker-compose` files for local development and production environments.
- **CI/CD Pipeline**: In the production environment, the project utilizes a CI/CD pipeline to build a Docker image, which is then pushed to a container registry. The production environment pulls the image from the registry and runs it.
  
This setup allows for a streamlined development and deployment process, making it easier to manage dependencies and environments.
