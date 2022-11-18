function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const para = document.createElement('p');
    para.innerText = "Hello Home";
    contact.appendChild(para);
    
    return contact;
}



export default loadContact;