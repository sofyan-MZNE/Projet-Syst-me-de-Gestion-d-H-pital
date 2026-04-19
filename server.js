require('dotenv').config();
const express = require("express");
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Configuration et connexion à la base de données
const connectDB = require("./config/db");
connectDB();

// Importation des routeurs
const patientRoutes = require("./routes/patientRoutes");
const medecinRoutes = require("./routes/medecinRoutes");
const rendezvousRoutes = require("./routes/rendezvousRoutes");
const dossierRoutes = require("./routes/dossierRoutes");

// Définition des points d'entrée de l'API
app.use("/patients", patientRoutes);
app.use("/medecins", medecinRoutes);
app.use("/rendezvous", rendezvousRoutes);
app.use("/dossiers", dossierRoutes);

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});