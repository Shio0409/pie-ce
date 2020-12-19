export function change_path_to_tag(css_paths){
    let data:string = "";
    for(let i = 0; i < css_paths.length() ; i++){
        data+= "<link rel=\"stylesheet\" href=\"" + css_paths[i] + "\">" ;
    }
    return data;
}