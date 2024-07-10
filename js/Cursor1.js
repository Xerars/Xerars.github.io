

window.onload = function()
{
  const cursor = document.querySelector(".cursor")
  var timeout;

  //Following Curosr on Mousemove
  document.addEventListener("mousemove",(e)=>
  {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y +"px";
    cursor.style.left= x +"px";
    cursor.style.display = "block";

    function mouseStop()
    {
      cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStop,5000);
  });

  //Cursor Effects on Mouseout
  document.addEventListener("mouseout",()=>
  {
    cursor.style.display="none";
  });


}

