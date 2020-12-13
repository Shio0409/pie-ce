export function other_page(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("other_page");
    response.end();
}