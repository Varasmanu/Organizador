const PAGEMEDS = document.querySelector(".pageMeds");
const PAGEHOME = document.querySelector(".pageHome");
const PAGEMEDSTITLE = document.querySelector("#row");
const btn_siguiente = document.querySelector("#btn_siguiente");
let meds_input = document.querySelector("#meds_input");
let gluc_input = document.querySelector("#gluc_input");
let pres_input = document.querySelector("#pres_input");
let medicinas = document.querySelector("#medicamentos");
let medicamentos_list = document.querySelector("#medicamentos_list");
const CHANGESBTN = document.querySelector("#changesbtn");

function agregarNombre() {
  let input_name = document.getElementById("input_name");
  let newh1 = document.createElement("h3");
  let newtxt = document.createTextNode(input_name.value);
  if (input_name.value !== "") {
    newh1.appendChild(newtxt);
    PAGEMEDSTITLE.prepend(newh1);
  }
}

btn_siguiente.addEventListener("click", () => {
  agregarNombre();
  agregarMedicamentos();
  mostrarPageMeds();
});

function mostrarPageMeds() {
  PAGEHOME.style.display = "none";
  PAGEMEDS.style.display = "block";
}

gluc_input.addEventListener("click", () => {
  let glucemia = document.querySelector("#glucemia");
  if (gluc_input.checked) {
    glucemia.style.display = "block";
  } else {
    glucemia.style.display = "none";
  }
});

pres_input.addEventListener("click", () => {
  let presion = document.querySelector("#presion");
  if (pres_input.checked) {
    presion.style.display = "block";
  } else {
    presion.style.display = "none";
  }
});

meds_input.addEventListener("click", () => {
  if (meds_input.checked) {
    let howMany = document.querySelector(".howMany");
    howMany.style.display = "block";
    medicinas.style.display = "block";
  } else {
    let howMany = document.querySelector(".howMany");
    howMany.style.display = "none";
    medicinas.style.display = "none";
  }
});

function agregarMedicamentos() {
  let formSelect = parseInt(document.querySelector(".form-select").value);
  for (i = 1; i <= formSelect; i++) {
    let newLabel = document.createElement("label");
    newLabel.textContent = `Medicamento #${i}`;
    let newInput = document.createElement("input");
    newInput.className = `med_input`;
    PAGEMEDSTITLE.appendChild(newLabel);
    PAGEMEDSTITLE.appendChild(newInput);
  }
}

const BOTONFINALIZAR = document.querySelector("#btnfinish");
BOTONFINALIZAR.addEventListener("click", function () {
  let CANTIDADMEDICINAS = document.querySelectorAll(".med_input");
  medicamentos_list.style.display = "block";
  for (let medicina of CANTIDADMEDICINAS) {
    let newMed = document.createElement("li");
    newMed.innerHTML = `<div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="check1" checked>
    <label class="custom-control-label" for="check1">${medicina.value}</label>
  </div>`;
    medicamentos_list.appendChild(newMed);
  }
  PAGEMEDS.style.display = "none";
});

CHANGESBTN.addEventListener("click", function () {
  let pres = document.querySelector("#pres");
  let gluc = document.querySelector("#gluc");
  let fecha = document.querySelector("#fecha");
  let today = new Date();
  let date = ` ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
  pres.innerText += ` ${presion_input.value}/${presion_input2.value}`;
  gluc.innerText += ` ${glucemia_input.value}`;
  fecha.innerText += date;
  agregarMedicinas();
});

// function agregarMedicinas() {
//   let medicines = document.querySelectorAll(".custom-control-input");
//   let contador = 0;
//   for (let input of medicines) {
//     let superlist = document.querySelector("#superlist");
//     let labelname = document.querySelectorAll(".custom-control-label");
//     if (input.checked) {
//       let label = document.createElement("li");
//       label.innerText = labelname[contador].innerText;
//       superlist.appendChild(label);
//       contador += 1;
//     }
//   }
// }
