const cheerio = require("cheerio");
const axios = require("axios"); 
const db = require('./model/index');
const mobileModel = db.mobile;



let runScript = () => {

    axios
    .get("https://www.flipkart.com/mobiles/mi~brand/pr?sid=tyy,4io&otracker=nmenu_sub_Electronics_0_Mi")
    .then((response) => {
        const $ = cheerio.load(response.data);
        const allMobile = $('div[class="_2kHMtA"]').toArray();
        allMobile.forEach(mobile => {
          const mobileName  = $(mobile).find('div[class="_4rR01T"]').text(); 
          const imageURL = $(mobile).find('img[class="_396cs4"]').attr('src'); 
          const mobilePrice =  $(mobile).find('div[class="_30jeq3 _1_WHN1"]').text().toString() 

          mobileModel.create({name:mobileName , url:imageURL , price : mobilePrice})
        })
        console.log("success")
    

    })
    .catch((err) => console.log("Fetch error " + err));
}



db.connection()
  .then(async () => {
    console.log("Database Connected successfully");
    await runScript()
  })
  .catch((err) => console.log(err));
