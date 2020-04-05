"use strict";


// 1. document.write, работа c URL и строками
let docHeader1 = document.write("1. document.write, работа c URL и строками"); 
document.write("<br/><br/>");

// С помощью функции document.write() запишие любое предложение в теге <body>
let WriteSomeText = document.write("написал любое предложение"); 

//Напишите количество слов и количество букв в этом предложении (с новой строки)
document.write("<br/>");
document.writeln("написал любое предложение".split(" ").length, ' слов(а), ', "написал любое предложение".split(" ").join("").length, ' букв(ы)'); 
document.write("<br/>");

//Показать полный адрес URL документа. 
//Выделите имя протокола (должно работать как для локальных файлов, так и для опубликованных в сети Интернет). 
//Выделите имя файла и его расширение отдельно.
document.write("<br/>");

function getProtocolName(href) {
    let result = href.substring(0, href.indexOf(':'));
    return result;
}

function getFileNameAndExtension(href) {
     let dotPos = href.lastIndexOf('.');
     let slashPos = href.lastIndexOf('/');
     let FileExtension = href.substring(dotPos+1);
     let FileName = href.substring(slashPos+1, dotPos);
     return (FileName + " " + FileExtension);
    }
    
let hrefLocal = document.location.href;
let hrefInet = "https://learn.javascript.ru/nazvanie.jpeg";
let hrefProtocol = getProtocolName(hrefInet);
let hrefInetNameAndExt = getFileNameAndExtension(hrefInet);

document.write(hrefLocal);
document.write("<br/>");
document.write(hrefInet);
document.write("<br/>");
document.write(hrefProtocol);
document.write("<br/>");
document.write(hrefInetNameAndExt);
document.write("<br/>");

//Выделите подстроку параметров из адресной строки. 
let hrefWithParams = "https://vk.com/doc20232844_537595184?hash=e27858d8f98146752a&dl=a102a6b91b888ba41b";
function getParams(href) {
    let Params = href.substring(href.lastIndexOf('?')+1, href.lastIndexOf('&'));
    return Params;
}
document.write(getParams(hrefWithParams));
document.write("<br/>");

// 2. Основные тэги в документе
document.write("<br/><br/>");
let docHeader2 = document.write("2. Основные тэги в документе"); 
document.write("<br/><br/>");

//Добавьте в документ несколько анкоров (внутренний метки)
let anchor = (document.createElement('a'));
anchor.href = "https://de.ifmo.ru/";
anchor.innerText = "Сайт ИТМО"
anchor.style.marginRight = '5px';
document.body.append(anchor);

let anchor2 = (document.createElement('a'));
anchor2.href = "https://isu.ifmo.ru/pls/apex/f?p=2143:1:109223788928426:";
anchor2.innerText = "ИСУ"
anchor2.style.marginRight = '5px';
document.body.append(anchor2);

let anchor3 = (document.createElement('a'));
anchor3.href = "https://isu.ifmo.ru/pls/apex/f?p=2143:15:109223788928426::NO:RP:SCH,SCH_SEARCH,SCH_TYPE,SCH_WEEK,SCH_ID,SCH_FOUND:1,N3456,1,2,N3456,TRUE";
anchor3.innerText = "Расписание занятий"
anchor3.style.marginRight = '5px';
document.body.append(anchor3);
document.write("<br/>");

//Выведите с помощью JS кол-во анкоров
document.write("Количество анкоров: ",  document.body.getElementsByTagName('a').length);
document.write("<br/>");

//Выведите с помощью JS кол-во ссылок
document.write("Количество link-ов равно ", document.getElementsByTagName('link').length);
document.write("<br/>");

//Добавьте в документ несколько картинок, каждая из которых с уникальным идентификатором, задайте ширину и высоту.
let img1 = (document.createElement('img'));
img1.id = 1;
img1.src = "https://s1.1zoom.me/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg";
img1.style.height = '30px';
img1.style.width = '30px';
img1.style.marginRight = '10px';
document.body.append(img1);
 
let img2 = (document.createElement('img'));
img2.id = 2;
img2.src = "https://bipbap.ru/wp-content/uploads/2017/05/VOLKI-krasivye-i-ochen-umnye-zhivotnye.jpg";
img2.style.height = '50px';
img1.style.width = '20px';
img2.style.marginRight = '10px';
document.body.append(img2);

let img3 = (document.createElement('img'));
img3.id = 3;
img3.src = "https://avatars.mds.yandex.net/get-pdb/1058492/e674ccb3-a0f7-4544-a968-82440244c7e4/s600";
img3.style.height = '40px';
img1.style.width = '30px';
img3.style.marginRight = '10px';
document.body.append(img3);
document.write("<br/>");

