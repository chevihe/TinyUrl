import express from "express";
import AdvertiserController from "../Controllers/AdvertiserController.js";

const AdvertiserRouter = express.Router();

AdvertiserRouter.get("/:id", AdvertiserController.getById);

export default AdvertiserRouter;