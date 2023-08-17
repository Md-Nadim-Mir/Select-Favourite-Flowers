
 let count=0;
 let cost=0;
 let offer_price_amount=0;

// button selction 

let buttons=document.getElementsByClassName('a');

for(let button of buttons){

    button.addEventListener('click',function(event){

        count++

        flowers_name=event.target.parentNode.parentNode.childNodes[1].innerText;

        let flowers_price=event.target.parentNode.parentNode.childNodes[3].innerText.split(" ")[3];

        let flowerPrice=parseFloat(flowers_price)

        cost=cost+flowerPrice;
        

        let flower_added=document.getElementById('flower_added');

        let div=document.createElement('div')

        div.innerHTML=`
        <div>

           <p><span>${count}</span> . <span> ${flowers_name} </span> Price: <span>${flowers_price}</span></p>

         </div>`

        flower_added.appendChild(div);

        event.target.setAttribute('disabled',true);
     


      let a=document.getElementsByClassName('flower-item-count');
      
      for(let aa of a){

        aa.innerText=`${count}`

      }


      let all_flower_prices=document.getElementById('all-flowers-price');
      all_flower_prices.innerText=`${cost}`
      


      // offers calculate

      
      let offer_prices=document.getElementsByClassName('offer-price');

      for(let offer_price of offer_prices){

        if(count==2){
 
          offer_price_amount=1;
          offer_price.innerText=offer_price_amount;   
    
         }
    
         else if(count==3){
    
          offer_price_amount=2;
          offer_price.innerText=offer_price_amount;
    
         }
    
         else if(count==4){
    
          offer_price_amount=4;
          offer_price.innerText=offer_price_amount;
    
         }
    
         else if(count==5){
    
          offer_price_amount=6;
          offer_price.innerText=offer_price_amount;
    
         }
    
         else if(count==6){
    
          offer_price_amount=8;
          offer_price.innerText=offer_price_amount;
    
         }
    
         else if(count==7){
    
          offer_price_amount=10;
          offer_price.innerText=offer_price_amount;
    
         }
    
         else if(count==8){
    
          offer_price_amount=12;
          offer_price.innerText=offer_price_amount;
    
         }
    
         else if(count==9){
    
          offer_price_amount=15;
          offer_price.innerText=offer_price_amount;
    
         }
    
    
         else {
    
          offer_price_amount=0;
          offer_price.innerText=offer_price_amount;
    
         }


      }

      let net_price=document.getElementById('net_offer_price');
      net_price.innerText=`${cost}`-`${offer_price_amount}`;
     
      


    })

}



let net_price_amount=0;




// calculate total 

document.getElementById('calculate-total').addEventListener('click',function(event){



       let net_offer_price_string=document.getElementById('net_offer_price').innerText;
       
       let net_offer_price=parseFloat(net_offer_price_string)
       
       
  

       let insentiveString=document.getElementById('insentive').value;
       let insentive=parseFloat(insentiveString);
       

       if(isNaN(insentive)){

        alert('Please input insentive parcentage')

       }

       else {
 
            let final_amount= Math.ceil((net_offer_price-(net_offer_price * (insentive/100))).toFixed(2));

            document.getElementById('total-final-price').innerText=final_amount;
       }
})








