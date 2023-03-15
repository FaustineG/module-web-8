const api = "http://localhost:8080/pet-clinics";
const searchParams = new URLSearchParams(window.location.search);
const clinicId = searchParams.get("id");

const inputNameElement = document.getElementById("name-input");
const titleNameElement = document.getElementById("title-name");
const ownerListElement = document.getElementById("owners-list");

//init on load
window.addEventListener("load", () => {
  loadClinicData();
});

function loadClinicData() {
  fetch(`${api}/${clinicId}`)
    .then((res) => res.json())
    .then((clinic) => {
      inputNameElement.value = clinic.name;
      titleNameElement.innerText = clinic.name;
      ownerListElement.innerHTML = clinic.ownerDtoList
        .map((name) => `<li>${name}</li>`)
        .join(" ");
    })
    .catch((error) => {
      console.error(error);
    });
}

function updateName() {
  const newNameValue = inputNameElement.value;
  fetch(`${api}/${clinicId}`, {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "http://127.0.0.1:5500/",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newNameValue }),
  }).then(() => {
    window.location.reload();
  });
}
