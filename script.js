document.body.addEventListener("click", function (event) {
  if (!event.target.closest("a")) {
    if (document.body.style.backgroundColor === "rgb(234, 207, 152)") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "#eacf98";
    }
  }
});
