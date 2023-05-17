const {scrapeWebPageMain,scrapeWebPageDeatils}=require('../ulits/scraperMain')

const getDataMain=(req,res)=>{
    const url = 'https://www.alwatanvoice.com/arabic/index.html';
    scrapeWebPageMain(url)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => console.error(error));
}
const getDatadetails=(req,res)=>{
   console.log(req.query.url)
    const url = `https://www.alwatanvoice.com/arabic/${req.query.url}`;

    scrapeWebPageDeatils(url)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(error => console.error(error));
}

module.exports={
    getDataMain,
    getDatadetails
}