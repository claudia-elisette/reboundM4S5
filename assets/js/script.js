//función creadora de usuarios con datos protegidos
function User(name, job, email, phone, description){
    let _name = name;
    let _job = job;
    let _email = email;
    let _phone = phone;
    let _description = description;

    Object.defineProperties(this,{
        name:{
            get: function(){
                return _name;
            }
        },
        job:{
            get: function(){
                return _job;
            }
        },
        email:{
            get: function(){
                return _email;
            }
        },
        phone:{
            get: function(){
                return _phone;
            }
        },
        description:{
            get: function(){
                return _description;
            }
        }
    })
}


//escuchar evento y ejecutar función
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();

    //tomar datos desde formulario
    let userName = document.getElementById('name').value;
    let userJob = document.getElementById('job').value;
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;
    let userDescription = document.getElementById('description').value;

    //crear usuario
    let myUser = new User(userName, userJob, userEmail, userPhone, userDescription)

    //crear variable HTML
        let userCard = `
        <div class="card">
            <div class="card__profile">
                <div class="card__img">
                    <img src="assets/img/avatar.png" alt="">
                </div>
                <div class="card__name">
                    ${myUser.name}
                </div>
                <div class="card__job">
                    ${myUser.job}
                </div>
            </div>
            <div class="card__info">
                <div class="card__title card__title--bb">Información</div>
                <div class="card__item">
                    <div class="card__title">Email</div>
                    <div class="card__text">${myUser.email}</div>
                </div>
                <div class="card__item card__item--small">
                    <div class="card__title">Phone</div>
                    <div class="card__text">${myUser.phone}</div>
                </div>
                <div class="card__item card__item--large">
                    <div class="card__title card__title--bb">Sobre Mi</div>
                    <div class="card__text">${myUser.description}</div>
            </div>
        </div>
        `
    //inyectar HTML
    document.getElementById('injectCard').innerHTML = userCard
    
    //borrar formulario
    document.getElementById('name').value = '';
    document.getElementById('job').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('description').value = '';

})