const Merchant = require('../Models/MerchantModel')
const asyncHandler = require('express-async-handler')

// get all product
const getMerchant = asyncHandler(async(req, res) => {
    try {
        const products = await Merchant.find({});
        res.json(products);
    } catch (err) {
        console.error('Error fetching product data from MongoDB:', err);
        res.status(500).send('Error fetching product data from MongoDB');
    }
    
});


// create a product
const createOffer = asyncHandler(async(req, res) => {
    try {
        const merchants = await Merchant.create(req.body)
        res.status(200).json(merchants);
        
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
});


const addOffer = asyncHandler(async(req, res) => {
    const merchantName = req.params.merchantName;
  const offerData = req.body;

  try {
      // Find the merchant by name
      const merchant = await Merchant.findOne({ MerchantName: merchantName });

      if (!merchant) {
          return res.status(404).json({ message: 'Merchant not found' });
      }
      
      // Add the new offer to the offers array
      merchant.offers.push(offerData);

      // Save the updated merchant
      await merchant.save();

      res.status(200).json({ message: 'Offer added successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
});

const updateOffer = asyncHandler(async(req, res) => {
    const offerId = req.params.offerId;
    const updatedOfferData = req.body;

    try {
        // Construct the update object using $set for individual fields
        const updateObj = {};
        Object.keys(updatedOfferData).forEach(key => {
            updateObj[`offers.$.${key}`] = updatedOfferData[key];
        });

        // Find the offer by its ID and update specific fields
        const updatedOffer = await Merchant.findOneAndUpdate(
            { 'offers.offerID': offerId }, // Find by offerID within the offers array
            { $set: updateObj }, // Update specific fields of the matching offer
            { new: true } // Return the updated document
        );

        if (!updatedOffer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json({ message: 'Offer updated successfully', updatedOffer });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


const deleteOffer = asyncHandler(async(req, res) => {
    const offerId = req.params.offerId;

    try {
        // Find the offer by its ID and remove it
        const updatedMerchant = await Merchant.findOneAndUpdate(
            { 'offers.offerID': offerId }, // Find by offerID within the offers array
            { $pull: { offers: { offerID: offerId } } }, // Remove the offer from the offers array
            { new: true } // Return the updated document
        );

        if (!updatedMerchant) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json({ message: 'Offer deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


module.exports = {getMerchant, createOffer, addOffer, updateOffer, deleteOffer}