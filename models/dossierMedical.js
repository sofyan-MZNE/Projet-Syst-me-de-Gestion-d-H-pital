const mongoose = require('mongoose');

// Définition du schéma pour les dossiers médicaux
const dossierMedicalSchema = new mongoose.Schema({
  // Liaison avec la collection Patient (Membre 1)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient', 
    required: true
  },
  // Liaison avec la collection Medecin (Membre 2)
  medecin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'medecin', 
    required: true
  },
  date_consultation: {
    type: Date,
    default: Date.now
  },
  diagnostic: {
    type: String,
    required: true
  },
  traitement: {
    type: [String], // Tableau pour lister plusieurs médicaments ou soins
    required: true
  },
  prix_consultation: {
    type: Number,
    required: true
  }
});

// Exportation du modèle pour l'utiliser dans le contrôleur
module.exports = mongoose.model('DossierMedical', dossierMedicalSchema);