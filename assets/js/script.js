var displayDateEl = $('#currentDay');

// Displays current date
function currentDate() {
  var rightNow = dayjs().format('dddd, MMMM DD, YYYY');
  displayDateEl.text(rightNow);
}

currentDate();

$(document).ready(function () {
  // Saves tasks to local storage
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var task = $(this).siblings(".description").val();

    localStorage.setItem(time, task);
  })

  // Get saved tasks from local storage
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  