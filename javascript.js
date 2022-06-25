const container=document.querySelector('.slider');
const linkss=document.querySelectorAll('.slider-link h2');

linkss.forEach((e,index)=>{
    e.addEventListener('click',()=>{
        container.style.transform=`translateX(${-100*index}vw)`;
    })
})

/*const buyNow=document.querySelector('.items button');*/
const buyNow=document.querySelectorAll('.items button');
const close=document.querySelector('.close');
const getIty=document.querySelectorAll('.buy');
const payment=document.querySelector('.payment');
const submit=document.querySelector('.submit button');
//console.log(submit);
//console.log(getIty);

getIty.forEach((e)=>{
  e.addEventListener('click',()=>{
      payment.style.display='flex';
  })
})


buyNow.forEach((e)=>{
e.addEventListener('click',()=>{
    payment.style.display='flex';
})
});

close.addEventListener('click',()=>{
    payment.style.display='none';
});

//submit event
submit.addEventListener('click',()=>{
    alert('you are commit to purchase');
    payment.style.display='none';
})