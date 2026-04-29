  let click = false;
  let getBody = document.querySelector("body");
  let getBurgerBtn = document.querySelector(".burger");
  let getMainMenu = document.querySelector(".main-menu-container");
  let getSlideMenu = document.querySelector(".slide-menu-container");
  let getSlideMenuItems = document.querySelectorAll(".slide-menu ul li");
  let getSections = document.querySelector("section");
  let getBurgerBar = document.querySelector(".burger div");
  let getBurgerBarBefore = window.getComputedStyle(document.querySelector(".burger div"), ":before");
  let getBurgerBarAfter = document.querySelector(":after");

getBurgerBtn.addEventListener("click", function() {

  let getWindowHeight = window.innerHeight;
  let getMainMenuHeight = getMainMenu.clientHeight;
  let getSlideMenuHeight = getSlideMenu.clientHeight;
  let getMenusHeight = getMainMenuHeight + getSlideMenuHeight

  /*abre el menú slide*/
  console.log(getWindowHeight);
  if (click === false) {
    click = true;

    /*añade la class "open" al botón para que el botón cambie estilo y se vuelva una X*/
      getBurgerBtn.classList.add("open");

      /*scalcula si la pantalla es muy estrecha, el menú tendrá scroll y no se quedará cortado*/
      if (getWindowHeight  <=  getMenusHeight) {

        getSlideMenu.style.transition ="1s ease-in-out";
        getSlideMenu.style.maxHeight = "calc(100vh - 100px)";
        getSlideMenu.style.marginTop ="100px";
        getSlideMenu.style.position ="fixed";
        getSlideMenu.style.overflow="scroll";
        getSlideMenu.style.zIndex = "1";
        let menuItemsLenght = getSlideMenuItems.length;
        for (let i = 0; i < menuItemsLenght; i++) {
          getSlideMenuItems[i].style.visibility ="visible";
        }
      }
        else {
          /*baja el menú slide-menu*/
          getSlideMenu.style.transition ="1s ease-in-out";
          getSlideMenu.style.marginTop ="100px";
          getSlideMenu.style.position ="fixed";
          getSlideMenu.style.overflow="scroll";
          getSlideMenu.style.zIndex = "1";
          let menuItemsLenght = getSlideMenuItems.length;
          for (let i = 0; i < menuItemsLenght; i++) {
            getSlideMenuItems[i].style.visibility ="visible";
          }
        }

          //evita que cuando la pantalla se alargue o estriña el menú se quede visible y scroll
            window.addEventListener("resize", function() {
              let getDinamicWindowHeight = window.innerHeight;
                console.log(getDinamicWindowHeight);
                if (click === true){
                if (getDinamicWindowHeight <= getMenusHeight) {
                  getSlideMenu.style.transition ="none";
                  getSlideMenu.style.maxHeight = "calc(100vh - 100px)";
                  //getSlideMenu.setAttribute("bottom", "0");
                  getSlideMenu.style.marginTop ="100px";
                  getSlideMenu.style.position ="fixed";
                  getSlideMenu.style.overflowY="scroll";
                  getSlideMenu.style.overflowX="hidden";
                  getSlideMenu.style.zIndex = "1";
                }

                else {
                  getSlideMenu.style.transition ="none";
                  getSlideMenu.style.marginTop ="100px";
                  getSlideMenu.style.position ="fixed";
                }
                }

                })

    }
    /*cierra el menú y cambia el boton burger a su estado inicial*/
    else {
        click = false;
        getBurgerBtn.classList.remove("open");

          getSlideMenu.style.transition ="1s ease-in-out";
          //getSlideMenu.removeAttribute("top");
          //getSlideMenu.removeAttribute("bottom");
          getSlideMenu.style.marginTop ="-350px";
          let menuItemsLenght = getSlideMenuItems.length;
          for (let i = 0; i < menuItemsLenght; i++) {
            getSlideMenuItems[i].style.visibility ="hidden";
          }
        }


  })

 /*funcion para que el menu cambie transparente o opaco segun scroll*/
  var prevScrollpos = window.pageYOffset;
  console.log(prevScrollpos);
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      getMainMenu.style.backgroundColor = "rgba(245,245,245, 1)";
            getMainMenu.style.transition = "0.3s";
    } else {
      getMainMenu.style.backgroundColor = "rgba(245,245,245, 0.3)";
      getMainMenu.style.transition = "0.3s";
    }
    if (currentScrollPos === 0) {
      getMainMenu.style.backgroundColor = "rgba(245,245,245, 0.3)";
      getMainMenu.style.transition = "0.3s";
    }

    prevScrollpos = currentScrollPos;
  }
