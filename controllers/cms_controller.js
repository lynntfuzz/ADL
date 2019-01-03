var db  = require('../models');

exports.findShowcase = function(req, res) {
    var id = req.query.id;
    db.Showcase.findOne({
        where: {
          id: id
        }
      }).then( function(dbShowcase){
        res.json(dbShowcase);
      });
}


exports.updateShowcase = function(req, res) {
    
        var selector = { 
            where: { id: req.body.id }
          };

        db.Showcase.update(req.body, selector).then(function(dbShowcase) {
            res.json(dbShowcase);
        });
    
};