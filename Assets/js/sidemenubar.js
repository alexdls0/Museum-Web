function openSM(){
    document.getElementById("mySidemenu").style.width ="450px";
    document.getElementById("mySidemenu").style.zIndex ="1000";
    document.getElementById("mySidemenu").style.opacity ="1";    
}
function closeSM(){
    document.getElementById("mySidemenu").style.width = "0";
    document.getElementById("mySidemenu").style.opacity ="0";
    document.getElementById("wrapper").style.marginLeft ="0";
    document.getElementById("wrapper").style.overflow = 'visible';
}








