// GH Issue 3: Add cooldown period for after character input
// https://github.com/tant42/infinitemonkeys.io/issues/3

$('form').submit(function(e){
  $('#letterInput').attr('disabled', true);
  window.setTimeout(reenable, 5000);
  e.preventDefault();
})

var reenable = function(){
  $('#letterInput').attr('disabled', false);
  // $('#letterInput').css('border', '3px solid lime');
};