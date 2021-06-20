const path = "/users/download/index.css";



const isHtml = path => {

    const requiredExt = ".html";
    const pathExt = path.slice(-5);

    if (pathExt == requiredExt) {
        return true
    } else {
        return false
    }

}



console.log(isHtml(path));