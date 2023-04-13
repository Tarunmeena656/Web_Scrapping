const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('Mobile_Database' , 'root' , 'Admin@123' , {
  host : 'localhost',
  dialect :'mysql'  ,
  logging:false
})


const connection = async()=> {
    await sequelize.authenticate();
   
}


const db = {};

db.connection = connection;
db.sequelize = sequelize;





db.mobile = require('./mobileModel')(sequelize);




db.sequelize.sync({force : false})
    .then(() => { console.log('models synced successfully') })
    .catch((err) => { console.log(err.message) })


module.exports = db;