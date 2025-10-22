
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
      <div class="card-image-container">
                <img src="${contact.photo}" alt="Foto de ${contact.name}" class="card-photo img-thumbnail" />
            </div>

            <div class="card-content">
                <h3 class="card-title">${contact.name}</h3>
                
                <div class="contact-details">
                    <p class="contact-email">📧 ${contact.email}</p>
                    <p class="contact-phone">📞 ${contact.phone}</p>
                </div>

                <div class="card-actions">
                    <button class="btn btn-danger btn-remove-contact" data-index="${index}">
                        Remover Contato
                    </button>
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
