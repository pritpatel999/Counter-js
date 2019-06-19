(function(){
    let counterValue = 0;

const counter = document.getElementById('counter');
const prevBtn = document.querySelector('.prevBtn');
const nextbtn = document.querySelector('.nextBtn');

nextbtn.addEventListener('click',function(){
    counterValue++;
counter.textContent = counterValue;
if(counterValue>0){
    counter.style.color = 'green';
}
else if(counterValue==0){
    counter.style.color = 'black';
}
})
prevBtn.addEventListener('click',function(){
    counterValue--;
counter.textContent = counterValue;
if(counterValue<0){
    counter.style.color = 'red';
}
else if(counterValue==0){
    counter.style.color = 'black';
}
})
})();










//==================================================OR===================================================




















// (function(){
//     let counterValue = 0;
// const buttons = document.querySelectorAll('.counterBtn');
// const counter = document.getElementById('counter');

// buttons.forEach(function(btn){
//     btn.addEventListener('click',function(event){
//         const value = event.target;
//         // console.log(value);
        
//         if(value.classList.contains('prevBtn')){
//             counterValue--;
//         }
//         else if(value.classList.contains('nextBtn')){
//             counterValue++;
//         }
//         counter.textContent = counterValue;
//    if(counterValue<0){
//    counter.style.color = "red";
//    }
//    else if(counterValue==0){
//        counter.style.color = "black";
//    }
//    else if(counterValue>0){
//        counter.style.color = 'green';
//    }
//     })
// })
// })();















