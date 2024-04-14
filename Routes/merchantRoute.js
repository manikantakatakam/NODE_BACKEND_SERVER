const express = require('express');
const Product = require('../Models/MerchantModel');
const { getMerchant, createOffer } = require('../Controllers/MerchantController');

const router = express.Router();

router.get('/data', getMerchant);

router.post('/createOffer', createOffer);

module.exports = router;