const mongoose = require('mongoose')

const TickerSchema = mongoose.Schema({

    _id: {
        required: true,
        type: String
    },
    ticker: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    currency: {
        required: true,
        type: String
    }
})

TickerSchema.statics.findAll = async () => {
    console.log("fetching All tickers"); 
    const tickers = await Tickers.find({});
    
    if (!tickers) {
        throw new Error({ error: 'no tickers found' })
    }
    return tickers
}

const Tickers = mongoose.model('Tickers', TickerSchema)

module.exports = Tickers