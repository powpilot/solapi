const mongoose = require('mongoose')

const quoteschema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
   price: {
        type: String,
        required: true
    }
})

quoteschema.statics.findForDate = async (searchdate) => {
    console.log(" // Fetching all Quotes on "+ searchdate);


   const quotes = await Quotes.find({date: searchdate})
   if (!quotes) {
       throw new Error({ error: 'no quotes found' })
   }
   return quotes
}


quoteschema.statics.findForInterval = async (startdate, enddate, intervalticker) => {
    console.log(" // Listing all Quotes from" + startdate  + " to "+enddate + " (ticker:" + intervalticker)

   const quotes = await Quotes.find({date: {
    '$gte': startdate,
    '$lt': enddate }
    , ticker : intervalticker

} )
   if (!quotes) {
       throw new Error({ error: 'no quotes found' })
   }
   return quotes
}


const Quotes = mongoose.model('Quotes', quoteschema)

module.exports = Quotes