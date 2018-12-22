let url = "http://widget.proxiopro.com/CRMLS/PropertyResult.aspx";

exports.index = function(req, res) {
    res.render('index', {title: "Ginni Lee, Realtor"});
};

// handle search submit
exports.paramsToUrl = function(params, baseUrl = url) {
    let paramStr = Object.keys(params).map(function(val) {
        return `${encodeURIComponent(val)}=${encodeURIComponent(params[val])}`;
    }).join('&');
    
    return `${baseUrl}?${paramStr}`;
}


