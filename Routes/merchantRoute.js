const express = require('express');
const Merchant = require('../Models/MerchantModel');
const bodyParser = require('body-parser');
const db = require('../DatabaseConnection/mongoose')
const { getMerchant, createOffer, addOffer, updateOffer } = require('../Controllers/MerchantController');

const router = express.Router();

router.get('/data', getMerchant);

router.post('/createoffer', createOffer);

router.put('/add-offer/:merchantName', addOffer);

router.put('/UpdateOffer/:offerId', updateOffer);


module.exports = router;