var results;
var results_types;
window.onload = (e) => {
  results = document.getElementsByClassName("result_data");
  results_types = document.getElementsByClassName("results_types");
  showFirstOfAll();
};

async function showFirstOfAll() {
  toggleViewAll(true);
  await clean();
  results_types[0].classList.add("selected_type");
  let element = results[0];
  element.style.display = "flex";
  element = results[4];
  element.style.display = "flex";
  element = results[8];
  element.style.display = "flex";
  element = results[12];
  element.style.display = "flex";
}

async function showHairs() {
  toggleViewAll(true);
  await clean();
  results_types[1].classList.add("selected_type");
  for (let index = 0; index <= 3; index++) {
    let element = results[index];
    element.style.display = "flex";
  }
}

async function showTricho() {
  toggleViewAll(true);
  await clean();
  results_types[2].classList.add("selected_type");
  for (let index = 4; index <= 7; index++) {
    let element = results[index];
    element.style.display = "flex";
  }
}

async function showLaser() {
  toggleViewAll(true);
  await clean();
  results_types[3].classList.add("selected_type");
  for (let index = 8; index <= 11; index++) {
    let element = results[index];
    element.style.display = "flex";
  }
}

async function showSlimming() {
  toggleViewAll(true);
  await clean();
  results_types[4].classList.add("selected_type");
  for (let index = 12; index <= 15; index++) {
    let element = results[index];
    element.style.display = "flex";
  }
}

async function showAll() {
  toggleViewAll(false);
  await clean();
  for (let index = 0; index < results.length; index++) {
    let element = results[index];
    element.style.display = "flex";
  }
}

async function clean() {
  for (let index = 0; index < results_types.length; index++) {
    let element = results_types[index];
    element.classList.remove("selected_type");
  }

  for (let index = 0; index < results.length; index++) {
    let element = results[index];
    element.style.display = "none";
  }
}

function toggleViewAll(show) {
  let elem = document.getElementById("result_viewAll");
  if (show) {
    elem.style.display = "flex";
  } else {
    elem.style.display = "none";
  }
}
