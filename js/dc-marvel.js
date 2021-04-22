
// var accessTheDOM = document.getElementById("dc");
// var showMe = accessTheDOM.innerHTML;
// alert(allOfItAtOnce);

var like = document.getElementById("like");
var dontLike = document.getElementById("dontLike");
var dc = document.getElementById("dc");
dc.innerHTML = dc.innerHTML + " Animated Universe";
var output = like.innerHTML + ' ' + dc.innerHTML;
// alert(output);

var marvel = document.getElementById("marvel");
marvel.setAttribute('class', 'hotpink');
marvel.innerHTML = marvel.innerHTML + ' Cinematic Universe';

dc.setAttribute('class', 'hotpink');

var hotPinks = document.getElementsByClassName('hotpink');
hotPinks[0].style.color = 'rebeccapurple';
hotPinks[1].style.color = 'green';