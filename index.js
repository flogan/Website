function toggle(id) {
var txt = document.getElementById(id);

var tabs = document.getElementsByClassName("tab");
console.log(tabs)
for (i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
}

console.log("here now")
txt.style.display = "block";
console.log(txt)

}
