let btn = document.getElementById('btn');
let animalInfo = document.getElementById('animal-info');
let counter = 1;

btn.addEventListener('click', () => {
    let myRequest = new XMLHttpRequest();

    myRequest.open('GET', `https://learnwebcode.github.io/json-example/animals-${counter}.json`);

    myRequest.onload = () => {
      let animals = JSON.parse(myRequest.responseText);
      renderHTML(animals)
    }

    myRequest.send();

    counter++
    if(counter > 3){
      btn.classList.add('hide')
    }
})

let renderHTML = (data) => {
  let htmlString = ''
  for(let i = 0; i < data.length; i++){
    htmlString += `<p> ${data[i].name} is a ${data[i].species}. </p> `;
  }

   animalInfo.insertAdjacentHTML('beforeend', htmlString)
}
