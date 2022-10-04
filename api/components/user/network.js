const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const controller = require("./index");

router.get("/", (req, res) => {
  controller
    .list()
    .then((lista) => {
      response.success(req, res, 200, lista);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
});

router.get("/:id", (req, res) => {
  controller
    .get(req.params.id)
    .then((user) => {
      response.success(req, res, 200, user);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
});

router.post("/upsert", (req, res) => {
  controller
    .upsert(req.body)
    .then((lista) => {
      response.success(req, res, 200, lista);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
});

router.get("/remove/:id", (req, res) => {
  controller
    .remove(req.params.id)
    .then((lista) => {
      response.success(req, res, 200, lista);
    })
    .catch((err) => {
      response.error(req, res, 500, err.message);
    });
});

module.exports = router;
