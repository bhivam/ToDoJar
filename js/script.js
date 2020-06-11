// This is to complete items when they are clicked
$(".list").delegate("a", 'click', function() {
    if ($(this).hasClass("checked1")) {
      $(this).removeClass("checked1");
    } else {
      $(this).addClass("checked1");
      $(this).removeClass("selected");
    }
});

$(".list").delegate("list-item-group, .close", "click", function() {
  $(this).parent().remove();
});

// This function adds tasks to your list
function addTask() {
  itemValue = $(".newItem").val();
  var item = $('<a href="#" class="list-group-item list-group-item-action"></a>').text(itemValue);
  var button = $('<button type="button" class="close"></button>');
  var closeSign = $('<span></span>').text("×");
  button.append(closeSign);
  item.append(button);
  if (itemValue.length < 1) {
    alert("Please type a task in the box.")
  } else {
    $(".list").append(item);
    $(".newItem").val('');
  }
}

// Picks random task from the list
function pickFromJar() {
  var itemNumber = getRandomInt($(".list").children().length);
  if ($(".list a:nth-child(" + (itemNumber) + ")").hasClass("checked1") ||
      $(".list a:nth-child(" + (itemNumber) + ")").hasClass("selected")) {
    pickFromJar();
  } else {
    $(".list").children().removeClass("selected");
    $(".list a:nth-child(" + (itemNumber) + ")").addClass("selected");
  }


}

// This is for selecting a random integer from 1 to another number
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))+1;
}
