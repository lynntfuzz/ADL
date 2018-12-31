'use strict';

module.exports = function(sequelize, DataTypes) {


    var Search = sequelize.define('Search', {
    
        RegionId: {
            type: DataTypes.STRING,
            devaultValue: "CA"}, 
        RegionName: {
            type: DataTypes.STRING,
            devaultValue:"California"
        }, 
        CityId: {
            type: DataTypes.INTEGER,
            devaultValue:'-1'},
        CityName: {
            type: DataTypes.STRING,
            devaultValue:""},
        PostCode: {
            type: DataTypes.STRING,
            devaultValue:""
        },
        CurrencyId: {
            type: DataTypes.INTEGER,
            devaultValue:'490'}, // USD
        GarageCount: {
            type: DataTypes.INTEGER,
            devaultValue:'-1'
        },
        BedRoomCount: {
            type: DataTypes.INTEGER,
            devaultValue:'-1'
        },
        BathRoomCount: {
            type: DataTypes.INTEGER,
            devaultValue:'-1'
        },
        MinPrice: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        MaxPrice: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        YearBuilt: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        YearBuiltTo: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        PriceOption: {
            type: DataTypes.STRING,
            devaultValue:'down'
        },
        ClassId: {
            type: DataTypes.INTEGER,
            devaultValue:'-1'
        },
        LivingAreaFrom: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        LivingAreaTo: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        LandAreaFrom: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        LandAreaTo: {
            type: DataTypes.INTEGER,
            devaultValue:'0'
        },
        AreaUnit: {
            type: DataTypes.INTEGER,
            devaultValue:'1'
        },
        lng: {
            type: DataTypes.STRING,
            devaultValue:'en-US'
        },
        AGENT: {
            type: DataTypes.STRING,
            devaultValue:""
        },
        OFFICE: {
            type: DataTypes.STRING,
            devaultValue:""
        },
        user_id: {
            type: DataTypes.STRING,
            defaultValue: ""
        }
    })
    return Search;
};