let cbbtn1 = document.getElementById('cbbtn1');
let cbObject1 = document.getElementById('cb-object1');


// SECTION 1
cbbtn1.addEventListener('click', () => {
  let myObj = {
    name: 'Jazzy',
    profession: 'Software Engineer'
  }

  objectSelector(myObj)
})

let objectSelector = (myObj) => {
  cbObject1.innerHTML = [myObj.name, myObj.profession];
}

//SECTION 2
let imgDisplay = document.getElementById('image-display');
let imgBtn = document.getElementById('img-btn');

imgBtn.addEventListener('click', () => {
  let images = ['https://www.sciencealert.com/images/2019-10/processed/planet-guts_1024.jpg', 'https://media.wired.com/photos/5a593a7ff11e325008172bc2/master/pass/pulsar-831502910.jpg', 'https://spacenews.com/wp-content/uploads/2018/05/24359364107_152b0152ff_k-879x485.jpg'];

  imgSelector(images);
})

let imgSelector = (images) => {
  let shifter = images.unshift();
  images.push(shifter)
  imgDisplay.setAttribute('src', images[0])
  console.log(images[0])
}
