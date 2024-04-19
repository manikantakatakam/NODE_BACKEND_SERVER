const mongoose = require('mongoose');

const MerchantSchema = mongoose.Schema(
    {
        MerchantName: { type: 'string' },
        Logo: { type: 'string' },
        Url: { type: 'string' },
        MerchantId: { type: 'number' },
        offers: [
            {
              offerID: { type:'number'},
              offerTitle: { type:'string' },  
              offerCode: { type:'string' },
              startDate:{ type:'date' },
              endDate: { type:'date' },
              status: { type:'string' },
              offerDescription: { type:'string' },
              notes: { type:'string' }
            }
          ]

    },
    {
        timestamps: true,
    }

);

const merchantschema = mongoose.model('Merchant', MerchantSchema);

module.exports = merchantschema;