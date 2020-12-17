const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const html_head_data = fs.readFileSync(path.resolve(__dirname, "../ejs/html_head.ejs"),"utf-8");
const reset_css_data = fs.readFileSync(path.resolve(__dirname, "../css/reset.css"),"utf-8");

const header_data = fs.readFileSync(path.resolve(__dirname, "../ejs/partial/header_patial.ejs"),"utf-8");
const header_css_data = fs.readFileSync(path.resolve(__dirname, "../css/header.css"),"utf-8");

const page_data = fs.readFileSync(path.resolve(__dirname, "../ejs/main_page.ejs"),"utf-8");
const main_page_css_data = fs.readFileSync(path.resolve(__dirname, "../css/main_page.css"),"utf-8");

const footer_data = fs.readFileSync(path.resolve(__dirname, "../ejs/partial/footer.partial.ejs"),"utf-8");
const footer_css_data = fs.readFileSync(path.resolve(__dirname, "../css/footer.css"),"utf-8");

const css_data = "<style>" + reset_css_data + header_css_data + main_page_css_data + footer_css_data + "</style>";

export function login_page(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});

    var html_head = ejs.render(html_head_data,{
        title : "Pie-ce",
        css : css_data,
    });
    response.write(html_head);

    var header = ejs.render(header_data,{});
    response.write(header);

    var content = ejs.render(page_data,{});
    response.write(content);

    var footer = ejs.render(footer_data,{});
    response.write(footer);
    response.end();
}