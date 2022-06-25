function showMegaMenu(type) {
  var megaMenuCon = document.getElementById("mega_menu_con");
  megaMenuCon.style.transform = "translateY(0%)";
  megaMenuCon.style.opacity = "1";

  var megaMenus = document.querySelectorAll(".mega_menu");
  megaMenus.forEach((element) => {
    element.style.display = "none";
  });

  switch (type) {
    case 1:
      var megaMenu = document.getElementById("mega_menu_one");
      megaMenu.style.display = "flex";
      break;

    case 2:
      var megaMenu = document.getElementById("mega_menu_two");
      megaMenu.style.display = "flex";
      break;

    case 3:
      var megaMenu = document.getElementById("mega_menu_three");
      megaMenu.style.display = "flex";
      break;

    default:
      break;
  }
}

function hideMegaMenu() {
  var megaMenuCon = document.getElementById("mega_menu_con");
  megaMenuCon.style.transform = "translateY(-100%)";
  megaMenuCon.style.opacity = "0";
}
