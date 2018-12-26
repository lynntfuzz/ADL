
var moment = require("moment");

var register = function(Handlebars) {
    var helpers = {
    dateformat: function (date, format) {
        var mmnt = moment(date);
        return mmnt.format(format);
    }
};

if (Handlebars && typeof Handlebars.registerHelper === "function") {
    for (var prop in helpers) {
        Handlebars.registerHelper(prop, helpers[prop]);
    }
} else {
    return helpers;
}

};

module.exports.register = register;
module.exports.helpers = register(null); 


//Must try to do the export stuff and then register it with handlebars snewhere? server.js like 

//https://stackoverflow.com/questions/32707322/how-to-make-a-handlebars-helper-global-in-expressjs/42224612#42224612
//https://stackoverflow.com/questions/32260117/handlebars-date-format-issue/32260841//