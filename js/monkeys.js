// GH Issue 3: Add cooldown period for after character input
// https://github.com/tant42/infinitemonkeys.io/issues/3

// GH Issue 6: Re-enable autofocus after submission
// https://github.com/tant42/infinitemonkeys.io/issues/6

$('form').submit(function(e){
  $('#letterInput').attr('disabled', true);
  $('#letterInput').css('border', '3px solid tomato');
  window.setTimeout(reenable, 5000);
  e.preventDefault();
})

var reenable = function(){
  $('#letterInput').attr('disabled', false);
  $('#letterInput').focus(); // sets the focus back to the input field
  $('#letterInput').css('border', '3px solid lime');
};