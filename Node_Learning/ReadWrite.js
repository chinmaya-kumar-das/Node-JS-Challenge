const fs=require('fs')

// Code to read content from  a file
//---------------------------------------------
//1 it is Asnchronous manner
fs.readFile('input.txt',(error,content)=>{
    if(error){
        return console.log(error);
    } 
    console.log("Read content is : "+content);
})
console.log("Hello from last");//asyn because it run first

//2 it is sync manner
const contents=fs.readFileSync('input.txt');
console.log("Read contents is : "+contents);
console.log("Hello fromlast");//sync run it last try using only this block of code




// Code to write content from  a file
//-------------------------------------------------------
//1 it is Asnchronous manner
let x="chinmaya "
fs.writeFile("output.js",x,error=>{
    if(error){
        return console.log(error);
    }
    console.log("Written successfully!");
})
console.log("Last line");

//2 it is sync manner
fs.writeFileSync("output.js","haaaaaaaaaaaaa")
console.log("Last lines");