function palindrome(str) {
  var strReverse;
  var strOG = str.toLowerCase().replace(/\W|_+/g, '');
  strReverse = strOG.split('').reverse().join('');
  if(strReverse === str) {
    return true;
  } else {
    return false;
  }
}

$(function(){
  $('#palInput').submit(function(event){
    event.preventDefault();
    $('#result').show();  
  });
});
