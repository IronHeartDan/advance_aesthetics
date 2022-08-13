window.onload = () => {
  var btn_chat = document.getElementById("btn_chat");
  var prevScrollpos = window.pageYOffset;
  var bigHeader = document.getElementById("bigHeader");
  var smallHeader = document.getElementById("smallHeader");
  window.onscroll = (e) => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      bigHeader.style.opacity = "1";
      smallHeader.style.opacity = "1";
    } else {
      bigHeader.style.opacity = "0";
      smallHeader.style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
    if (document.body.scrollHeight === window.scrollY + window.innerHeight) {
      btn_chat.style.transform = "scale(0)";
    } else {
      btn_chat.style.transform = "scale(1)";
    }
  };
};

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

function showDialog() {
  const myModal = new bootstrap.Modal(
    document.getElementById("staticBackdrop")
  );
  myModal.show();
}

function showResults(type) {
  console.log(type);
}
