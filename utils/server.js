const { PlayFab, PlayFabAdmin, PlayFabClient, PlayFabServer } = require('playfab-sdk')
const util = require('util');
var constants = require('./constant');
const settings = function(){
    PlayFab.settings.titleId = constants.TITLE_ID;
    PlayFab.settings.developerSecretKey = constants.DEV_SECKEY;
}
exports.GetPlayerProfile = async function (request) {
    settings()
    const func = util.promisify(PlayFabServer.GetPlayerProfile);
    const ret = await func(request);
    return ret.data;
}
