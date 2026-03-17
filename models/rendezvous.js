const mongoose = require("mongoose");

const rendezvousSchema = new mongoose.Schema({
  patient_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Patient" },
  medecin_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Medecin" },
  date: { type: String, required: true },
  heure: { type: String, required: true },
  statut: { type: String, default: "prévu" }
});

module.exports = mongoose.model("Rendezvous", rendezvousSchema);