const Factory = function(){}

Factory.prototype.createPlayer = ({ name, type, playerNumber}) => {
    return new Player({ name, type, playerNumber })
}

Factory.prototype.createButton = ({ color, text }) => {
    const button = document.createElement('button');
    button.textContent = text;

    switch(color){
        case 'green': button.classList.add('button', 'buttonGreen'); break;
        case 'blue': button.classList.add('button', 'buttonBlue'); break;
        case 'red': button.classList.add('button', 'buttonRed'); break;
        case 'white': button.classList.add('button', 'buttonWhite'); break;
        case 'gray': button.classList.add('button', 'buttonGray'); break;
    }

    return button;
}
