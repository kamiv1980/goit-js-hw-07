'use strict'
console.log('Task 2')

const ingredient = document.getElementById('ingredient')
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]
let elements = ''

ingredients.forEach((el) => (elements += `<li> ${el} </li>`))

ingredient.insertAdjacentHTML('afterbegin', elements)
