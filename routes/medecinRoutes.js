const express = require("express");
const router = express.Router();
const medecinController = require("../controllers/medecinController");

// Créer un médecin
router.post("/", medecinController.createMedecin);

// Lister tous les médecins
router.get("/", medecinController.getMedecins);

// Récupérer un médecin par ID
router.get("/:id", medecinController.getMedecinById);

// Modifier un médecin par ID
router.put("/:id", medecinController.updateMedecin);

// Supprimer un médecin par ID
router.delete("/:id", medecinController.deleteMedecin);

module.exports = router;