function greet(){
    return function(){
        console.log("Welcome to chinmaya.com");
    }
}

const result=greet();
result();