var recursive=function(){
    console.log("hey 1 milliseconds completed");
    setTimeout(recursive,1000);
}
recursive();