//callback example
setTimeout(function(){
    console.log("timer")

},5000);
function x(y){
    console.log("x")
    y();

}
x(function y(){         // callback function passed in x function.
    console.log("y") 
});
