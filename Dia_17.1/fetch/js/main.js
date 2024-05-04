import { getKoders } from "../../Modules/api/koderApi.js";

import { printKoders  } from "../../Modules/DOMCreations/DOMCreateElement.js"

import {saveKoderBtn, handleSaveKoderClick, saveChangesBtn, handlesaveChangesBtn} from "../../Modules/DOMCreations/createBtn.js"


const getKodersData = async () => {
  let kodersArray =  await getKoders();
  printKoders(kodersArray, "koders-list");
}

getKodersData();

document.addEventListener('DOMContentLoaded', () => {
  const getsaveKoderBtn = saveKoderBtn();
  getsaveKoderBtn.addEventListener('click', handleSaveKoderClick
)})

document.addEventListener('DOMContentLoaded', () => {
  const getsaveChangesBtn = saveChangesBtn();
  getsaveChangesBtn.addEventListener('click', handlesaveChangesBtn
)})
