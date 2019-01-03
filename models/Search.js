'use strict';

module.exports = function(sequelize, DataTypes) {


    var Search = sequelize.define('Search', {
    
        // RegionId: {
        //     type: DataTypes.STRING,
        //     defaultValue: "CA"}, 
        // RegionName: {
        //     type: DataTypes.STRING,
        //     defaultValue:"California"
        // }, 
        // CityId: {
        //     type: DataTypes.INTEGER,
        //     defaultValue:'-1'},
        CityName: {
            type: DataTypes.STRING,
            defaultValue:"n/a"},
        PostCode: {
            type: DataTypes.STRING,
            defaultValue:"n/a"
        },
        Currency: {
            type: DataTypes.STRING,
            defaultValue:'USD'},
        GarageCount: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        BedRoomCount: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        BathRoomCount: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        MinPrice: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        MaxPrice: {
            type: DataTypes.STRING,
            defaultValue:'n/a'
        },
        YearBuilt: {
            type: DataTypes.STRING,
            defaultValue:'n/a'
        },
        YearBuiltTo: {
            type: DataTypes.STRING,
            defaultValue:'n/a'
        },        
        Type: {
            type: DataTypes.STRING,
            defaultValue:'Any'
        },
        LivingAreaFrom: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        LivingAreaTo: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        LandAreaFrom: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        LandAreaTo: {
            type: DataTypes.INTEGER,
            defaultValue:'0'
        },
        AreaUnit: {
            type: DataTypes.STRING,
            defaultValue:'ft'
        }        
    })
    return Search;
};