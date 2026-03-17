const Medecin = require("../models/medecin");

// Ajouter un médecin
exports.createMedecin = async (req, res) => {
  try {
    const medecin = new Medecin(req.body);
    await medecin.save();
    res.status(201).json({
      message: '✅ Médecin ajouté avec succès',
      medecin
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lister tous les médecins
exports.getMedecins = async (req, res) => {
  try {
    const medecins = await Medecin.find();
    res.json(medecins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Récupérer un médecin par ID
exports.getMedecinById = async (req, res) => {
  try {
    const medecin = await Medecin.findById(req.params.id);
    if (!medecin) return res.status(404).json({ message: "Médecin non trouvé" });
    res.json(medecin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Modifier un médecin par ID
exports.updateMedecin = async (req, res) => {
  try {
    const medecin = await Medecin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medecin) return res.status(404).json({ message: "Médecin non trouvé" });
    res.json(medecin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Supprimer un médecin par ID
exports.deleteMedecin = async (req, res) => {
  try {
    const medecin = await Medecin.findByIdAndDelete(req.params.id);
    if (!medecin) return res.status(404).json({ message: "Médecin non trouvé" });
    res.json({ message: "Médecin supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};