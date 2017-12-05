const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
   res.json({ message: "get products" });
});

router.post("/", (req, res) => {});

router.get("/:id", (req, res) => {
   const { id } = req.params;
});
router.patch("/:id", (req, res) => {
   const { id } = req.params;
});
router.delete("/:id", (req, res) => {
   const { id } = req.params;
});

module.exports = router;
