const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    const Mobile = sequelize.define('mobile',
        {
            name :{
                type : DataTypes.STRING
            },
            url : {
                type : DataTypes.STRING
            },
            price : {
                type : DataTypes.STRING
            }
        }
    )
    return Mobile;
}