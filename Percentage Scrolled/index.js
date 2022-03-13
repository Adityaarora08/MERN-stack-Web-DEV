import "./styles.css";
window.onscroll = function(event) {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  var percen = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  var divv = document.getElementById("perc");
  divv.innerHTML = "Page scrolled - "+parseInt(percen)+"%";
};
