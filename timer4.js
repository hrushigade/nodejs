function welcome(){
    console.log("welcome to india");
}
var id1=setTimeout(welcome,1000);
var id2=setInterval(welcome,1000);
clearTimeout(id1);