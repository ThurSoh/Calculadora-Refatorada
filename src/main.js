const display = document.querySelector('#display');
const container = document.querySelector('#container');
const buttons = document.querySelector('#buttons')

console.log(buttons)

const calculatorButtons = {
    numbers: [
        { value: 7 },
        { value: 8 },
        { value: 9 },
        { value: 4 },
        { value: 5 },
        { value: 6 },
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 0 },
        { value: '.' }
    ],
    operations: [
        { value: '+' },
        { value: '-' },
        { value: '*' },
        { value: '/' }
    ],
    functions: [
        { label: 'C', value: 'clear' },
        { label: '=', value: 'equals' },
        { label: '⌫', value: 'backspace' }
    ]
};


function createButton(label) {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = label;
    return btn;
}

//Nova branch adicionada

function createDiv() {
    const div = document.createElement('div');
    div.classList.add('button-calc');

    return div;
}


function addButtons() {
    let currentDiv = createDiv();
    buttons.appendChild(currentDiv);

    let count = 0;

    // Adiciona números
    calculatorButtons.numbers.forEach(btn => {
        const newButton = createButton(btn.value);
        if (count > 0 && count % 4 === 0) {
            currentDiv = createDiv();
            buttons.appendChild(currentDiv);
        }
        currentDiv.appendChild(newButton);
        count++;
    });

    // Adiciona operações
    calculatorButtons.operations.forEach(btn => {
        const newButton = createButton(btn.value);
        if (count > 0 && count % 4 === 0) {
            currentDiv = createDiv();
            buttons.appendChild(currentDiv);
        }
        currentDiv.appendChild(newButton);
        count++;
    });

    // Adiciona funções
    calculatorButtons.functions.forEach(btn => {
        const newButton = createButton(btn.label);
        if (count > 0 && count % 4 === 0) {
            currentDiv = createDiv();
            buttons.appendChild(currentDiv);
        }
        newButton.dataset.value = btn.value;
        currentDiv.appendChild(newButton);
        count++;
    });
}

addButtons()


container.addEventListener('click', e => {
    const el = e.target;

    if (el.classList.contains('btn')) {
        display.value += `${el.innerText}`
    }

    console.log(el)
})






