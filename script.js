/* selector  */
let section = document.getElementsByTagName("section")
let header = document.getElementsByTagName("header")

header[1].style.display = "none"

/* creating  text node in section  */

let textNode = document.createElement("div");
textNode.textContent = "No Item in the todo list ";
