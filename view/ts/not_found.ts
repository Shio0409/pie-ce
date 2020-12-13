export function not_found(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("404 No page is here.");
    response.end();
}