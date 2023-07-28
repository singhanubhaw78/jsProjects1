let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");
let p = document.querySelector("p");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    let ids = e.target.id;
    switch (ids) {
      case "grey":
        body.style.backgroundColor = ids;
        break;
      case "blue":
        body.style.backgroundColor = ids;
        break;
      case "yellow":
        {
          body.style.backgroundColor = ids;
          p.style.color = "black";
        }
        break;
      default: {
        body.style.backgroundColor = ids;
        p.style.color = "black";
      }
    }
  });
});
