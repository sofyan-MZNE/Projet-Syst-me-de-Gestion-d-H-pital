const express = require('express');
const router = express.Router();
const dossierController = require('../controllers/dossierController');

// Route pour créer un dossier (POST)
router.post('/ajouter', dossierController.creerDossier);

// Routes pour les statistiques (GET)
router.get('/stats/journalieres', dossierController.getStatsParJour);
router.get('/stats/medecin-top', dossierController.getMedecinPopulaire);

module.exports = router;