window.onload = (e) => {
  //   Modal
  setTimeout(() => {
    const myModal = new bootstrap.Modal(
      document.getElementById("staticBackdrop")
    );
    myModal.show();
  }, 2500);

  //   Email Js
  (function () {
    emailjs.init("mTXSXtRWXFSNbRGWW");
  })();
};

function showDialog() {
  const myModal = new bootstrap.Modal(
    document.getElementById("staticBackdrop")
  );
  myModal.show();
}

function sendMail(type) {
  let name;
  let email;
  let phone;
  let location;
  let home_form_btn;
  if (type) {
    // Home Form
    name = document.getElementById("nameInput").value;
    email = document.getElementById("emailInput").value;
    phone = document.getElementById("phoneInput").value;
    location = document.getElementById("locationInput").value;
    home_form_btn = document.getElementById("home_form_btn");
  } else {
    // Dialog Form
    name = document.getElementById("nameInputDialog").value;
    email = document.getElementById("emailInputDialog").value;
    phone = document.getElementById("phoneInputDialog").value;
    location = document.getElementById("locationInputDialog").value;
    home_form_btn = document.getElementById("dialog_form_btn");
  }

  home_form_btn.disabled = true;

  console.log(name, email, phone, location);

  emailjs
    .send("service_g6gg176", "template_b9ysq5t", {
      from_name: name,
      to_name: "Advance Aesthetics",
      message: `${name} wants to connect. Email Provided : ${email}, Phone provided : ${phone}, Location :${location}`,
    })
    .then(() => {
      alert("Sucess");
      window.location = "thank_you.html";
    })
    .catch((e) => {
      alert(e);
      home_form_btn.disabled = false;
    });
}
