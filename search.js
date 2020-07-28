import si from 'search-index';

var ulid = ["top_navbar", "side_navbar"]
var app=(function(){
    return function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search');
  filter = input.value.toLowerCase();
  ul = document.getElementById("top_navbar");
  li = ul.getElementsByTagName('li');
console.log(li)
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  // var searchinput = document.getElementById()
}
})
