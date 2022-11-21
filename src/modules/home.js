function loadHome() {
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('homeContainer');

    const intro = document.createElement('div');
    intro.classList.add('intro');

    const hours = document.createElement('div');
    hours.classList.add('hours');

    const location = document.createElement('div');
    location.classList.add('location');

    //Making the Intro;
    const introText = "Waddles' Cat Cafe, is the best cafe in the city";
    const introTextWrap = document.createElement('p');
    introTextWrap.innerText = introText;
    intro.appendChild(introTextWrap);

    //Making the Hours Open Info;
    const hoursText = `
    We are Open:
    Monday: Closed
    Tuesday: 9am-9pm
    Wednesday: 9am-9pm
    Thursday: 9am-12am
    Friday: 9am-12am
    Saturday: 9am-12am
    Sunday: 9am-9pm`;

    const hoursTextWrap = document.createElement('p');
    hoursTextWrap.innerText = hoursText;
    hours.appendChild(hoursTextWrap);

    //Making the Location Info;
    const locationText = `
    222-2-8 Siamese Street 
    Persian Avenue 
    Puspin City 
    Philippines`
    const locationTextWrap = document.createElement('p');
    locationTextWrap.innerText = locationText;
    location.appendChild(locationTextWrap);


    //Appending all the stuff to the Container
    homeContainer.appendChild(intro);
    homeContainer.appendChild(hours);
    homeContainer.appendChild(location);

    
    
    return homeContainer;
}

export default loadHome;