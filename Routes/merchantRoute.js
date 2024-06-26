const express = require('express');
const Merchant = require('../Models/MerchantModel');
const bodyParser = require('body-parser');
const db = require('../DatabaseConnection/mongoose')
const { getMerchant, createOffer, addOffer, updateOffer, deleteOffer } = require('../Controllers/MerchantController');

const router = express.Router();

router.get('/allData', getMerchant);

router.post('/createMerchant', createOffer);

router.put('/add-offer/:merchantName', addOffer);

router.put('/UpdateOffer/:offerId', updateOffer);

router.delete('/deleteOffer/:offerId', deleteOffer);


module.exports = router;
