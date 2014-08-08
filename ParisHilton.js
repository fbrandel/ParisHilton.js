if(document.head) {
  document.head.innerHTML = '';
} else {
  var aHead = document.getElementsByTagName('head');
  if(aHead.length > 0) {
    aHead[0].innerHTML = '';
  }
}
