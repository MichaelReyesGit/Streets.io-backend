const express = require("express");
const router = express.Router();

const {
  getAllFighters,
  fighterById,
  createFighter,
  deleteFighter,
  updateFighterById,
} = require("../queries/fighters");

const {
  checkName,
  checkBoolean,
  validateURL,
} = require("../validations/checkFighters");

router.get("/", async (req, res) => {
  const allFighters = await getAllFighters();

  if (Array.isArray(allFighters)) {
    res.json(allFighters);
  } else {
    console.log(allFighters);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const fighter = await fighterById(id);

  if (fighter.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(fighter[0]);
  }
});

router.post("/", checkName, checkBoolean, validateURL, async (req, res) => {
  const newFighter = await createFighter(req.body);
  res.json(newFighter);
});

router.delete("/:id", async (req, res) => {
  const deletedFighter = await deleteFighter(req.params.id);

  if (deletedFighter.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedFighter[0]);
  }
});

router.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
  const updatedFighter = await updateFighterById(req.params.id, req.body);
  console.log(updatedFighter);
  if (updatedFighter.length === 0) {
    res.status(404).json({ message: "not found!", error: true });
  } else {
    res.json(updatedFighter[0]);
  }
});

module.exports = router;
