import * as http from "http";
import { main_page } from "./view/ts/main_page";
import { other_page } from "./view/ts/other_page";
import { not_found } from "./view/ts/not_found";
const url = require("url");

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
                main_page(request,response);
                break;

            case "/other":
                other_page(request,response);
                break;

            default:
                not_found(request,response);
                break;
        }
    }
}
