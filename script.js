console.log("we are live!");

let paragraph_color = document.querySelector("p");

paragraph_color.addEventListener("click", function () {
  return (paragraph_color.style.color = "red");
  console.log("click received, this is working right!");
});
