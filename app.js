let paragraphElement = document.querySelector('p');

function chageParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('Clicked!');
}

paragraphElement.addEventListener('click', chageParagraphText);

let inputElement = document.querySelector('input');

function reUserInput(){
    let enteredtText = inputElement.value;
    console.log(enteredtText)

}

// function reUserInput(Event){
//     let enteredtText = Event.data;
//     console.log(enteredtText)
// }

inputElement.addEventListener('input',reUserInput);