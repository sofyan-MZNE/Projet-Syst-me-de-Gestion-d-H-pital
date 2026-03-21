const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  adresse: { type: String },
  telephone: { type: String },
  email: { type: String, unique: true },
  sexe: { type: String, enum: ["Homme", "Femme"] },
  groupeSanguin: { type: String },
  dateInscription: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Patient", patientSchema);
