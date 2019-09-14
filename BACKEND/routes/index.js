const express = require("express");
const router = express.Router();
const Url = require("../model/UrlShorten");

router.get("/:shortId", (req, res, next) => {
  let shortUrl = req.params.shortId;
  Url.findOneAndUpdate(
    { shortUrl },
    { $inc: { viewCount: 1 } },
    { new: true },
    (err, url) => {
      if (err) return next(err);
      res.status(200).json({ url });
    }
  );
});

module.exports = router;
