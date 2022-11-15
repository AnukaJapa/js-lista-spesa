/* //^ESERCIZIO LISTA SPESA
Data una lista della spesa già compilata nel vostro codice, stampare in console gli elementi della lista individualmente, prima con un ciclo for, poi con un ciclo while.

Quando le stampe in console sono corrette, stampare gli elementi in un elenco puntato in HTML, utilizzando uno dei due cicli scritti al punto precedente.

&Bonus:
Aggiungere alla pagina un campo di input testuale e un pulsante “aggiungi”: l’utente inserisce nell’input un prodotto da acquistare e quando clicca sul pulsante, il testo viene aggiunto alla lista.

&Super Bonus:
Aggiungere a fianco ad ogni elemento della lista un pulsante “elimina”: quando l’utente clicca su uno di questi pulsanti, l’elemento corrispondente viene rimosso dalla lista
*/ 

let expenses = ["pizza", "farina", "yogurt", "limone", "mele", "latte", "mozzarella", "avocado", "pomodorini"];

//* stampare gli elementi della lista con for loop
for(let i =0; i<expenses.length; i++){
    console.log(expenses[i]);
}

//*stampare gli elementi della lista con while loop
let i = 0;
while(i<expenses.length){
console.log(expenses[i]);
i++
}

//*stampare gli elementi della lista in html, utilizzando uno dei cicli (for o while loop)

let container = document.querySelector(".container");
let orderedList = document.createElement("ol");
container.appendChild(orderedList);

for(let i =0; i<expenses.length; i++){
    let newListElement = document.createElement("li")
    let divForElementText = document.createElement("div");//aggiunto per css
    divForElementText.textContent = `${i+1}. ${expenses[i]}`; //aggiunto per css 
    newListElement.appendChild(divForElementText);
    orderedList.appendChild(newListElement);

    //&SUPER BONUS: aggiungere anche bottone di rimozione dell'elemento
    let newButton = document.createElement("button");
    newButton.textContent="-";
    newListElement.appendChild(newButton);
    
    newButton.addEventListener("click", ()=> {
        newListElement.remove();
    })
}

//* BONUS: aggiungere alla pagina un campo di input testuale e un pulsante “aggiungi”: l’utente inserisce nell’input un prodotto da acquistare e quando clicca sul pulsante, il testo viene aggiunto alla lista.
let button = document.getElementById("addExpensesButton");
button.addEventListener("click", () => {

    let inputForListItem = document.getElementById("inputForListItem");
    let inputForListItemValue = inputForListItem.value;
//aggiunti all'array della lista questo elemento aggiunto da input
    expenses.push(inputForListItemValue);

    let newListElement = document.createElement("li");
    let divForElementText = document.createElement("div");//aggiunto per css
    divForElementText.textContent = `${++i}. ${inputForListItemValue}`;
    newListElement.appendChild(divForElementText);
    orderedList.appendChild(newListElement);

    //&questa parte è per SUPER BONUS per aggiungere anche bottone di rimozione - quando aggiunge elemento nella lista :
    let newButton = document.createElement("button");
    newButton.textContent="-";
    newListElement.appendChild(newButton);
    newButton.addEventListener("click", ()=> {
        newListElement.remove();
            });
})




