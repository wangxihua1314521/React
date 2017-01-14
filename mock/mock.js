var Banner = require('./banner.json');
var Main = require('./main.json');
var List = require('./list.json');
var Classify = require('./classify.json');

module.exports = function() {
    return {
        "banner": Banner,
        "main": Main,
        "list":List,
        "classify":Classify
    }
}

// restful
