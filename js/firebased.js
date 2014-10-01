var myDataRef = new Firebase('https://resplendent-torch-6495.firebaseio.com/');

$('#letterInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var letter = $('#letterInput').val();
    myDataRef.push({letter: letter});
    $('#letterInput').val('');
  }
});

myDataRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  displayChatMessage(message.letter);
});

var displayChatMessage = function (letter) {
  $('<div/>').text(letter).appendTo($('#messagesDiv'));
  $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
};