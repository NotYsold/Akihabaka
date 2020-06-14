var scrolled = false;

window.onwheel = function(event){

  console.log("coucou" + scrolled)
  if (!scrolled){
    scrolled = true;
    window.scrollTo(0 ,1200);
    event.preventDefault();
  }
}
