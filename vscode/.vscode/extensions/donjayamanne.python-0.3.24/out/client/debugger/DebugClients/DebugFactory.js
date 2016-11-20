"use strict";
var LocalDebugClient_1 = require("./LocalDebugClient");
var NonDebugClient_1 = require("./NonDebugClient");
var RemoteDebugClient_1 = require("./RemoteDebugClient");
function CreateLaunchDebugClient(launchRequestOptions, debugSession) {
    if (launchRequestOptions.noDebug === true) {
        return new NonDebugClient_1.NonDebugClient(launchRequestOptions, debugSession);
    }
    return new LocalDebugClient_1.LocalDebugClient(launchRequestOptions, debugSession);
}
exports.CreateLaunchDebugClient = CreateLaunchDebugClient;
function CreateAttachDebugClient(attachRequestOptions, debugSession) {
    return new RemoteDebugClient_1.RemoteDebugClient(attachRequestOptions, debugSession);
}
exports.CreateAttachDebugClient = CreateAttachDebugClient;
//# sourceMappingURL=DebugFactory.js.map