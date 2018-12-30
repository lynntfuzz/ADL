var db  = require('../models');

exports.findShowcase = function(req, res) {
    var id = req.query.id;
    console.log("id = " + id);
    db.Showcase.findAll({
        where: {
          id: id
        }
      }).then( function(dbShowcase){
        res.json(dbShowcase);
      });
}


exports.updateShowcase = function(req, res) {
    
        console.log(req.file);
        console.log(req.file.filename);
        console.log("req.body.id = " + req.body.id);
        console.log("req.body.header = " + req.body.header);
        console.log("req.body.body = " + req.body.body);
        console.log("req.body.image_path = " + req.file.filename);
        var selector = { 
            where: { id: req.body.id }
          };
        req.body.image_path = req.file.filename;
        console.log(req.body);
        db.Showcase.update(req.body, selector).then(function(dbShowcase) {
            res.json(dbShowcase);
        });
    
};