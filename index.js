window.lastused = '';
window.lastusedcontext = '';

function arraySearch(arr,val) {
    for (var i=0; i<arr.length; i++)
        if (arr[i] == val)   {
            return i+1;
        }
    return false;
}
window.keypadInput  = function(keys) {
  let d = new Date();
	
  var current_last_used_context = d.getTime();
  window.lastusedcontext = current_last_used_context;
	let result = document.getElementById("result");
  let value = result.value;
  test_value_exists = arraySearch(keys,window.lastused);
  input_index = 0;
  if(test_value_exists  && keys.length > 1) {
  	if(test_value_exists >= keys.length) {
      test_value_exists = 0
    }
    value = value.substring(0, value.length - 1)
  	input_index = test_value_exists
  }
  value += keys[input_index];
  window.lastused = keys[input_index];
  result.value = value;
  setTimeout(function() { 
  if( window.lastusedcontext == current_last_used_context ){
  	window.lastused = '';}
  }, 3000);
} 
