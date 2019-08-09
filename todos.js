const listElement = document.querySelector('#app ul')
const inputElement = document.querySelector('#app input')
const buttonElement = document.querySelector('#app button')
const TODO_LIST = 'todoList'
const todos = JSON.parse(localStorage.getItem(TODO_LIST)) || []

function renderTodos() {
  listElement.innerHTML = ''

  todos.forEach(todo => {
    const todoElement = document.createElement('li')
    const todoText = document.createTextNode(todo)

    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', '#')

    const pos = todos.indexOf(todo)
    linkElement.setAttribute('onclick', `deleteTodo(${pos})`)

    const linkText = document.createTextNode('Excluir')
    linkElement.appendChild(linkText)

    todoElement.appendChild(todoText)
    todoElement.appendChild(linkElement)
    listElement.appendChild(todoElement)
  })
}

renderTodos()

function addTodo() {
  const todoText = inputElement.value
  todos.push(todoText)
  inputElement.value = ''

  renderTodos()
  saveToStorage()
}

buttonElement.onclick = addTodo

function deleteTodo(pos) {
  todos.splice(pos, 1)
  renderTodos()
  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem(TODO_LIST, JSON.stringify(todos))
}
