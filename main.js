let showbutton = document.querySelector('#showButton');
let addbutton = document.querySelector('#addButton');
let editbutton = document.querySelector('#editButton');
let deletebutton = document.querySelector('#deleteButton');
let nameinput = document.querySelector('#nameInput');
let numberinput = document.querySelector('#numInput');
let container = document.querySelector('.container');





const rubriaca = {
    lista_contatti: [
        { namev: `Dustin`, numv: 33333333 },
        { namev: `Alice`, numv: 44444444 }
    ],

    mostracontatti: function() {
        this.lista_contatti.forEach((contatto) => {
            let div = document.createElement('div');
            div.classList.add('container');
            div.innerHTML = `<p> ${contatto.namev}: ${contatto.numv}</p>`;
            container.appendChild(div);
        });
    },

    aggiungicontatto: function(newname, newnumber) {
        this.lista_contatti.push({ namev: newname, numv: newnumber });
    },

    rimuovicontatto: function(name) {
    let filtered = this.lista_contatti.filter((contatto) => contatto.namev !== name);
    this.lista_contatti = filtered;
    },

    modificacontatto: function(name, newnumber) {
        this.lista_contatti.forEach((contatto) => {
            if (contatto.namev === name) {
                contatto.numv = newnumber;
            }
        });
    }

};

let check = false;
showbutton.addEventListener('click', () => {
    
    if(check == false){
    rubriaca.mostracontatti();   
     check = true;
        showbutton.innerHTML = "Nascondi";

    }else if(check == true){
        check = false;
        showbutton.innerHTML = "Mostra";
        container.innerHTML = ``;
    }

})

addbutton.addEventListener('click', () => {
    if (nameinput.value != "") {
        rubriaca.aggiungicontatto(nameinput.value, numberinput.value);
        nameinput.value = ``;
        numberinput.value = ``;
    }
});

deletebutton.addEventListener('click', () => {
    if (nameinput.value != "") {
        rubriaca.rimuovicontatto(nameinput.value);
        nameinput.value = ``;
    }
})
editbutton.addEventListener('click', () => {
    if (nameinput.value != "") {
        rubriaca.modificacontatto(nameinput.value, numberinput.value);
        rubriaca.mostracontatti();
        nameinput.value = ``;
        numberinput.value = ``;
    }
});