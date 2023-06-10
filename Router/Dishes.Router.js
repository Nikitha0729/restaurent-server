import { Router } from "express";
import {
  createRecord,
  deleteRecord,
  getRecord,
  getRecords,
  updateRecord,
} from "../Controllers/Dishes.Controller.js";

const router = Router();

router.get("/records", getRecords);

router.get("/record/:id", getRecord);

router.post("/record", createRecord);

router.put("/record/:id", updateRecord);

router.delete("/record/:id", deleteRecord);

export default router;
