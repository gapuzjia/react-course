let x = 1;
console.log(x);



//---------------

//define my object
let myObject = {
    myField: 12,
    myOtherField: 13
};

//define myVariable
let myVariable = true;

//logs both to console
console.log(myObject);
console.log(typeof myVariable);

//PUT A PIN ON THIS
const myFunction = (x) => x * x;
console.log(myFunction);

//--------------------
const arrowFunction = () => {
    const mainHeading = document.getElementById("main_heading");
    mainHeading.innerHTML = "Anotherer heading";
    mainHeading.style = "color: red";
}

//click anywhere, onclick function will go
document.addEventListener("click", arrowFunction);

