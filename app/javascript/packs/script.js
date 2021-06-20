import roomSubscriber from "../channels/room_channel";

/*  listening for changes to the input field, if a file is
    selected we read it using the FileReader api, then we
    change the src attr of the image tag by the file url */
document.addEventListener("DOMContentLoaded", (event) => {
  /* Avatar upload functionality for user registration */
  var readURL = function (input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $(".profile-pic").attr("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  };

  $(".file-upload").on("change", function () {
    readURL(this);
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(".upload-button").on("click", function () {
    $(".file-upload").click();
  });
});
