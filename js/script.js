$(function() {
  var form = $('#ajax-contact');


  $(form).submit(function(event) {
    // Hide form
    $("#input").addClass("hide");
    $("#complete").removeClass("hide");
    event.preventDefault();
    var formData = $(form).serialize();

    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
    .done(function(response) {
      // Make sure that the formMessage div has the 'success' message

      // Clear the form
      $('#first-name').val('');
      $('#last-name').val('');
      $('#email').val('');
    })
    .fail(function(data) {
      // Make sure that the formMessage div has 'error' message
    });
  })



});
