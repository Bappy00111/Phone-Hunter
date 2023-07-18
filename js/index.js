const loadPhones = async() =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    const res = await fetch(url)
    const data = await res.json()
    showPhones(data.data)
    
}

const showPhones = (phones) =>{
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone => {
        console.log(phone.phone_name)
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
}

loadPhones();