const loadPhones = async(suschFiled) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${suschFiled}`;
    const res = await fetch(url)
    const data = await res.json()
    showPhones(data.data.slice(0,21))
   
}

const showPhones = (phones) =>{
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.innerText = " ";
    // display 20 phone only 
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
        </div>
      </div>
        `;
        phoneContainer.appendChild(div)
       
    });

    // stop loader spinner
    toggleSpinner(false)
}


//  handle Susch button click 
const buttonSusch = () =>{
    // start loader 
    toggleSpinner(true)
    const suschFiled = document.getElementById('susch-filed').value;
    loadPhones(suschFiled)
    

}

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




// loadPhones();