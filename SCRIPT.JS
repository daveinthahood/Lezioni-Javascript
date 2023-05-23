const $table = document.querySelector("#table"); // abbiamo preso l'elemento
const $prev = document.querySelector("#prev");
const $next = document.querySelector("#next");

// Dove gestiamo i dati?
//dentro lo state

const state = {
  posts: [], //inizializziamo questo parametro
  _posts : [], // copia di cache 
  paginationInfo:{
    page:1,
    totalPages:1,
    limit:10, //elementi che vogliamo in pagina
    hasPrevPages: false, // pagina precedente
    hasNextPages: false, // pagina successiva
  }  
};

document.addEventListener("click", (event) => {
  //
  const target = event.target;
  if (target.classList.contains("remove_row")) {
    const id = target.dataset.id;
    console.log(id);
    state.posts = state.posts.filter((post) => post.id != id);
    renderHTML();
  }
});

// creiamo un arrow function asincrona
const fetchData = async () => {
  // mettiamo il blocco try catch
  try {
    //dentro il try facciamo una chiamata
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (response.ok) {
        const data = await response.json()
      //questo è un controllo // bisogna aspettare la risposta
      state.posts = data;
      state._posts = data;
    } else {
      console.log(response);
    } // abbiamo preso i dati dall'esterno e salvati nello state
  } catch (error) {
    console.log(error);
  }
};

const manipulateData = () => {
    const startIndex = state.paginationInfo.limit * (state.paginationInfo.page - 1);
    state.posts = [...state._posts].splice(startIndex, state.paginationInfo.limit) // copia di array 
    state.paginationInfo.totalPages = math.ceil(state._posts.length / state.paginationInfo.limit);
    state.paginationInfo.hasPrevPages = state.paginationInfo.page > 1;
    state.paginationInfo.hasNextPages = state.paginationInfo.page < state.paginationInfo.limit;
    
    if (!state.paginationInfo.hasNextPages) {
        $next.setAttribute("disabled", true) 
    } else {
        $next.removeAttribute("disable")
    }

    if (!state.paginationInfo.hasPrevPages) {
        $prev.setAttribute("disabled", true) 
    } else {
        $prev.removeAttribute("disable")
    }
}


const getData = async () => {
    await fetchData();
    manipulateData();
}
// funzione che reindirizza l'html

const generateTemplateHTML = (post) => {
  // passiamo l'oggetto che genera l'html
  return `
        <tr> 
            <td> ${post.id} </td> 
            <td> ${post.userId}</td> 
            <td> ${post.title}</td> 
            <td> ${post.body}</td> 
            <td>
                <button class="remove_row" data-id="${post.id}"> delete </button> 
            </td> 
        </tr>
    `;
};

const renderHTML = () => {
  const HTML = state.posts.map((post) => generateTemplateHTML(post)).join(""); // callback di map //elemento nel nostro array
  // facciamo ritornare una sola stringa con join
  $table.innerHTML = HTML;
};



const setEventListner = () => { // somma uno alla pagina, manipola i dati e poi renderizza 
    $next.addEventListener("click", () => {
        state.paginationInfo.page +=1;
        manipulateData();
        renderHTML();
    })
    $prev.addEventListener("click", () => {
        state.paginationInfo.page -=1;
        manipulateData();
        renderHTML();
    })
}






const init = async () => {
  await getData();
  renderHTML();
  setEventListner();
};

init(); //
