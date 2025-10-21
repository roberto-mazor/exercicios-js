function addContact(name, phone, photo) {

getElementById('btn-add-contact').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const photo = document.getElementById('photo').value;

    addContact(name, email, phone, photo);
    document.getElementById('contact-form').reset();
}); 
    const contactList = document.getElementById('contact-list');

    const contactCard = document.createElement('div');
    contactCard.className = 'card mb-3';
    contactCard.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${photo}" class="img-fluid rounded-start" alt="${name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">${phone}</p>
                    </p>
                </div>
            </div>
        </div>
    `;

    contactList.appendChild(contactCard);
}