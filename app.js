function handleClick() {
  let swipeObject = document.getElementById("swipe-object");
  if (swipeObject.style.background === "red") {
    swipeObject.style.background = "black";
  } else {
    swipeObject.style.background = "red";
  }
}

handleClick();
