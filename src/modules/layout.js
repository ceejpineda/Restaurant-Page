import loadHome from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";
import Waddles from './waddles.png';

const layout = (() => {

    const createPage = () =>{
        const content = document.getElementById('content');
        const navMenu = createNav();
        const header = createElement('div', 'header');
        const body = createElement('div', 'body');
        const title = createTitle();
        
        header.appendChild(title);
        header.appendChild(navMenu);

        content.appendChild(header);
        content.appendChild(body);
    }

    const loadFunction = () => {
        const home = document.getElementById("Home");
        const contact = document.getElementById("Contact");
        const menu = document.getElementById("Menu");

        const body = document.querySelector(".body");

        home.addEventListener('click', ()=>{
            clearBody()
            body.appendChild(loadHome());
        });
        contact.addEventListener('click', ()=>{
            clearBody()
            body.appendChild(loadContact())
        });
        menu.addEventListener('click', ()=>{
            console.log("hehe")
            clearBody()
            body.appendChild(loadMenu())
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

    const createTitle = () =>{
        const title = createElement('div', 'title');

        const waddlesImage = new Image();
        waddlesImage.src = Waddles;
        waddlesImage.id = "waddlesImage";

        const h1Title = document.createElement('h1');
        h1Title.innerText = "Waddles' Cat Cafe";

        title.appendChild(waddlesImage);
        title.appendChild(h1Title);

        return title;
    }

    return {createPage, loadFunction};
})();

export default layout;