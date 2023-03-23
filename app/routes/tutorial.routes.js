var router = require("express").Router();                        //define
const tutorials = require("../controllers/tutorial.controller.js");

router.post("/post", tutorials.create);
router.get("/getallpost", tutorials.findAll);
router.get("/published", tutorials.findAllPublished);            //declaration
router.get("/:id", tutorials.findOne);
router.put("/:id", tutorials.update);
router.delete("/:id", tutorials.delete);
router.delete("/deleteall", tutorials.deleteAll);

module.exports = router;                                        //export