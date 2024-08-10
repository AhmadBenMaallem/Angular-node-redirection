# Utiliser une image Node.js comme base pour l'application Angular
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier le fichier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install -g @angular/cli
RUN npm install

# Copier le reste de l'application Angular
COPY . .

# Compiler l'application Angular pour la production
RUN ng build --configuration production

# Exposer le port de l'application
EXPOSE 4200

# Démarrer le serveur de développement Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--proxy-config", "proxy.conf.json"]

