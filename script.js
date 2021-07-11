// select an element based on tag name (div here)
// const firstDiv = document.querySelector("div");
// firstDiv.textContent; // div one
// firstDiv.style.color = "red"; // this will change its color to red

// //select a div using the id
// const thirdDiv = document.querySelector('#second');
// thirdDiv.textContent; // div three

//select a div using the id
// const thirdDiv = document.getElementById("second");
// console.log(thirdDiv.textContent);
// // thirdDiv.textContent; // div three
// thirdDiv.style.backgroundColor = "yellow";
// thirdDiv.style.border = "1px solid black";
// thirdDiv.style.width = "200px";
// thirdDiv.style.height = "100px";

// // //select a div using the class name
// const secondDiv = document.querySelector(".first");
// secondDiv.textContent; // div two

// const secondDiv = document.getElementsByClassName("first");
// console.log(secondDiv); // div two
// secondDiv.style.color = "green";

// querySelectorAll()
// select all elements have (p) tag
// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);
// for (let i = 0; i < paragraphs.length; i++) {
//   paragraphs[i].style.color = "blue";
// }

//  createElement()

// const headerElement = document.createElement("h2");
// headerElement.textContent = "Hello";
// console.log(headerElement);

// // - appendChild()

// thirdDiv.appendChild(headerElement);

//  setAttribute()

// const newDiv = document.querySelector("div");
// // console.log(newDiv);
// newDiv.setAttribute("class", "dev2");
// const newd = document.getElementsByClassName("dev2");
// console.log(newd);

// thirdDiv.setAttribute("contenteditable", "true");
