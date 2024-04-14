const express = require('express');
const Product = require('../Models/MerchantModel');
const bodyParser = require('body-parser');
const db = require('../DatabaseConnection/mongoose')
const { getMerchant, createOffer } = require('../Controllers/MerchantController');

const router = express.Router();

router.get('/data', getMerchant);

router.post('/createoffer', createOffer);

router.post('/add-offer/:merchantName', async (req, res) => {
    try {
      // Extract merchant name and offer details from request body
      const merchantName = req.params.merchantName;
      const { offerID, offerTitle, offerCode, offerDescription } = req.body;


      const db = req.db; // Your MongoDB database reference
      const collection = db.collection('merchants');
  
      // Find the merchant by name to get the merchant ID
      const merchant = await collection.findOne({ MerchantName: merchantName });
      console.log(merchant);
      if (!merchant) {
        throw new Error('Merchant not found');
      }
  
      // Add the offer to the merchant's offers array
      const result = await collection.updateOne(
        { _id: merchant._id },
        {
          $push: {
            offers: {
              offerID: offerID,
              offerTitle: offerTitle,
              offerCode: offerCode,
              offerDescription: offerDescription
            }
          }
        }
      );
  
      client.close();
  
      res.status(200).json({ message: 'Offer added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router;