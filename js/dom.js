// DOM -> document object model -> объектная модель документа
// BOM -> browser object model -> браузерная модель документа

// window -> самый глобалдык объект, бизге корунуп турган
// экрандардын баардыгы window нун ичинде камтылып турат

// document -> эн негизги родители

/////////////////////////////////////////////////

// сервер - BOM
// alert('Hi Window')
// confirm('hi')
// const name = prompt('What is your name?')
// console.log(name)
// prompt('hi')
// open("https://www.youtube.com")



////////////////////////////////////////////////

// console.log(window)
// console.log(document)
// console.log(location)

/////////////////////////////////////////////

// addEventListener -> события
// classList -> класс кошуу
// querySelectorAll
// querySelector - универсальный метод
// forEach() - работает как map но, нечего не возвращает
// createElement - жаны элемент кошуп берет
/////////////////////////////////////////////


const container = document.querySelector('.container')
let n = 598
const on = document.querySelector('.on')
const off = document.querySelector('.off')

for (let i = 0; i < n; i++) {
    const square = document.createElement('div')
    container.append(square)
    square.setAttribute('class', 'square')
    square.classList.add("square")
    square.addEventListener('mouseover', () =>
        itemStyle(square)
    )
    square.addEventListener('mouseleave', () =>
        removeStyle(square)
    )
    // button
    on.addEventListener('click', () =>
        onStyle(square)
    )

    off.addEventListener('click', () =>
        offStyle(square)
    )

}

/// btn
function onStyle(btn) {
    btn.style.background = randomColor()
}

function offStyle(btn) {
    btn.style.background = ''
}

// container
function itemStyle(item) {
    item.style.background = randomColor()
    item.style.transform = 'rotateY(360deg)'
    // item.style.boxShadow = '20px 20px 20px #3d34d5'
    item.style.boxShadow = `10px 5px 5px ${randomColor()}`
}
function removeStyle(item) {
    item.style.background = ''
    item.style.transform = ''
    item.style.boxShadow = ''
    // item.style.boxShadow = ``
}
function randomColor() {
    let color = '#'
    // let arr = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9,]
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10)
        // let idx = Math.floor(Math.random() * arr.length)
        // color += arr[idx]
    }
    // console.log(color)
    return color
}

// randomColor()

/////////////////////////////////////////////////

// hover js - mouse
// mouseout
// mouseenter
// mouseleave
// mousedown
// mouseup
// mousemove

/////////////////////////////////////////////////

// Math.floor() - тоголок-топ берет
// Math.random() - рандомный нерселерди чыгарып берет
// += - Оператор сложения с присваиванием ( += )
// добавляет значение правого операнда к переменной
// и присваивает переменной результат.

////////////////////////////////////////////////////

// addEventListener()

////////////////////////////////////////////////////

// append()-бул контайнердин ичине салып коет
// const newDiv = document.createElement('div')
// container.appendChild(newDiv)
// container.innerHTML = 'Hello'

////////////////////////////////////////////////////

// setAttribute() -Жаңы атрибут кошот же тандалган
// элементтеги болгон атрибуттун маанисин өзгөртөт.
//
// name - имя атрибута (строка).
// value - значение атрибута.

///////////////////////////////////////////////////

// classList() - бул классарды массивке салып берет
// add() - жаны класс кошулат
// remove() - определенный классты очуруот
// contains () - true false кайтарат
// toggle () -