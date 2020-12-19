import { change_path_to_tag } from "../../func";

const fs = require("fs");
const ejs = require("ejs");
const path = require("path");

const html_head_data = fs.readFileSync(path.resolve(__dirname, "../ejs/html_head.ejs"),"utf-8");
const header_data = fs.readFileSync(path.resolve(__dirname, "../ejs/partial/header_partial.ejs"),"utf-8");
const page_data = fs.readFileSync(path.resolve(__dirname, "../ejs/main_page.ejs"),"utf-8");
const footer_data = fs.readFileSync(path.resolve(__dirname, "../ejs/partial/footer.partial.ejs"),"utf-8");

const css_paths = [
    "./view/css/header.css",
    "./view/css/main.css",
    "./view/css/footer.css",
]
const css_data = change_path_to_tag(css_paths);

export function main_page(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});

    var html_head = ejs.render(html_head_data,{
        title : "Pie-ce",
        css : css_data,
    });
    response.write(html_head);

    var header_ren = ejs.render(header_data,{});
    var footer_ren = ejs.render(footer_data,{});

    var content = ejs.render(page_data,{
        header : header_ren,
        footer : footer_ren,
    });
    response.write(content);

    response.end("");
}