let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]

const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  document.getElementById("todo-list").innerHTML = ""
  var i;

  for (i = 0; i < arrayOfTodos.length; i++) {
    const ListMain = document.getElementById("todo-list")
  
    const NewItem = document.createElement("li")
    // const NewItem2 = `<li>${arrayOfTodos[i].title}</li>`
    // ListMain.insertAdjacentHTML('beforeend', `<li>${arrayOfTodos[i].title}</li>`)
    const NewContent = document.createTextNode(arrayOfTodos[i].title)
  
    NewItem.appendChild(NewContent)
    ListMain.appendChild(NewItem)
  }

}

const filterTodos = () => {
  document.getElementById("todo-list").innerHTML = ""

  const IDNumber = document.getElementById("number-selector").value
  console.log(IDNumber)

  const newArray = arrayOfTodos.filter(todo => todo.userId == IDNumber)

  console.log(newArray)
  for (i = 0; i < newArray.length; i++) {
    const ListMain = document.getElementById("todo-list")
  
    const NewItem = document.createElement("li")
    // const NewItem2 = `<li>${arrayOfTodos[i].title}</li>`
    // ListMain.insertAdjacentHTML('beforeend', `<li>${arrayOfTodos[i].title}</li>`)
    const NewContent = document.createTextNode(newArray[i].title)
  
    NewItem.appendChild(NewContent)
    ListMain.appendChild(NewItem)
  }

}

const clearTodos = () => {
  document.getElementById("todo-list").innerHTML = ""
}

const completedTodos = () => {
  document.getElementById("todo-list").innerHTML = ""

  const newArray = arrayOfTodos.filter(todo => todo.completed == true)

  console.log(newArray)
  for (i = 0; i < newArray.length; i++) {
    const ListMain = document.getElementById("todo-list")
  
    const NewItem = document.createElement("li")
    // const NewItem2 = `<li>${arrayOfTodos[i].title}</li>`
    // ListMain.insertAdjacentHTML('beforeend', `<li>${arrayOfTodos[i].title}</li>`)
    const NewContent = document.createTextNode(newArray[i].title)
  
    NewItem.appendChild(NewContent)
    ListMain.appendChild(NewItem)
  }

}

const incompleteTodos = () => {
  document.getElementById("todo-list").innerHTML = ""

  const newArray = arrayOfTodos.filter(todo => todo.completed == false)

  console.log(newArray)
  for (i = 0; i < newArray.length; i++) {
    const ListMain = document.getElementById("todo-list")
  
    const NewItem = document.createElement("li")
    // const NewItem2 = `<li>${arrayOfTodos[i].title}</li>`
    // ListMain.insertAdjacentHTML('beforeend', `<li>${arrayOfTodos[i].title}</li>`)
    const NewContent = document.createTextNode(newArray[i].title)
  
    NewItem.appendChild(NewContent)
    ListMain.appendChild(NewItem)
  }

}