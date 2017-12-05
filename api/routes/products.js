const router = require("express").Router();

router
   .route("/")
   .get((req, res) => {
      res.json({ message: "get products" });
   })
   .post((req, res) => {
      res.json({ message: "post products" });
   });

router
   .route("/:id")
   .get((req, res) => {
      const { id } = req.params;
      res.json({ message: "get products/:id" });
   })
   .patch((req, res) => {
      const { id } = req.params;
      res.json({ message: "patch products/:id" });
   })
   .delete((req, res) => {
      const { id } = req.params;
      res.json({ message: "delete products/:id" });
   });

module.exports = router;
