const username = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const calculate = document.getElementById('btn-calculate');
const predict =document.getElementById('btn-predict')
const resultNote = document.getElementById('resultNote');

calculate.addEventListener('click', calculateNote);
predict.addEventListener('click', predictNote);

function calculateNote(event) {
    event.preventDefault(); 

    let name = username.value;

    let nota1 = Number(note1.value);
    let nota2 = Number(note2.value);
    let nota3 = Number(note3.value);

    let finalNote = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4);

    
    if (finalNote < 3.5) {
        resultNote.textContent = `Sr(a)(e)(i) ${name}, ha perdido la materia.${finalNote}`;
        resultNote.style.color = "black";
    } else if (finalNote >= 3.5 && finalNote <= 4.5) {
        resultNote.textContent = `Sr(a)(e)(i) ${name}, ha ganado la materia.${finalNote}`;
        resultNote.style.color = "orange";
    } else {
        resultNote.textContent = `Sr(a)(e)(i) ${name}, su nota es sobresaliente.${finalNote}`;
        resultNote.style.color = "green";
    }
}

function predictNote() {
    let nota1 = Number(note1.value);
    let nota2 = Number(note2.value);

    
    let requiredNote3 = (3.5 - (nota1 * 0.3 + nota2 * 0.3)) / 0.4;

    
    note3.value = Math.max(0, requiredNote3).toFixed(2); 
}