module.exports = function(app){

    const application = require('./routes/application');
    const contacts = require('./routes/contacts');
    const admin = require('./routes/admin');
    const users = require('./routes/users');

    app.use('/', application);
    app.use('/contacts', contacts);
    app.use('/admin', admin);
    app.use('/users', users);

}