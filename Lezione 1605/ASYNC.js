const fetchData = async () => {
    try { // in try eseguiamo fetch
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         // dobbiamo passarmi il link a cui fare la chiamata ed un oggetto 
         // gli stiamo dicendo di fare una chiamata get a questo link
         const result = await response.json(); //cosi si accedono i dati 
         console.log(response);
    } catch(error) {
        console.log(error)
    } finally {
        console.log("end")
    } 
} 

fetchData()