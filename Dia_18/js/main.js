// guardar en objeto
let createBtnPost = document.getElementById("save-post")

/*Registro de la modal de edición*/
const editModal = new bootstrap.Modal(
    document.getElementById("edit-post-modal")
  );

createBtnPost.addEventListener("click", async (event) => {
    event.preventDefault()

    let fields = document.querySelectorAll("#post-form input")

    let blogObject = {}

    fields.forEach((field) => {
        let key = field.name
        let value = field.value
        blogObject[key] = value
        // blogObject[field.name] = field.value acortando codigo
    })
    await saveEntry(blogObject)
})

// Guardar en base de datos
const saveEntry = async (object) => {
    let response = await fetch (
      `https://blogentrys-default-rtdb.firebaseio.com/blogEntries/.json`,
      {
        /*Qué método voy a usar?*/
        method: "POST",
        /*Qué es lo que voy a enviar*/
        body: JSON.stringify(object),
      }
    );
    let data = await response.json();
  };

// leer posts
const getPosts = async () => {
    let response = await fetch(
        'https://blogentrys-default-rtdb.firebaseio.com/blogEntries/.json'
    )

    let posts = await response.json()

    let keys = Object.keys(posts)

    let postsArray = keys.map((key) => {
        return {...posts[key], key}
    })

    console.log(postsArray)

}

// modificar post
const editPost = async (postKey, newData) => {
    let response = await fetch(
        `https://blogentrys-default-rtdb.firebaseio.com/blogEntries/${postKey}.json`,
        {
            method: "PUT",
            body: JSON.stringify(newData),
        }
    )

    let data = await response.json()
}

// Eliminar post
const deletePost = async (postKey) => {
    let response = await fetch(
        `https://blogentrys-default-rtdb.firebaseio.com/blogEntries/${postKey}.json`,
        {
            method: "DELETE",
        }
    )
    let data = await response.json()
}

let saveChangesBtn = document.getElementById("save-changes-btn")

saveChangesBtn.addEventListener("click", async (event) => {
    console.log("guardando cambios")
    let key = event.target.dataset.postKey

    let editFields = document.querySelectorAll("#edit-post-form input")
    let editpost = {}

    editFields.forEach((field) => {
        let key = field.name
        let value = field.value
        editpost[key] = value
    })

    await editPost(key, editpost)
    await getPosts()
    editModal.hide()
})
 


getPosts()
// se engará de pedir información a la base de datos

