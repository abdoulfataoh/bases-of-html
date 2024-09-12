// alert("Hello Javascript");

function form_processing(event){
    let message = document.getElementById('message');
    let target = event.target;
    target.style.display = 'none';
    event.preventDefault();
    message.innerHTML = 'Merci pour votre Inscription !'
    message.style.color = 'green';
    message.style.display = 'block';
}


function process_firtname(event) {
    let target = event.target;
    value = target.value;
    value = value.trim();
    value = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();
    target.value = value;
}


function main()
{
    let title = document.querySelector('h2');
    title.innerHTML = 'Start with JS';
    title.style.color = 'red';
    
    let form = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', form_processing);

    let first_name  = document.querySelector('input[name="first_name"]');
    first_name.addEventListener('change', process_firtname);
}


document.addEventListener('DOMContentLoaded', main);
