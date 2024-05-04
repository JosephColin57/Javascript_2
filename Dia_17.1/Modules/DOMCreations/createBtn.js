import { getKoders, postKoder, editKoderById, deleteKoderById } from "../api/koderApi.js";

export { saveKoderBtn, handleSaveKoderClick, saveChangesBtn, handlesaveChangesBtn }

const getKodersData = async () => {
  let kodersArray =  await getKoders()
  return kodersArray
}

const getPostKoder = async (koderObject) => {
  let post = await postKoder(koderObject);
  return post
}

const getEditKoderById = async (koderKey, newData) => {
  let edit = await editKoderById(koderKey, newData);
  return edit
}

const getDeleteKoderById = async (koderObject) => {
  let deleteID = await deleteKoderById(koderObject);
  return deleteID
}

  let saveKoderBtn = () => document.getElementById("save-koder-btn");


/*Registro de la modal de edición*/
const editModal = new bootstrap.Modal(
  document.getElementById("edit-koder-modal")
);

const handleSaveKoderClick = async () => {
  let inputs = document.querySelectorAll("#koder-form input");

  let koderObject = {};

  inputs.forEach(({ name, value }) => {
    koderObject[name] = value;
  });
  console.log(koderObject);
  getPostKoder(koderObject);
  getKodersData();
  inputs.forEach((input) => (input.value = ""));
};

let saveChangesBtn = () => document.getElementById("save-changes-btn");

/*Botón de guardar cambios*/
const handlesaveChangesBtn = async (event) => {
  console.log("guardando cambios");
  let key = event.target.dataset.koderKey;

  console.log(key);
  let editFields = document.querySelectorAll("#edit-koder-form input");
  let editedKoder = {};

  editFields.forEach(({ name, value }) => {
    editedKoder[name] = value;
  });

  getEditKoderById(key, editedKoder);
  getKodersData();
  editModal.hide();
  console.log(editedKoder);
};

/*Botón de editar koder*/
let editBtn = document.createElement("button");
editBtn.classList.add("btn", "btn-primary", "text-center");
editBtn.innerHTML = "&#x270E;";

editBtn.addEventListener("click", () => {
  document.getElementById("edit-name").value = name;
  document.getElementById("edit-lastname").value = lastname;
  document.getElementById("save-changes-btn").dataset.koderKey = key;
  editModal.show();
});

/*Botón de eliminar koder*/
let deleteBtn = document.createElement("button");
deleteBtn.classList.add("btn", "btn-danger", "text-center");
deleteBtn.innerText = "X";

deleteBtn.addEventListener("click", async () => {
  console.log(key);
getDeleteKoderById(key);
getKodersData();
});