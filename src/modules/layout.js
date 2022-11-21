import loadHome from "./home";
import loadContact from "./contact";

const layout = (() => {

    const createPage = () =>{
        const content = document.getElementById('content');
        const navMenu = createNav();
        const body = createElement('div', 'body')

        content.appendChild(navMenu);
        content.appendChild(body);
    }

    const loadFunction = () => {
        const home = document.getElementById("Home");
        const contact = document.getElementById("Contact")
        const body = document.querySelector(".body")
        home.addEventListener('click', ()=>{
            clearBody()
            body.appendChild(loadHome());
        });
        contact.addEventListener('click', ()=>{
            clearBody()
            body.appendChild(loadContact())
        });

   }

    const createNav = () =>{
        const navBar = document.createElement('div');
        navBar.classList.add('navBar');
        const home = createNavMenu('Home');
        const menu = createNavMenu('Menu');
        const contact = createNavMenu('Contact');


        navBar.append(home);
        navBar.append(menu);
        navBar.append(contact);


        return navBar;
    }

    const createNavMenu = (name) =>{
        let newButton = document.createElement('button');
        newButton.classList.add('button');
        newButton.id = name;
        newButton.innerText = name;

        return newButton;
    }

    const clearBody = () =>{
        const body = document.querySelector('.body');
        body.innerHTML = "";
    }

    const createElement = (element, classname) =>{
        const body = document.createElement(element);
        body.classList.add(classname)

        return body;
    }

    const createFooter = () =>{

    }

    return {createPage, loadFunction};
})();

export default layout;