
console.log("bndex runs")

// const observer = new MutationObserver((mutationsList, observer) => {
//   console.log("is the observer on?");
//   const scmPlayer = document.querySelector('#player');
//   if (scmPlayer) {
//     scmPlayer.classList.add('music-player');
  
//     // Hitta elementet där du vill placera spelaren
//     const playerContainer = document.getElementById('player-container');
    
//     // Flytta spelaren till det specifika elementet
//     playerContainer.appendChild(scmPlayer);
//     console.log("are you running tho?");
//     observer.disconnect(); 
//     console.log(observer);
//   }
// });

// observer.observe(document.body, { childList: true, subtree: true });

 
const cloud = document.querySelector(".rain-box") 
 
const rainEffect = () => {

    const randomizer = () =>{
    return Math.floor(Math.random() * 1000);
    }

    const randomInterval = (max) => {
      return Math.floor(Math.random() * max);
    }

  
 // create a drop as a div, 
 // give it the css styling, 
 // give it a random starting position within its container
 // add it to DOM after a short random delay - i hope
    for(i = 0; i < 20; i++) {
        const drop = document.createElement("div");
        drop.classList.add("drop")
        drop.style.left = randomizer()+"px";
        drop.style.top = randomizer()+"px";
        setTimeout(() => cloud.appendChild(drop), randomInterval(2000));
        console.log( drop);
      }

  // do all the hassle again to make it look more seamless
      for(i = 0; i < 20; i++) {
        const drop = document.createElement("div");
        drop.classList.add("drop")
        drop.style.right = randomizer()+"px";
        drop.style.top = randomizer()+"px";
        setTimeout(() => cloud.appendChild(drop), randomInterval(2000));
        console.log( drop);
      }
    }


rainEffect();

// how do i make it flow seemlessly
// can i just hide their starting pos with a black square XD 



