const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51QaxT2ErjS5SJGnzxJggvAP6DOOCopPfGS6VwRLOmQlTE6kMmvhXAYsxpz6F6lvQxoRAk20M2p5jp9ZlI85GBttU00S2jLzHwA')


// app config

const app = express();

// middlewares

app.use(cors({origin: true}));
app.use(express.json());

// API routing

app.get('/', (req, res) => res.status(200).send('Hello World'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total

    console.log('payment request recieved', total);

    const paymentIntent = await stripe .paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    res.status(201).send({ clientSecret: paymentIntent.create.client_secret })
})
//listen command

exports.api = functions.https.onRequest(app)