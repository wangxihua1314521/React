var Banner = require('./banner.json');
let ClassifyList = require("./classify-list.json");
var Main = require('./main.json');
var List = require('./list.json');
var Classify = require('./classify.json');
var Details = require('./details.json');

module.exports = function() {
    return {
        "banner": Banner,
        "classify-list":ClassifyList,
        "main": Main,
        "list":List,
        "classify":Classify,
        "details":Details
    }
}

// restful
