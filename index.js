let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let myRequest = new XMLHttpRequest();

    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    myRequest.onload = () => {
      let animals = JSON.parse(myRequest.responseText);
      renderHTML(animals)
    }

    myRequest.send();
})

let renderHTML = (animals) => {
   console.log(animals)
}
