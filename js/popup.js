$(function() {
  $("#goalSet").hide();

  $("#slider").change(function() {
      $("#timeLimit").html($("#slider").val() + " minutes");
  }); 

  $("#friendlist").hide();

  $("#friend").change(function() {
    if(this.checked) {
      $("#friendlist").show();
      $("#goalFriend").prop('checked',true);
    } else {
      $("#friendlist").hide();
      $("#goalFriend").prop('checked',false);
    }
  });

  $("#self").change(function() {
    if(this.checked) {
      $("#goalSelf").prop('checked',true);
    } else {
      $("#goalSelf").prop('checked',false);
    }
  });

  $("#submit").click(function() {
    if($("#url").val() == "") {
      $("#message").html("Please provide an url");
    } else {
      $("#goalForm").hide();
      $("#goalSet").show();
    }
  });

  $("#new").click(function() {
    $("#goalForm").show();
    $("#goalSet").hide();
  });

});
