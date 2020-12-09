import * as http from "http";

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
        response.end("Call From ServeAPI Class");
    }
}