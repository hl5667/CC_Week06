// let bg = [0, 0, 0]

// //method 1
// function callFirst() {
//   console.log("hello, delayed function")
//   bg = [50, 100, 100]
// };
// setTimeout(callFirst, 2000)


// //method 2 
// setTimeout(
//   function() {
//       console.log("hello, again!")
//   bg = [100, 100, 100]
//   }, 4000);

// //method 3 - arrow syntax
// setTimeout( () => console.log ("hello, yet again!"), 6000)

// setTimeout( () => {
//   console.log ("hello, again and again!");
//   bg = [200,100,200]
// }, 9000)


// //these 3 work the same, just different ways of writing it. 
// function setup() {
//   createCanvas(600, 600)
// }

// function draw() {
//   background(bg)
// }





// NEW CODE STARTS HERE 

let imgURL
let myImage 

function setup() {
  createCanvas(600, 600);
  apiRequest();
}

function draw() {
  background(100);
  if(myImage != undefined) {
  image(myImage, 0, 0)  
  }
  
}

async function apiRequest() { 
  let request = await fetch
  ("https://dog.ceo/api/breeds/image/random")

  console.log(request)

  let data = await request.json()
  console.log(data)

  imgURL = data.message 
  console.log(imgURL)

  myImage = loadImage(imgURL)
}









// NEW NEW CODE STARTS HERE

// let maxTemps
// let minTemps

// function setup() {
//   createCanvas(600, 600);
//   apiRequest();
// }

// function draw() {
//   background(100);
//   if(myImage != undefined) {
//   image(myImage, 0, 0)  
//   }

//   "!=" is un-equal

  // if (maxTemps != undefined){
  //   let h = map(maxTemps[0],0,100,height, 0)
  //   rect(0, h,100, 100) 
  // }


//   if(maxTemps != undefined) {
//     for(let i = 0; i < maxTemps.length; i++) {
//       let h = map(maxTemps[i],0,100,height, 0)
//       rect(i*100, h,100, 100)
//     }
//   }

//   if(minTemps != undefined) {
//     for(let i = 0; i < minTemps.length; i++) {
//       let h = map(minTemps[i],0,100,height, 0)
//       rect(i*100, h,100, 100)
//     }
//   }

  


  
// }

// async function apiRequest() { 
//   let request = await fetch
//   ("https://api.open-meteo.com/v1/forecast?latitude=-18&longitude=178&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FAnchorage")

//   console.log(request)

//   let data = await request.json()
//   console.log(data)

//   let dailyTemps = data.daily;
//   console.log(dailyTemps)

//   maxTemps = dailyTemps.temperature_2m_max;
//   console.log(maxTemps)

//   minTemps = dailyTemps.temperature_2m_min;
//   console.log(minTemps)





//   imgURL = data.message 
//   console.log(imgURL)

//   myImage = loadImage(imgURL)
// }