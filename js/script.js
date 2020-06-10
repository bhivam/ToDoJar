function testButton() {
  alert("Hello! I am an alert box!!");
$(document).ready(function(){
  function addTask() {
    var text = "<li>hello world</li>";
    $(".list").after(text);
  };

  function testButton() {
    alert("Hello! I am an alert box!!");
  };
});
