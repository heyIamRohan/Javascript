// function (){
//     console.log("hello");
// }
// ();//Uncaught SyntaxError: Function statements require a function name
//////
//////
function x() {
    console.log("hello");
}
x();
let y = function () {
    console.log("hii");
}
y()
let z = function a() {
    console.log("qspiders");
}
z();
(function () {
    console.log("first");
})
(function () {
    console.log("second");
})
(function () {
    console.log("third");
})
()