
    // Logica para adicionar um contato usando foreach e listagem na tela index.html, no final de cada contato um botão de remover contato

let objectContacts = [];

const btnAddContact = document.getElementById('btn-add-contact');

btnAddContact.addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const photoInput = document.getElementById('photo');
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const photo = photoInput.value;
    const newContact = {
        name: name,
        email: email,
        phone: phone,
        photo: photo
    };
    objectContacts.push(newContact);
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    photoInput.value = '';
    renderContacts();
});

function renderContacts() {
    const contactList = document.getElementById('contact-list');
    contactList.innerHTML = '';

    objectContacts.forEach(function(contact, index) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        contactItem.innerHTML = `
    <div class="card shadow-sm mb-4" style="width: 18rem;">
    <div class="card-body text-center">
        
        <img src="${contact.photo}" 
             alt="Foto de ${contact.name}" 
             class="rounded-circle img-thumbnail mx-auto d-block mb-3"
             style="width: 100px; height: 100px; object-fit: cover;"
             onerror="this.src='https://via.placeholder.com/100'" 
             />
        
        <h5 class="card-title">${contact.name}</h5>
        
        <div class="contact-details mb-3">
            <p class="card-text text-muted mb-1">
                <span class="me-2">📧</span>${contact.email}
            </p>
            <p class="card-text text-muted">
                <span class="me-2">📞</span>${contact.phone}
            </p>
        </div>
        
        <div class="card-actions">
            <button class="btn btn-danger w-100 btn-remove-contact" data-index="${index}">
                Remover Contato
            </button>
        </div>

    </div>
</div>
`;
        contactList.appendChild(contactItem);
    });

    const btnRemoveContact = document.querySelectorAll('.btn-remove-contact');
    btnRemoveContact.forEach(function(button) {
        button.addEventListener('click', function() {
            const index = button.getAttribute('data-index');
            objectContacts.splice(index, 1);
            renderContacts();
        });
    });
}
