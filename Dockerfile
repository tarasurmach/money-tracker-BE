# Use full Node.js image instead of Alpine to avoid missing dependencies
FROM node:20.9.0 as base

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# Build the app
RUN npm run build

# Use a clean runtime image
FROM node:20.9.0 as runtime
WORKDIR /usr/src/app

# Copy only necessary files
COPY --from=base /usr/src/app/node_modules ./node_modules
COPY --from=base /usr/src/app/dist ./dist

# Set environment to production
ENV NODE_ENV=production
# Expose port
EXPOSE 3002

# Run the app
CMD ["node", "dist/main.js"]
