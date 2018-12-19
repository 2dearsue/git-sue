console.log(`//////////////////////////////////////////`);

const imageNames = [`saraHerranz1`, `saraHerranz4`, `saraHerranz1`];
const button = document.querySelector(`button:nth-of-type(1)`);
const container = document.querySelector(`#container`);

let bringImages = array => {
  let promiseImages = [];

  for (imageName of array) {
    let url = `../img/${imageName}.jpeg`;
    let imagePromise = new Promise((resolve, reject) => {
      resolve(fetch(url));
    })
    promiseImages.push(imagePromise);
  }
  console.log(promiseImages);

  return Promise.all(promiseImages);
}

let showImage = async ev => {
  let responses = await bringImages(imageNames);
  let counter = 0;

  let myInterval = setInterval(() => {
    if (counter === responses.length - 1) {
      clearInterval(myInterval);
    }

    let newImage = document.createElement(`IMG`);
    newImage.src = responses[counter].url;
    container.appendChild(newImage);
    counter++;
  }, 200)

}

button.addEventListener(`click`, showImage);


  //
  // let makeAllRequestsSimultaneously = collectionOfPhotos => {
  //
  //   let allPhotosPromises = [];
  //
  //   for (photo of collectionOfPhotos) {
  //     let url = `../img/${title}.jpeg`;
  //
  //     let promisePhoto = new Promise ((resolve, reject) => {
  //       resolve(fetch(url));
  //         })
  //
  //     allPhotosPromises.push(promisePhoto);
  //   }
  //   console.log(allPhotosPromises);
  //   return Promise.all(allPhotosPromises);
  // }
  //
  //
  //   let getPhoto = async ev => {
  //     ev.preventDefault();
  //     let photos = allPhotosPromises.split(`-`);
  //     try {
  //       let allResponses = await makeAllRequestsSimultaneously(photos);
  //       console.log(allResponses);
  //
  //       let imageSource = response.url;
  //       let image = document.createElement(`IMG`);
  //       image.src = imageSource;
  //       document.body.appendChild(image);
  //     } catch (e) {
  //       console.warn(e);
  //     }
  //   }
