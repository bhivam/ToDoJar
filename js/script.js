/*
Before I start explaining the code it is necessary to understand the $ function
because of its frequent use. Jquery has its own way to deal with HTML objects
that is seperate from the javascript original way. To create these special
jquery specific objects you have to use the $ functions. There are three main
ways that I use this function throughout this code:
- Selecting already existing html objects using selectors(we will talk more
about selectors in the css portion)
- Converting any HTML objects into the jquery objects
- Creating completely new jquery objects
*/

/*
This code adds the completed class when a task is clicked.

I am taking the .list class which is applied to that list of <a> tags. Then I
use the .delegate() function which allows for me to attatch an even handler on
all future and present elements of a certain type based on a parent of those
elemnts. In this case I attach an event handler onto all future or present <a>
tags with in the list. I say that I will be looking for the click event and then
I attach a function on it. The function is defined within the same statement.
The function check to see if the checked class is on there or not. If it is, the
function simply takes it off. Otherwise it will add the checked class and remove
the selected class to make sure it looks right. The selected class is for
indicated that the item was selected by the random selector, we will get to that
later.
*/



$(".list").delegate("a", 'click', function() {
    if ($(this).hasClass("checked1")) {
      $(this).removeClass("checked1");
    } else {
      $(this).addClass("checked1");
      $(this).removeClass("selected");
    }
});

/*
This removes a task when the x is clicked.

This uses the same delegate class but instead puts the event handler on the "x"
button we discussed earlier in the html file for this page. In javascript "this"
is the function which caused a certain event to happen. We put the specific
element that caused the event in the $ function to select the element. Then we
take the parent of that function, the actual list item, and remove it.
*/

$(".list").delegate(".close", "click", function() {
  $(this).parent().remove();
});

/*
This function adds tasks to the list.

This is linked to the add button on the html page so that it is triggerd when
that button is clicked. First it collects the value of the text in the add task
input box. Then it creates an <a> tag with all the appropriate classes and puts
the collected text in it. Next, it creates a button element with the correct
classes and attributes. Then a span with the unicode x inside it. I put the
span in the button and then the button in the item. Then before adding the item
to the list I make sure that the item actual has text. If it doesn't I put an
alert up which tells the user to put text in. Otherwise I add the list and I
clear the value of the text box where I got the task from.
*/
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

/*
This picks a random task that isn't already completed and highlights it.

The jquery object can contain more than one HTML element. So I select the list
and then all of the children in the list. Then I use length to get the number of
tasks there are. I get the random integer and check to see if that particular
task already has the selected class or if it is marked completed with the
checked class. If either are true the task will be rerolled. Otherwise It will
remove the selected class from any possibly previously selected tasks and adds
the selected class to the newly chosen element.
*/
function pickFromJar() {
  var itemNumber = getRandomInt($(".list").children().length) + 1;
  if ($(".list a:nth-child(" + (itemNumber) + ")").hasClass("checked1") ||
      $(".list a:nth-child(" + (itemNumber) + ")").hasClass("selected")) {
    pickFromJar();
  } else {
    $(".list").children().removeClass("selected");
    $(".list a:nth-child(" + (itemNumber) + ")").addClass("selected");
  }


}

// This is for selecting a random integer from 1 to the max (self explanatory)
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
