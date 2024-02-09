const BASE_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

const msg = document.querySelector(".msg");



// for(code in countryList){
//     console.log(code);
// }
// for(let select of dropdowns){

// }

for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if(select.name==="from" && currCode==="USD"){
        newOption.selected="selected";
      }
      if(select.name==="to" && currCode==="INR"){
        newOption.selected="selected";
      }

      select.append(newOption);
    }
  
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });
  }

const updateFlag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img= element.parentElement.querySelector("img");
    img.src=newSrc;

}

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();

    let amt=document.querySelector(".amount input");
    let amtval=amt.value;

    if(amtval ==="" || amtval === 0 ||amtval < 1 ){
        alert("Please enter a valid amount greater than zero!");
        amtval=1;
        amt.value="1";

    }
    console.log(fromCurr.value);



    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response= await fetch(URL);

    let data = await response.json();
    let rate=data[toCurr.value.toLowerCase()]
    console.log(rate);
    console.log(amt);
    let final= rate* amt.value;
    console.log(final);
    msg.innerText = `${amt.value} ${fromCurr.value} = ${parseFloat(final).toFixed(2)} ${toCurr.value}`;

});