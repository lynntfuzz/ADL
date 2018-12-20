module.exports = function(app){

    const application = require('./routes/application');
    const contacts = require('./routes/contacts');

    app.use('/', application);
    app.use('/contacts', contacts);
//other routes..
}