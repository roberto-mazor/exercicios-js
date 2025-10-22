
    // Logica para adicionar um contato

let objectContacts = [];

function addContact(name, email, phone, photo) {
    const newContact = {
        id: objectContacts.length + 1,
        name: name,
        email: email,
        phone: phone,
        photo: photo
    };
    objectContacts.push(newContact);
    fnListar();
}

function fnSalvar() {
    document.getElementById('btn-add-contact').addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const photo = document.getElementById('photo').value;

        addContact(name, email, phone, photo);
        document.getElementById('contact-form').reset();
    });
}


function fnListar() {
    // Lógica para listar os contatos
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    objectContacts.forEach(contact => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center mb-2';
        li.innerHTML = '<img src="' + contact.photo + '" alt="Foto de ' + contact.name + '" class="rounded-circle me-3" width="50" height="50">' +
                       '<div><h5>' + contact.name + '</h5><p>' + contact.email + ' | ' + contact.phone + '</p></div>' +
                       '<button class="btn btn-danger btn-sm" onclick="fnExcluir(' + contact.id + ')">Excluir</button>';
        contactList.appendChild(li);
    });
}

function fnExcluir(id) {
    // Lógica para excluir um contato
    objectContacts = objectContacts.filter(contact => contact.id !== id);
    fnListar();
}

// Inicialização
fnSalvar();
fnListar();

