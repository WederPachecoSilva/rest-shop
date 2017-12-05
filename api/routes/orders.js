const router = require("express").Router();

router
   .route("/")
   .get((req, res) => {
      res.json({ message: "get orders" });
   })
   .post((req, res) => {});

router
   .route("/:id")
   .get((req, res) => {
      const { id } = req.params;
   })
   .delete((req, res) => {
      const { id } = req.params;
   });

module.exports = router;
