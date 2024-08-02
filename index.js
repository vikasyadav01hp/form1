$(document).ready(function() {
    $('#form').submit(function(event) {
        event.preventDefault();  
        if ($('#name').val() === "") {
          alert("Name field is empty.");
          return;  
      }
        if ($('#email').val() === "") {
            alert("Email field is empty.");
            return;  
        }
  
        alert("Success!");
        form.reset();
    });
  });
  