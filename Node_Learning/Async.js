console.log("Welcome students");

function callback(){
    console.log(" Hello again from callback");
}
setTimeout(callback,2000);//async code

console.log("Hello from the final line");