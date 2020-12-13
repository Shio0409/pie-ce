import * as http from "http";
const ejs = require("ejs");
const url = require("url");
const fs = require("fs");

export class ServerAPI {
    public initServer(): void {
        const server = http.createServer(
            (request: http.IncomingMessage, response: http.ServerResponse) =>
            this.requestHandler(request, response)
        );
        server.listen("8000");

        // ログを出力する
        console.log("http://localhost:8000 へアクセスしてください");
    }

    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    private requestHandler(
        request: http.IncomingMessage,
        response: http.ServerResponse
    ): void {
        var url_parts = url.parse(request.url , true);
        
        switch(url_parts.pathname){
            case "/":
                response.write("main_page");
                response.end();
                break;
            
            case "/other":
                response.write("other_page");
                response.end();
                break;
            
            default:
                response.writeHead(200,{"Content-Type":"text/plain"});
                response.end("404 No page is here.");
                break;
        }
    }
}