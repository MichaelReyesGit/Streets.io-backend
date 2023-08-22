const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Name is required" });
  } else {
    next();
  }
};

const checkBoolean = (req, res, next) => {
  const { is_your_character } = req.body;

  if (typeof is_your_character !== "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  } else {
    next();
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.photo.substring(0, 7) === "http://" ||
    req.body.photo.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res.status(400).json({
      error: "You forgot to start your photo url with http:// or https://",
    });
  }
};

module.exports = { checkName, checkBoolean, validateURL };
