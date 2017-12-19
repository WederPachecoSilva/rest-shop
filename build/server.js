"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const app_1 = require("./app");
const port = process.env.PORT || 3000;
const server = http.createServer(app_1.default);
server.listen(port, () => console.log(`running on port ${port}`));
//# sourceMappingURL=server.js.map