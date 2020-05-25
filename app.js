document.getElementById("myBtn").addEventListener("click", api);
  
    function api() {
        fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            card.innerHTML = `
            <div class="card-deck">
            <div class="card">
            
            <img src="${data.results[0].picture.large}" class="card-img-top"></img>
            <div class="card-body">
            <h5 class="card-title"> Nombre: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h5>
            <p class="card-text">Genero: ${data.results[0].gender}</p>
            <p class="card-text">Edad: ${data.results[0].dob.age}</p>
            <p class="card-text">Localidad: ${data.results[0].location.country} ${data.results[0].location.city} </p>
            <p class="card-text">e-mail: ${data.results[0].email} </p>
            <p class="card-text">Celular: ${data.results[0].phone} </p>
            <p class="card-footer bg-transparent border-success">Registrado desde: ${data.results[0].registered.date} </p>
            </div>
            </div>
            
            <div class="card">
            <img src="${data.results[1].picture.large}" class="card-img-top"></img>
            <div class="card-body">
            <h5 class="card-title"> Nombre: ${data.results[1].name.title} ${data.results[1].name.first} ${data.results[1].name.last}</h5>
            <p class="card-text">Genero: ${data.results[1].gender}</p>
            <p class="card-text">Edad: ${data.results[1].dob.age}</p>
            <p class="card-text">Localidad: ${data.results[1].location.country} ${data.results[1].location.city} </p>
            <p class="card-text">e-mail: ${data.results[1].email} </p>
            <p class="card-text">Celular: ${data.results[1].phone} </p>
            <p class="card-footer bg-transparent border-success">Registrado desde: ${data.results[1].registered.date} </p>
            </div>
            </div>

            <div class="card">
            <img src="${data.results[2].picture.large}" class="card-img-top"></img>
            <div class="card-body">
            <h5 class="card-title"> Nombre: ${data.results[2].name.title} ${data.results[2].name.first} ${data.results[2].name.last}</h5>
            <p class="card-text">Genero: ${data.results[2].gender}</p>
            <p class="card-text">Edad: ${data.results[2].dob.age}</p>
            <p class="card-text">Localidad: ${data.results[2].location.country} ${data.results[2].location.city} </p>
            <p class="card-text">e-mail: ${data.results[2].email} </p>
            <p class="card-text">Celular: ${data.results[2].phone} </p>
            <p class="card-footer bg-transparent border-success">Registrado desde: ${data.results[2].registered.date} </p>
            </div>
            </div>

            </div>
      
            `
        })
    } 
    


