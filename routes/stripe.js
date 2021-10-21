const router = require("express").Router();
const stripe = require("stripe")(sk_test_51JmpoYHDoJpzEjoLF3LG9GPe51icCtMJtaadNCXXv7sDrcAkJyODmogiMyqOjdRooeOI6fzjdKGWNXHISEx3sO4D00bSWX4NcT);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
