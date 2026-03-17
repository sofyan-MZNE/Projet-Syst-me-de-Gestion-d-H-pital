const express = require("express");
const router = express.Router();
const rendezvousController = require("../controllers/rendezvousController");

// Créer un rendez-vous
router.post("/", rendezvousController.createRendezvous);

// Lister tous les rendez-vous
router.get("/", rendezvousController.getRendezvous);

// Récupérer un rendez-vous par ID
router.get("/:id", rendezvousController.getRendezvousById);

// Modifier un rendez-vous par ID
router.put("/:id", rendezvousController.updateRendezvous);

// Supprimer un rendez-vous par ID
router.delete("/:id", rendezvousController.deleteRendezvous);

module.exports = router;