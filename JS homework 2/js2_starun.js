"use strict";

//начало работы

let creationButton = document.createElement('button');
let rowsNumber = document.createElement('input');
let colsNumber = document.createElement('input');
let newForm = document.createElement('form');

//Создайте форму, в которой пользователь задает размеры таблицы (количество строк и столбцов

colsNumber.placeholder = 'Введите кол-во столбцов';
colsNumber.type = 'text';
colsNumber.id = 'columns';
colsNumber.style.display = 'block';

rowsNumber.placeholder = 'Введите кол-во строк';
rowsNumber.type = 'text';
rowsNumber.id = 'rows';
rowsNumber.style.display = 'block';

creationButton.type = 'button';
creationButton.innerText = 'Создать таблицу';

newForm.append(colsNumber, rowsNumber, creationButton);
document.body.appendChild(newForm);

//По нажатию на кнопку создается таблица (страница не перезагружается). 
//Форму создания таблицы спрятать. Вместо нее разместить блок с функциям

//вызов таблицы и блока функций
creationButton.onclick = function() {
    newForm.style.display = 'none';
    newTable(document.getElementById('columns').value, document.getElementById('rows').value);
    addFuncBlock();
    newForm.reset();
};

//функция создания таблицы

function newTable(cols, rows) {
    let table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            td.style.minWidth = '60px';
            td.style.height = '20px';
            td.style.border = '2px solid black';
            td.onmousemove = () => td.style.backgroundColor = 'Plum';
            td.onmouseout = () => td.style.backgroundColor = 'LavenderBlush';
            td.appendChild(saveContent(td));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
   
}


//Функция сохранения контента в ячейке таблицы

function saveContent(td) {
    td.innerHTML = '';
    let form = document.createElement('form'),
        textarea = document.createElement('textarea'),
        button = document.createElement('button');
    button.innerText = 'Сохранить';
    button.type = 'button';
    button.style.display = 'block';
    textarea.cols = 20;
    textarea.rows = 1;
    button.onclick = () => {
        td.innerText = button.previousSibling.value;
        form.remove();
    };
    form.appendChild(textarea);
    form.appendChild(button);
    return form;
}

//создание блока функций и добавление новых функций

function addFuncBlock() {
    let divContainer = document.createElement('div');
    divContainer.className = 'divContainer';
    divContainer.append(
        addCaption(), deleteRow(), deleteTable(),
        randomChoice(), changeBorder(),
        );
    document.body.appendChild(divContainer);
}

function newFunction(funcName) {
    let newDiv = document.createElement('div'),
        p = document.createElement('p');
    p.innerText = funcName;
    newDiv.className = 'function';
    newDiv.appendChild(p);
    return newDiv;
}


//В блок с функциями добавить элемент “Добавить заголовок"

function addCaption() {
    let divForCaption = newFunction('Добавить заголовок');
    let form = document.createElement('form'),
        inputCaptionName = document.createElement('input'),
        button = document.createElement('button')
    ;

    inputCaptionName.type = 'text';
    button.type = 'button';
    button.innerText = 'Добавить';

    button.onclick = () => {
        let caption = document.createElement('caption');
        caption.innerText = inputCaptionName.value;
        document.querySelector('table').appendChild(caption);

    };

    form.append(inputCaptionName, button);
    divForCaption.appendChild(form);
    return divForCaption;
}

//В блок с функциями добавить элемент “Удалить строку"

function deleteRow() {
    let divForDeleteRow = newFunction('Удалить строку');
    let form = document.createElement('form'),
        inputRowNumber = document.createElement('input'),
        button = document.createElement('button')
    ;

    inputRowNumber.type = 'text';
    button.type = 'button';
    button.innerText = 'Удалить';

    button.onclick = function() {
        let rowsNumber = document.querySelectorAll('tr');
        if (inputRowNumber.value < 1 || inputRowNumber.value > rowsNumber.length
            || inputRowNumber.value.match(/([^0-9])/g)) {
            alert('Строки с таким номером в таблице нет');
        } else {
            rowsNumber[inputRowNumber.value - 1].remove();
        }
    };

    form.append(inputRowNumber, button);
    divForDeleteRow.appendChild(form);
    return divForDeleteRow;
}

