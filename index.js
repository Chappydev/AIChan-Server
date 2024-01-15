const express = require("express");
const cors = require("cors");
const aiRouter = require("./controllers/ai");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai", aiRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`AIChan server running on port ${PORT}`));
