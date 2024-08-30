import express from "express";
import { publishers } from "../server.js";

const domainsRouter = express.Router();

domainsRouter.get("/:publisherName", (req, res) => {
  const publisherName = req.params.publisherName;
  const publisher = publishers.find(
    (p) => p.publisher.toLowerCase() === publisherName.toLowerCase()
  );

  if (publisher) {
    res.status(200).json(publisher.domains);
  } else {
    res.status(404).json({ errorMessage: "Publisher not found" });
  }
});

export default domainsRouter;
