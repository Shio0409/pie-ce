import * as http from "http";

//ts
import { main_page } from "./view/ts/main_page";
import { other_page } from "./view/ts/other_page";
import { login_page } from "./view/ts/login_page";
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
        console.log("http://localhost:8000");
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
                if(!url_parts.query.genre){
                    main_page(request,response);
                }else{
                    var genre =url_parts.query.ganre;
                    switch(genre){
                        default:
                            not_found(request,response);
                            break;
                    }
                }
                break;

            case "/other":
                other_page(request,response);
                break;

            case "/login_page":
                login_page(request,response);
                break;

            default:
                not_found(request,response);
                break;
        }
    }
}
