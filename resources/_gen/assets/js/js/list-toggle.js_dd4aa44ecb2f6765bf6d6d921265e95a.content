document.addEventListener('DOMContentLoaded', function(){
  document.querySelector("#show-grid-toggle").addEventListener("click",showGrid,false);
  document.querySelector("#show-list-toggle").addEventListener("click",showList,false);
  window.addEventListener("resize",resize,false);
  resize();
}, false);

function resize(){
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if(width <= 767){
    showList();
  }else{
    showGrid();
  }
}

function showList(){
  listElems = document.querySelectorAll(".show-list");
  gridElems = document.querySelectorAll(".show-grid");
  listElems.forEach(function(element){
    element.classList.remove("list__hidden");
  })
  gridElems.forEach(function(element){
    element.classList.add("list__hidden");
  })
}

function showGrid(){
  listElems = document.querySelectorAll(".show-list");
  gridElems = document.querySelectorAll(".show-grid");
  listElems.forEach(function(element){
    element.classList.add("list__hidden");
  })
  gridElems.forEach(function(element){
    element.classList.remove("list__hidden");
  })
}
