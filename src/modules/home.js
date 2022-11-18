function loadHome() {
    const home = document.createElement('div');
    home.classList.add('home');
    const para = document.createElement('p');
    para.innerText = "Hello Home";
    home.appendChild(para);
    
    return home;
}

export default loadHome;