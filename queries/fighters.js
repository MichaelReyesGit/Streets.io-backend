const db = require("../db/dbConfig");

const getAllFighters = async () => {
  try {
    const allFighters = await db.any("SELECT * FROM fighters");

    return allFighters;
  } catch (error) {
    return error;
  }
};

const fighterById = async (id) => {
  try {
    const fighter = await db.any(`SELECT * FROM fighters WHERE id = $1`, id);

    return fighter;
  } catch (error) {
    return error;
  }
};

const createFighter = async (data) => {
  try {
    const newfighter = await db.one(
      "INSERT INTO fighters (name, photo, is_your_character, difficulty, hp, character_type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        data.name,
        data.photo,
        data.is_your_character,
        data.difficulty,
        data.hp,
        data.character_type,
      ]
    );

    return newfighter;
  } catch (e) {
    return e;
  }
};

const deleteFighter = async (id) => {
  try {
    const deletedFighter = await db.any(
      `DELETE FROM fighters WHERE id = $1 RETURNING *`,
      id
    );

    return deletedFighter;
  } catch (e) {
    return e;
  }
};

const updateFighterById = async (id, fighter) => {
  try {
    const updatedFighter = await db.any(
      "UPDATE fighters set name = $1, photo = $2, is_your_character = $3, difficulty = $4, hp = $5, character_type = $6  WHERE id = $7 RETURNING *",
      [
        fighter.name,
        fighter.photo,
        fighter.is_your_character,
        fighter.difficulty,
        fighter.hp,
        fighter.character_type,
        id,
      ]
    );

    console.log(updatedFighter);
    return updatedFighter;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllFighters,
  fighterById,
  createFighter,
  deleteFighter,
  updateFighterById,
};
