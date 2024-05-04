const getKoders = async () => {
  
  let response = await fetch(
    "https://proyectonew-3bc5c-default-rtdb.firebaseio.com/koders/.json"
  );

  let koders = await response.json();
  console.log(koders);

  let keys = Object.keys(koders);
  console.log(keys);

  let kodersArray = keys.map((key) => {
    return { ...koders[key], key };
  });

  console.log(kodersArray);
  return kodersArray
};

const postKoder = async (koderObject) => {
  let response = await fetch("https://proyectonew-3bc5c-default-rtdb.firebaseio.com/koders/.json",
    {
      method: "POST",
      body: JSON.stringify(koderObject),
    }
  );
  let data = await response.json();
  console.log(data);
  return data
};

const editKoderById = async (koderKey, newData) => {
  let response = await fetch(
    `https://proyectonew-3bc5c-default-rtdb.firebaseio.com/koders/${koderKey}/.json`,
    {
      method: "PUT",
      body: JSON.stringify(newData),
    }
  );

  let data = await response.json();
  console.log(data);
  return data
};

const deleteKoderById = async (koderKey) => {
  let response = await fetch(
    `https://proyectonew-3bc5c-default-rtdb.firebaseio.com//koders/${koderKey}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  console.log(data);
  return data
};

export { getKoders, postKoder, editKoderById, deleteKoderById };