//В блок с функциями добавить элемент “Удалить

function deleteTable() {
    let divForDeleteTable = newFunction('Удалить');
    let button = document.createElement('button')
    ;

    button.type = 'button';
    button.innerText = 'Удалить таблицу';

    button.onclick = function() {
        newForm.style.display = 'block';
        document.querySelector('table').remove();
        document.querySelector('div.divContainer').remove();

    };
    divForDeleteTable.appendChild(button);
    return divForDeleteTable;
}

//В блок с функциями добавить элемент “Случайный выбор"

function randomChoice() {
    let divForRandom = newFunction('Случайный выбор');
    let button = document.createElement('button')
    ;

    button.type = 'button';
    button.innerText = 'Magic';

    button.onclick = function()  {
        let td = randomCell();
        magic(td);
    };
    divForRandom.appendChild(button);
    return divForRandom;
}

function randomCell() {
    let rowsNumber = document.querySelectorAll('tr');
    let rowIndex = Math.floor(Math.random() * (rowsNumber.length));
    let colIndex = Math.floor(Math.random() * (rowsNumber[rowIndex].cells.length));
    return rowsNumber[rowIndex].cells[colIndex];
}

function magic(td) {
    if (Math.floor(1 + Math.random() * (15 + 1 - 1)) === 7) {
        td.appendChild(saveContent(td));
    } else {
        td.style.backgroundColor = randomColor();
        randomFontStyle(td);
    }
}

function randomColor() {
    var r=Math.floor(Math.random()*(256));
    var g=Math.floor(Math.random()*(256));
    var b=Math.floor(Math.random()*(256));
    var color='#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}


function randomFontStyle(td) {
    let newColor = randomColor();
    let newFontSize = Math.floor(15 + Math.random() * (25 + 1 - 15)) + 'pt';
    td.style.color = newColor;
    td.style.fontSize = newFontSize;
    /* если форма есть, то для каждого её внутреннего 
    тега задаем стиль
    */
    if (typeof td.childNodes[0] !== 'undefined') {
        td.childNodes[0].childNodes.forEach((elem) => {
            elem.style.color = newColor;
            elem.style.fontSize = newFontSize;
        });
    }
}

//В блок с функциями добавить элемент “Изменить границы таблицы”

function changeBorder() {
    let divForBorder = newFunction('Изменить границы таблицы');

    let form = document.createElement('form'),
        select = document.createElement('select'),
        inputBorderWidth = document.createElement('input'),
        button = document.createElement('button'),
        option = document.createElement('option')
    ;

    inputBorderWidth.type = 'text';

    button.type = 'button';
    button.innerText = 'Применить';

    option.innerText = 'Выберите стиль рамки';
    option.disabled = true;
    option.selected = true;
    select.appendChild(option);

    borderOptions().forEach((option) => select.appendChild(option));

    inputBorderWidth.oninput = function() {
        button.innerText = 'Применить' + ' ' + inputBorderWidth.value + ' px ';
        if (select.value !== '' && select.value !== 'Выберите стиль рамки') {
            button.innerText += ' и рамка ' + select.value;
        }
    };

    select.onchange = function() {
        if (inputBorderWidth.value !== '') {
            button.innerText = button.innerText = 'Применить' + ' ' + inputBorderWidth.value + ' px ' +
                'и рамка ' + select.value;
        } else {
            button.innerText = 'Применить' + ' ' + 'рамка ' + select.value;
        }
    };

    button.onclick = function() {
        let tdList = document.querySelectorAll('td');
        tdList.forEach((td) =>
            td.style.border = `${inputBorderWidth.value}px ${select.value}`
        );
    };

    form.append(select, inputBorderWidth, button);
    divForBorder.appendChild(form);
    return divForBorder;
}

function borderOptions() {
    let options = [];
    ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset'].forEach(
        (borderStyle) => {
            let option = document.createElement('option');
            option.innerText = borderStyle;
            options.push(option);
        }
    );
    return options;
}