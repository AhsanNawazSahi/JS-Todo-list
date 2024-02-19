

submit.addEventListener("click", (e) => {
    e.preventDefault()
    let lists = list.value;
    let dess = des.value;
    localStorage.setItem('Todo', JSON.stringify([lists, dess]))
    todo.innerHTML = `<h2> ${lists} </h2> <br><br> <p> ${dess} </p> `
    list.value = ""
    des.value = ""
     heading.innerHTML = "<br><br>" + "<h1>YOUR LIST HAS BEEN ADDED</h1>"
     heading.style.color = 'green';

})

del.addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('Todo')
    todo.innerHTML = ""
    heading.innerHTML = "<br><br>" + "<h1>LIST HAS BEEN SUCCESSFULLY DELETED </h1>"
    heading.style.color = 'red';
})