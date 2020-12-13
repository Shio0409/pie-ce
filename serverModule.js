"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAPI = void 0;
const http = require("http");
const ejs = require("ejs");
const url = require("url");
const fs = require("fs");
class ServerAPI {
    initServer() {
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen("8000");
        // ログを出力する
        console.log("http://localhost:8000 へアクセスしてください");
    }
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(request, response) {
        var url_parts = url.parse(request.url, true);
        switch (url_parts.pathname) {
            case "/":
                response.write("main_page");
                response.end();
                break;
            case "/other":
                response.write("other_page");
                response.end();
                break;
            default:
                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end("404 No page is here.");
                break;
        }
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=serverModule.js.map