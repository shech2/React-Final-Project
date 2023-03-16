import stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripeAPIKey = process.env.STRIPE_SECRET_KEY;
const stripeInstance = stripe(stripeAPIKey);

const checkout = (req, res) => {
    stripeInstance.charges.create(
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
};

export default checkout;