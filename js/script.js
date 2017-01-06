$(function() {
  var form = $('#ajax-contact');


  $(form).submit(function(event) {
    console.log("something is happening");
    event.preventDefault();
    var formData = $(form).serialize();
    console.log(formData);

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
