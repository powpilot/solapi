const express = require('express')
const router = express.Router()

const Tickers = require('../models/Tickers')
const Quotes = require('../models/Quotes')

router.get('/tickers', async (req, res) => {      
    try {
        const security = await Tickers.findAll();
        res.status(201).send(security);
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/quotesforaday/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})', async (req, res) => {

    let queryDate = new Date(
        +req.params.year,
        +req.params.month - 1,
        +req.params.day
    );

    queryDate.setUTCHours(0, 0, 0, 0);
    let formattedquerydate = queryDate.toISOString();
   
    console.log(" // Listing all Quotes on " + formattedquerydate)

    try {
        const quotes = await Quotes.findForDate(formattedquerydate)
        res.status(201).send(quotes)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.get('/quotesforinterval/:year(\\d{4})-:month(\\d{2})-:day(\\d{2})/:endyear(\\d{4})-:endmonth(\\d{2})-:endday(\\d{2})/:ticker', async (req, res) => {

    let queryStartDate = new Date(
        +req.params.year,
        +req.params.month - 1,
        +req.params.day
    );

    let queryEndDate = new Date(
        +req.params.endyear,
        +req.params.endmonth - 1,
        +req.params.endday
    );

    queryStartDate.setUTCHours(0, 0, 0, 0);
    let formattedstartdate = queryStartDate.toISOString();

    queryEndDate.setUTCHours(0, 0, 0, 0);
    let formattedenddate = queryEndDate.toISOString();

    console.log(" // Listing all Quotes from " + formattedstartdate  + " to "+formattedenddate)

    try {
        const quotes = await Quotes.findForInterval(formattedstartdate,formattedenddate,req.params.ticker)
        res.status(201).send(quotes)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
