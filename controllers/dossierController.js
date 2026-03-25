const DossierMedical = require('../models/dossierMedical');

// 1. Enregistrer un nouveau dossier
exports.creerDossier = async (req, res) => {
  try {
    const nouveauDossier = new DossierMedical(req.body);
    await nouveauDossier.save();
    res.status(201).json(nouveauDossier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// 2. Statistiques : Nombre de patients par jour
exports.getStatsParJour = async (req, res) => {
  try {
    const stats = await DossierMedical.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date_consultation" } },
          nombrePatients: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 3. Statistiques : Médecin le plus demandé
exports.getMedecinPopulaire = async (req, res) => {
  try {
    const stats = await DossierMedical.aggregate([
      {
        $group: {
          _id: "$medecin",
          totalConsultations: { $sum: 1 }
        }
      },
      { $sort: { totalConsultations: -1 } },
      { $limit: 1 }
    ]);
    res.json(stats);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};