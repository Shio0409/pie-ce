const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const page_data = fs.readFileSync(path.resolve(__dirname, "../ejs/login_page.ejs"),"utf-8");
const reset_css_data = fs.readFileSync(path.resolve(__dirname, "../css/reset.css"),"utf-8");
const login_page_css_data = fs.readFileSync(path.resolve(__dirname, "../css/login_page.css"),"utf-8");
// const css_data = "<style>" + reset_css_data + login_page_css_data + "</style>";

export function login_page(request,response){
    var content = ejs.render(page_data,{
        // css : css_data,
    });
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(content);
    response.end();
}