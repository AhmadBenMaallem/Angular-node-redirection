# Utiliser une image Node.js comme base pour l'application Node.js
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste de l'application Node.js
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application Node.js
CMD ["npm", "start"]
