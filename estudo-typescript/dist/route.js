"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
function helloWorld(req, res) {
    return res.json({ message: 'hello dude' });
}
exports.helloWorld = helloWorld;
