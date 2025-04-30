document.addEventListener("keydown",(event) => {
    switch(event.keyCode){
        case 46: //DEL Key
            document.location = "/about/";
            event.preventDefault();
            return false;
        case 112: //F1
            document.location = "/";
            event.preventDefault();
            return false;
        case 113: //F2
            document.location = "/work/";
            event.preventDefault();
            return false;
        default:
            return true;
    }
});