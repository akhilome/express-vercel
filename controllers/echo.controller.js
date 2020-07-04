module.exports = (req, res) => {
  const name = req.params.name.trim();
  const formatedName = String(name[0]).toUpperCase() + name.slice(1);
  const data = Object.keys(req.query).length ? req.query : null;

  res.json({
    success: true,
    message: `Hello, ${formatedName}!`,
    data
  });
};
