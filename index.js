// function saySomething(heyWhatsUp) {
//   window.alert(heyWhatsUp);
// }
  // Business logic
// function sampleFunction() {
//   let localSting = "this is a variable";
//   window.alert(localString);
//   localSting = "this is a variable update!!"
//   window.alert(localSting); 
//   return localSting;
// }



// User interface logic

// const globalString = sampleFunction();
// window.alert("The value of 'localString at the global scope:" + globalString);


// function sample() {
//   localString = "local variable";
//   window.alert(localString);
//   localString = "variable update!!";
//   // window.alert(localString); if we add this window alert it will return last localString two times.
// }

// sample();
// window.alert(localString);

let bunnyName = "tito";

function Ranch() {
  let bunnyName = "verde"
  window.alert(bunnyName);
  bunnyName = "rojo"
}

Ranch();
window.alert(bunnyName);

