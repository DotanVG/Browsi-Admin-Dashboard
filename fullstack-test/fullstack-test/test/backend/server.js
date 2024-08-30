import express from "express";
import cors from "cors";
import fs from "fs";
import publishersRouter from "./routers/publishers.js";
import domainsRouter from "./routers/domains.js";

const PORT = 4300;
const app = express();
const dbFile = "./db.json";

export let publishers = [];

function loadPublishers() {
  try {
    const data = fs.readFileSync(dbFile, "utf8");
    publishers = JSON.parse(data);
  } catch (error) {
    console.error("Error reading database file:", error);
    publishers = [];
  }
}

export function savePublishers() {
  try {
    fs.writeFileSync(dbFile, JSON.stringify(publishers, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing to database file:", error);
  }
}

loadPublishers();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/publishers", publishersRouter);
app.use("/api/domains", domainsRouter);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
