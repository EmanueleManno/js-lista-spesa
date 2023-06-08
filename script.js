//PROVO A VEDERE SE FUNZIONA
console.log('JS');

//PREPARO LA LISTA DEGLI OGGETTI DA COMPRARE:
const items = ['Pane', 'Focaccia', 'Pizza', 'Piadina', 'Panino']

//STAMPIAMO IN PAGINA:
let shoppingList = '<ul>';

//GENERO GLI ELEMENTI DELLA LISTA BASANDOMI SUGLI OGGETTI:
let i = 0;
while(i < items.length) {
    shoppingList += `<li>${items[i]}</li>`
    i++;
}

//FINE DELLA LISTA:
shoppingList += '</ul>';

//CARICO NEL BODY:
document.body.innerHTML = shoppingList;