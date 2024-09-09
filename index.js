
console.log("js runs")

// make it non clickable if input box is null or empty

const formEl = document.querySelector("#text-area");
const guestbookEl = document.querySelector(".guestbook-box");
const btn = document.querySelector("#btn");


const appendValue = (e)=> {
  e.preventDefault();
 const div = document.createElement("div")
 div.innerHTML = `<p>message: ${formEl.value}</p><hr style="width:50%; margin-left:0">` ;

 guestbookEl.appendChild(div)
  formEl.value = '';
  }
  
 btn.addEventListener('click', appendValue);
 

// create a drop, 
//use math random to place them on X axis using absolute and left.
// how do i give them a position `drop.style.left:${Xplacment};`
// give starting position with math.random()
// create a css-class for animation from x - 100% of height or something. 
// add animation for fading in and out before traveling full length. 
// create a loop that creates raindrops with a random timeInterval to make them spawn randomly
// create a array or something to keep track of max drops and remove them from document after raining. 