//Выведите количество картинок
document.write('Количество картинок ' + document.body.getElementsByTagName('img').length);
document.write("<br/>");

//Выведите ширину первой картинки
document.write('Ширина первой картинки ' + img1.style.width);
document.write("<br/>");

//Выведите ширину самой широкой картинки
let images = document.querySelectorAll('img');
let maxWidth = images[0].width;
if (images[1].width>images[2].width) {maxWidth = images[1].width;}
if (images[2].width>maxWidth) {maxWidth = images[2].width;}
document.write('Ширина самой широкой картинки ' + maxWidth +'px');
document.write("<br/>");

//Выведите сумму всех высот картинок
let sum = img1.height+img2.height+img3.height;
document.write('Ширина самой широкой картинки ' + sum +'px');
document.write("<br/>");

//Покажите содержимое (innerHTML) первого анкора на странице
document.write(document.body.getElementsByTagName('a').item(0).innerText);

// 3. Формы
document.write("<br/><br/>");
let docHeader3 = document.write("3. Формы"); 
document.write("<br/><br/>");

//Добавьте в документ несколько форм (не менее 10), каждая форма должна иметь уникальное имя (задать с помощью соответствующего аттрибута).
let forms = [];
let evenForms = [];
for (let i = 0; i < 11; i++) {
    let form = document.createElement('form');
    form.name = `formName${i+1}`;
    form.id = `formValue${i+1}`;
    if (i % 2 == 1) evenForms.push(form.id);
    forms.push(form);
    document.body.append(form);
}

//Вывести четные формы
document.write('Четные формы: ');
document.write(evenForms);


//Добавьте в форму не менее 2 полей 
document.write("<br/>");
let formsFields = document.body.getElementsByTagName('form');
console.log(formsFields);
for (let i = 0; i < formsFields.length ; i++) {
    let inputText = document.createElement('input');
    let inputSwitch = document.createElement('input');
    inputText.type = "text";
    inputText.value = "Текст";
    inputText.style.margin = "7px";
    inputSwitch.type = "switch";
    inputSwitch.value = "Элемент Switch";
    inputSwitch.style.margin = "7px";
    formsFields[i].appendChild(inputText);
    formsFields[i].appendChild(inputSwitch);
}

//Добавьте в каждую форму кнопку “Показать имя формы”. При клике на кнопку показать в стандартном всплываюдщем окне текст, отображаемый на кнопке
for (let i = 0; i < formsFields.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    let img = new Image(20, 20);
    img.src = 'images/htmlcss1-img_soccer.jpeg';
    button.innerText = 'Показать имя формы', img;
    button.prepend(img);
    button.style.margin = "10px";
    button.onclick = () => alert(button.innerText);
    formsFields[i].appendChild(button);
}

//Добавьте в каждую форму кнопку “Принадлежность”. При клике на эту кнопку показать в всплывающем окне id формы, которой принадлежит кнопка.
for (let i = 0; i < formsFields.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    let img = new Image(20, 20);
    img.src = 'images/htmlcss1-img_writer-avatar.jpg';
    button.innerText = 'Принадлежность', img;
    button.prepend(img);
    button.style.margin = "10px";
    button.onclick = () => alert(button.parentNode.id);
    formsFields[i].appendChild(button);
}

//Создайте функцию для сброса полей формы. Добавьте к каждой форме кнопку “Сбросить”
for (let i = 0; i < formsFields.length ; i++) {
    let button = document.createElement('button');
    button.type = 'reset';
    let img = new Image(20, 20);
    img.src = 'images/soccer.jpeg';
    button.innerText = 'Сбросить', img;
    button.prepend(img);
    button.style.margin = "10px";
    formsFields[i].appendChild(button);
}

//Добавьте в каждую форму кнопку “Показать количество полей”. При клике на ней показывается высплывающее окно с кол-во полей в форме.
for (let i = 0; i < formsFields.length ; i++) {
    let button = document.createElement('button');
    button.type = 'button';
    let img = new Image(20, 20);
    img.src = 'icons/fields.png';
    button.innerText = 'Показать количество полей', img;
    button.prepend(img);
    button.style.margin = "10px";
    button.onclick = () => {
        alert(`Количество полей равно: ${button.parentNode.childNodes.length}`);
    };
    formsFields[i].appendChild(button);
}

document.write("<br/>");
document.write("<br/>");
