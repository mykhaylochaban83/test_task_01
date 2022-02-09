const getS = selector => document.querySelector(selector);
const list = document.forms['form-list'];
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray', 'black', 'white', 'deeppink'];
let fF = document.getElementById('fontFamily');
/* add event change font family */
fF.addEventListener('change', changeFontFamily)

function changeFontFamily(e) {
    getS('.top-block').style.fontFamily = this.value;
}

/* event click btn(edit) */
getS('.btn-edit').addEventListener('click', clickEditBtn);

/* star functions btn(Edit) */
function clickEditBtn() {
    /* show edit-block */
    getS('.edit-block').classList.add('show');
    /* hide style-block */
    getS('.style-block').classList.remove('show');
    /* value from bottom blok to Top block */
    getS('.edit-area').value = getS('.top-block').innerHTML;
}
/* end functions btn(Edit) */

/* cheked (bold of text) */
getS('.fontWeight').addEventListener('click', clickfontWeight)

/* cheked (Cursive text) */
getS('.fontStyle').addEventListener('click', clickfontCursive);

/* start function btn(save) */
getS('.btn-save').addEventListener('click', clickSaveBtn);

function clickSaveBtn() {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;
}
/* end function btn(save) */

/* click button(style ) */
getS('.btn-style').addEventListener('click', clickStyleBtn);

/* start function button(style) */
function clickStyleBtn() {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
}
/* end function button(style) */

/* add event click to radio button */
getS('.radio1').addEventListener('click', fontSize);
getS('.radio2').addEventListener('click', fontSize);
getS('.radio3').addEventListener('click', fontSize);
getS('.radio4').addEventListener('click', fontSize);
getS('.radio5').addEventListener('click', fontSize);

/* function change font size in top block */
function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}
/* function (swich) show block create-list and hide create-table */
function showCreateList() {
    getS('.create-list').classList.remove('hide')
    getS('.create-table').classList.add('hide')

}
/* event clic showCreateTable */
getS('.choose1').addEventListener('click', showCreateTable);

/* event clic showCreateList */
getS('.choose2').addEventListener('click', showCreateList);



/* function (swich) hide block create-list and show create-table */
function showCreateTable() {
    getS('.create-table').classList.remove('hide')
    getS('.create-list').classList.add('hide')
}
/*  change color in top-block*/
function changeColor() {
    getS('.top-block').style.color = this.style.backgroundColor;
    getS('.colors').classList.add('hide');
}
/* change background color in top-block */
function changeBackground() {
    getS('.top-block').style.backgroundColor = this.style.backgroundColor;
    getS('.colors').classList.add('hide');
}

/* start function bold style */
function clickfontWeight() {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    } else {
        getS('.top-block').classList.remove('bold');
    }
}
/* end function bold style */

/* start function cursive style */
function clickfontCursive() {

    if (event.target.checked) {
        getS('.top-block').classList.add('cursive');
    } else {
        getS('.top-block').classList.remove('cursive');
    }
}
/* end function cursive style */


/* add event click to button(color of text) */
getS('.btn-text-color').addEventListener('click', function () {

    /* show block color */
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {

        /* add colors from  array [] to color-box */
        getS('.colors').children[i].style.backgroundColor = colors[i];

        /* remove posible event click from button 'Background color'*/
        getS(".colors").children[i].removeEventListener('click', changeBackground);

        /* add event click with function that change text color in top-block */
        getS(".colors").children[i].addEventListener('click', changeColor)
    }
})
/* add event click to button(Background color) */
getS('.btn-bg-color').addEventListener('click', function () {

    /* show block color */
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {

        /* add colors from  array [] to color-box */
        getS('.colors').children[i].style.backgroundColor = colors[i];

        /* remove posible event click from button 'Color of text'*/
        getS(".colors").children[i].removeEventListener('click', changeColor);

        /* add event click with function that change text color in top-block */
        getS(".colors").children[i].addEventListener('click', changeBackground);
    }
})

/* event click button(add)  */
getS('.btn-add').addEventListener('click', clickAddBtn);

/* hide first block show second block */
function clickAddBtn() {
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');
}

/* event click button(create list)  */
getS('.btn-create-list').addEventListener('click', clickCreateList);

/* add <tags> to edit-area  */
function clickCreateList() {

    const countLi = list.count.value;
    const typeLi = list.type.value;
    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for (let i = 0; i < countLi; i++) {
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';

    /*  show firstblock hide second block */
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
}

/* add event click to button (crete table) */
getS('.btn-createTable').addEventListener('click', clickCreateTable);

/* start function clickCreateTable */
function clickCreateTable() {

    const countTdValue = document.querySelector('.countTd').value;
    const countTrValue = document.querySelector('.countTr').value;
    const widthTdValue = document.querySelector('.widthTd').value;
    const heightTrValue = document.querySelector('.heightTr').value
    const colorBorder = document.getElementById('colorBorder').value;
    const widthBorder = document.querySelector('.widthBorder').value;
    const typeBortder = document.querySelector('.typeBorder').value;

    /* generate table whis all setings selected and add to edit-area */
    getS('.edit-area').value += `<table border="colapse" class="table">`;
    for (let a = 0; a < countTrValue; a++) {
        getS('.edit-area').value += `<tr style="height:${heightTrValue}px ;">`;
        for (let j = 0; j < countTdValue; j++) {
            getS('.edit-area').value += `<td style="width:${widthTdValue}px; border-color:${colorBorder};border-width:${widthBorder}px; border-style:${typeBortder} ;">td</td>`;
        }
        getS('.edit-area').value += `</tr>`
    }
    getS('.edit-area').value += `</table>`

    /* show first block and hide second block */
    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');


}
/* start function clickCreateTable */