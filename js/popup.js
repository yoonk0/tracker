$(function() {

  function Goal(url, dayLimit, sessionLimit, timeTracked, selfAlert, friendAlert) {
    this.url = url,
    this.dayLimit = dayLimit,
    this.sessionLimit = sessionLimit, 
    this.timeTracked = timeTracked,
    this.selfAlert = selfAlert,
    this.friendAlert = friendAlert
  };

  var selfAlert = false;
  var friendAlert = false; 

  var setGoal = "";
  chrome.storage.sync.get('goal', function(result){
    setGoal = result.goal;
  });

  if(setGoal === "") {
    alert(1);
      $("#goalSet").hide();
      $("#goalForm").show();
  } else {
      $("#goalSet").show();
      $("#goalForm").hide();
  }

  $("#dayTime").change(function() {
      $("#dayTimeLimit").html($("#dayTime").val() + " minutes");
  }); 

    $("#sessionTime").change(function() {
      $("#sessionTimeLimit").html($("#sessionTime").val() + " minutes");
  }); 

  $("#friend").change(function() {
    if(this.checked) {
      $("#goalFriend").prop('checked',true);
      friendAlert = true; 
    } else {
      $("#goalFriend").prop('checked',false);
       friendAlert = false;
    }
  });

  $("#self").change(function() {
    if(this.checked) {
      $("#goalSelf").prop('checked',true);
      selfAlert = true; 
    } else {
      $("#goalSelf").prop('checked',false);
      selfAlert = false;
    }
  });

  $("#submit").click(function() {
    if($("#url").val() == "") {
      $("#message").html("Please provide an url");
    } else {
      var new_goal = new Goal($("#url").val(), $("#dayTime").val(), $("#sessionTime").val(), 0, selfAlert, friendAlert);
      chrome.storage.sync.set({'goal': new_goal});
      $("#goalForm").hide();
      $("#goalSet").show();
    }
  });

  $("#new").click(function() {
    $("#goalForm").show();
    $("#goalSet").hide();
  });

     // chrome.storage.sync.clear();

});
