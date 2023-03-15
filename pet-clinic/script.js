const api = "http://localhost:8080/pet-clinics";
const fetchPetClinics = () => fetch(api).then((res) => res.json());

const tableBodyElement = document.getElementById("table-body");

// init on load
window.addEventListener("load", () => {
  fetchPetClinics().then((clinics) => {
    fillTableWithClinics(clinics);
  });
});

// react to search input
document.getElementById("search-input").addEventListener("input", (e) => {
  const searchInput = e.target.value;
  fetchPetClinics().then((clinics) => {
    const filteredClinics = clinics.filter(function filterByName(clinic) {
      console.log(
        "Est-ce que je trouve la chaine de recherche :" +
          searchInput +
          " dans le nom : " +
          clinic.name
      );
      return clinic.name.includes(searchInput);
    });
    fillTableWithClinics(filteredClinics);
  });
});

// DOM update functions
function fillTableWithClinics(clinics) {
  tableBodyElement.innerHTML = "";
  clinics.forEach((clinic) => {
    addRowToTable(clinic);
  });
}
function addRowToTable(clinic) {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.innerText = clinic.name;

  const idCell = document.createElement("td");
  idCell.innerText = clinic.id;

  const linkCell = document.createElement("td");
  const linkElement = document.createElement("a");
  linkElement.innerText = "Détails";
  linkElement.setAttribute("href", `./detail/detail.html?id=` + clinic.id);
  linkCell.appendChild(linkElement);

  row.appendChild(nameCell);
  row.appendChild(idCell);
  row.appendChild(linkCell);

  tableBodyElement.appendChild(row);
}
