var myDataRef = new Firebase('https://resplendent-torch-6495.firebaseio.com/');

var MAX_CHARS = 48;

$('#letterInput').keypress(function (e) {
  if (e.keyCode == 13) {
    var letter = $('#letterInput').val();
    myDataRef.push({letter: letter});
	var displayed_letters = $('#messages').children();
	if (displayed_letters.length > MAX_CHARS) {
		console.log(displayed_letters[0])
		$(displayed_letters[0]).remove();
	}
    $('#letterInput').val('');
  }
});

firstMessagesQuery = myDataRef.endAt().limit(MAX_CHARS);
firstMessagesQuery.on('child_added', function(snapshot) {
  var message = snapshot.val();
  displayChatMessage(message.letter);
});

var displayChatMessage = function (letter) {
  $('<span/>').text(letter).appendTo($('#messages'));
  $('#messages')[0].scrollTop = $('#messages')[0].scrollHeight;
};