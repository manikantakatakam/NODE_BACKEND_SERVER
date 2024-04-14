const Merchant = require('../Models/MerchantModel')
const asyncHandler = require('express-async-handler')

// get all product
const getMerchant = asyncHandler(async(req, res) => {
    try {
        const merchants = await Merchant.find({});
        const htmlResponse = generateHtmlResponse(merchants); // Generate HTML response
        res.status(200).send(htmlResponse);
    } catch (error) {
        res.status(500);
        throw new Error(error);
    }
})

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

module.exports = {getMerchant, createOffer}