"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAPI = void 0;
const http = require("http");
//ts
const main_page_1 = require("./view/ts/main_page");
const other_page_1 = require("./view/ts/other_page");
const login_page_1 = require("./view/ts/login_page");
const not_found_1 = require("./view/ts/not_found");
const url = require("url");
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
                main_page_1.main_page(request, response);
                break;
            case "/other":
                other_page_1.other_page(request, response);
                break;
            case "/login_page":
                login_page_1.login_page(request, response);
                break;
            default:
                not_found_1.not_found(request, response);
                break;
        }
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=serverModule.js.map