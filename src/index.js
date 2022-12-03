const task= document.getElementById("task");
task.innerHTML ="New Task"
document.addEventListener("DOMContentLoaded",(event) => {
  event.preventDefault();
  // your code here
});
removeTask.addEventListener("click", function (e) {
  node.parentNode.removeChild(node);
});