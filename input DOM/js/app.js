// events
// click
// dblclick

// ---keyboard events
// keydown - на месте эле иштейт
// keyup - кой бергенден кийин иштейт

// --input events
// input - ичиндеги жазууларды алганга иштейт
// change -> input, select, textarea ...

// --form events - бул бэкенге жиберет
// submit -
// reset - тазалап салат

// innerHTML - бул  HTML коддордун баардыгын
// чыггарып берет
// innerText - бул тексттерди чыгарып берет

// value - инпуттарда жана класстарга, атрибуттардын
// ичин алганга иштейт

// window.addEventListener('click', (e) => {
//     console.log(e.target)
// })

// target - цель
// event - бул события кайсы жерге кайрылса
// ошол нересеге барабар


// form.addEventListener('reset', (e) => {
//     e.preventDefault()
// })

// input.addEventListener('keydown', (e) => {
//     if(e.key === "Enter") {
//         alert('we')
//     }
// })
// input.addEventListener('keydown', (e) => {
//     if(e.key === "Delete") {
//         console.log('32')
//     }
// })

// preventDefault - тосколдук кылган нерсени жоготот

const email = document.querySelector('.email')
const password = document.querySelector('.password')
const btn = document.querySelector('.btn')
const form = document.querySelector('.form')
const text = document.querySelector('.text')


function resetForm() {
    email.value = ""
    password.value = ""
}

function setColor(color) {
    text.style.color = color
    email.style.border = `2px solid ${color}`
    password.style.border = `2px solid ${color}`
}

let attempts = 3

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (email.value === "motionweb@gmail.com" && password.value === '12345678') {
        text.innerHTML = "Добро Пожалавать"
        resetForm()
        setColor('white')
        text.style.background = 'green'
        text.style.borderRadius = '10px'
        text.style.padding = '15px 30px'
        email.style.border = '2px solid green'
        password.style.border = '2px solid green'
    } else {
        attempts--
        if (attempts === 2) {
            text.innerHTML = `Попробуйте снова, у вас остались ${attempts} попытки!`
            text.style.background = 'orange'
            text.style.borderRadius = '10px'
            text.style.padding = '15px 30px'
            email.style.border = '2px solid orange'
            password.style.border = '2px solid orange'
            resetForm()
            setColor('white')
        } else if (attempts === 1) {
            text.innerHTML = `Попробуйте ещё раз, у вас  ${attempts} попытки!`
            resetForm()
            setColor('white')
            text.style.background = 'red'
            text.style.borderRadius = '10px'
            text.style.padding = '15px 30px'
            email.style.border = '2px solid red'
            password.style.border = '2px solid red'
        } else {
            text.innerHTML = "Доступ закрыт!!!"
            btn.setAttribute('disabled', ('disabled'))
            resetForm()
            setColor('white')
            text.style.background = 'gray'
            text.style.borderRadius = '10px'
            text.style.padding = '15px 30px'
            email.style.border = '2px solid gray'
            password.style.border = '2px solid gray'
        }

    }
})

