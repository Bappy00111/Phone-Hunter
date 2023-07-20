const loadPhones = async(suschFiled,dataLimet) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${suschFiled}`;
    const res = await fetch(url)
    const data = await res.json()
    showPhones(data.data,dataLimet)
   
}

const showPhones = (phones, dataLimet) =>{
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerText = " ";
    // display 20 phone only 
    const showAll = document.getElementById('show-all');
    if(dataLimet && phones.length > 10){
        phones = phones.slice(0,10)
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }

    // phones = phones.slice(0,3)
    
    // display no Phone found 
    const noPhone = document.getElementById('no-phone-message')
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }
    // display button all 
   
   


    // display all phone 
    phones.forEach(phone => {
        console.log(phone)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top p-5 rounded-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button onClick="loadPhoneDetels('${phone.slug}')" type="button" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `;
        phoneContainer.appendChild(div)
       
    });

    // stop loader spinner
    toggleSpinner(false)
}

const procesSusch = (dataLimet) =>{
    toggleSpinner(true)
    const suschFiled = document.getElementById('susch-filed').value;
    loadPhones(suschFiled,dataLimet)
    
}

// cleaar the inpute fild value 



//  handle Susch button click adn clear the inpute filed value
const buttonSusch = () =>{
    // start loader 
   procesSusch(10)
   document.getElementById('susch-filed').value = "";
    

}

// search inpute  filed key inter handler and clear the inpute filed value

document.getElementById('susch-filed').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        procesSusch(10)
        document.getElementById('susch-filed').value = "";
    }
});


// toggle spinner 
const toggleSpinner = isLoging =>{
    const loaderSection = document.getElementById('loader')
    if(isLoging){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

// not the best way show all 

const buttonShowAll = () =>{
    procesSusch();

}


// loadPhone Detels 
const loadPhoneDetels = async (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.data)

}


// loadPhones();