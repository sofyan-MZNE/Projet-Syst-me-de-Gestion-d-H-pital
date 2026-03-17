const express = require("express");
const app = express();
app.use(express.json());

const connectDB = require("./config/db"); // <-- import correct
connectDB(); // <-- connecter MongoDB

const medecinRoutes = require("./routes/medecinRoutes");
const rendezvousRoutes = require("./routes/rendezvousRoutes");

app.use("/medecins", medecinRoutes);
app.use("/rendezvous", rendezvousRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));