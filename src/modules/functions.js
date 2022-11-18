const functions = (() => {

    const load = () => {
         const buttons = document.querySelectorAll(".button");

         buttons.forEach(button => {
            button.addEventListener('click', () => {
                console.log(button.innerText);
            })
         });
    }
    return {load}
    
})();

export default functions;