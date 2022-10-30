const crypto = require('crypto');
exports.GetTimestamp = function(seconds) {
    var d = new Date();
    var milis = d.getTime() + parseInt(seconds) * 1000;
    return milis;
}

exports.GetDate = function(seconds) {
    var d = new Date();
    var milis = d.getTime() + parseInt(seconds) * 1000;
    var r = new Date(milis);
    return r.toLocaleString();
}

exports.RandomNumberGenerator = function(max) {
    return Math.random() * max;
}

exports.RandomUUID = function(encoding = "hex") {
    //return crypto.randomBytes(16).toString(encoding);
    return parseInt(crypto.randomBytes(5).toString(encoding), 16);
}

exports.GetDataFromKey = function(defaultClass, userReadOnlyData, key) {
    if (!userReadOnlyData.hasOwnProperty(key)) {
        return JSON.parse(JSON.stringify(defaultClass[key])); //copy
    } else {
        return JSON.parse(userReadOnlyData[key].Value);
    }
}

exports.CompileErrorReport = function(error) {
    if (error == null) return "";
    var fullErrors = error.errorMessage;
    for (var paramName in error.errorDetails)
        for (var msgIdx in error.errorDetails[paramName])
            fullErrors += "\n" + paramName + ": " + error.errorDetails[paramName][msgIdx];
    return fullErrors;
}

exports.RandomUintUID = function(encoding = "hex") {
    return parseInt(crypto.randomBytes(4).toString(encoding), 16);
}