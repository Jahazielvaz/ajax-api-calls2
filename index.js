let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let myRequest = new XMLHttpRequest();

    myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');

    myRequest.onload = () => {
      let animals = JSON.parse(myRequest.responseText);
      console.log(animals[0])
    }

    myRequest.send();
})
