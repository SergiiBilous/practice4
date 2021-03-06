import statusCodes from "node-status-codes";
import global from '../jsdom.js';

function getResponse(scode, body = null, contentType = "text/plain") {
    return new global.window.Response(body, {
        status: scode,
        statusText: statusCodes[scode],
        headers: {
            "Content-type": contentType
        }
    });
}

function jsonResult(obj) {
    return getResponse(200, JSON.stringify(obj), "application/json");
}

export { getResponse, jsonResult };
