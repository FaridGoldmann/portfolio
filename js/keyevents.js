document.addEventListener("keydown",(event) => {
    switch(event.keyCode){
        case 46: //DEL Key
            document.location = "about.html";
            event.preventDefault();
            return false;
        case 112: //F1
            document.location = "index.html";
            event.preventDefault();
            return false;
        case 113: //F2
            document.location = "work.html";
            event.preventDefault();
            return false;
        default:
            return true;
    }
});