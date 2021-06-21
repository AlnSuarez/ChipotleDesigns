var flag = 0;


// Solo hacemos el desplazamiento del menú y cambiamos el color de el menu icon
  function toggleMenu() {
    let menuSlide = document.getElementById("menuflotante");
    let menuICON = document.getElementById("Capa_1");


    if(flag==0){
      menuSlide.style.left = "0";
      menuICON.style.fill = "#FAC748";
      flag=1;
      
    }
    else{
      menuSlide.style.left = "-100%";
      menuICON.style.fill = "#FFFFFF";
      flag=0;
    }
  }

  