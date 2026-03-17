const Rendezvous = require("../models/rendezvous");

// Créer un rendez-vous
exports.createRendezvous = async (req, res) => {
  try {
    const rdv = new Rendezvous(req.body);
    await rdv.save();
    res.status(201).json(rdv);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lister tous les rendez-vous
exports.getRendezvous = async (req, res) => {
  try {
    const rdvs = await Rendezvous.find().populate("patient_id").populate("medecin_id");
    res.json(rdvs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un rendez-vous par ID
exports.getRendezvousById = async (req, res) => {
  try {
    const rdv = await Rendezvous.findById(req.params.id).populate("patient_id").populate("medecin_id");
    if (!rdv) return res.status(404).json({ message: "Rendez-vous non trouvé" });
    res.json(rdv);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modifier un rendez-vous par ID
exports.updateRendezvous = async (req, res) => {
  try {
    const rdv = await Rendezvous.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rdv) return res.status(404).json({ message: "Rendez-vous non trouvé" });
    res.json(rdv);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un rendez-vous par ID
exports.deleteRendezvous = async (req, res) => {
  try {
    const rdv = await Rendezvous.findByIdAndDelete(req.params.id);
    if (!rdv) return res.status(404).json({ message: "Rendez-vous non trouvé" });
    res.json({ message: "Rendez-vous supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};