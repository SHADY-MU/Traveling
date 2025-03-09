let bar = document.getElementsByClassName("bar")[0];
let linksContent = document.getElementsByClassName("linksC")[0];
let container = document.getElementsByClassName("container")[0];
let baron = false;

function barbtn(){
    if(baron == false){
        baron = true;
        linksContent.style.display = "flex";
        container.style.opacity = '.3';
    }
    else{
        baron = false;
        linksContent.style.display = "none";
        container.style.opacity = '1';
    }
}