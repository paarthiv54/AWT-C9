function outer(name){
    var msg = "Hello";
    function inner(){
        console.log(msg ,"",name);
    }
    return inner;
}
inner = outer("Human")
inner();