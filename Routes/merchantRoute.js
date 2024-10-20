const express = require('express');
const Merchant = require('../Models/MerchantModel');
const bodyParser = require('body-parser');
const db = require('../DatabaseConnection/mongoose')
const { getMerchant, getMerchantByName, createOffer, addOffer, updateMerchantByName, updateOffer, deleteOffer } = require('../Controllers/MerchantController');

const router = express.Router();

router.get('/allData', getMerchant);

router.get('/getMerchantOffers/:merchantName', getMerchantByName);

router.post('/createMerchant', createOffer);

router.put('/add-offer/:merchantName', addOffer);

router.put('updateMerchant/:merchantName', updateMerchantByName);

router.put('/UpdateOffer/:offerId', updateOffer);

router.delete('/deleteOffer/:offerId', deleteOffer);


module.exports = router;
