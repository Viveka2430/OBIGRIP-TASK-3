let butt = document.getElementById("btn1");

function gettodos() {
    let j = localStorage.getItem("todos")
    let k = JSON.parse(j)
    if (j === null) {
        return []
    } else {
        return k
    }
}

let todolist = gettodos()
let n = todolist.length;

let saves = document.getElementById("saveTodoButton")

saves.onclick = function() {
    localStorage.setItem("todos", JSON.stringify(todolist))
}


let ul = document.getElementById("ul1");

function checkedline(r, s, vj) {
    let v = document.getElementById(r)
    let h = document.getElementById(s)
    h.classList.toggle("line")

    let line = todolist.findIndex(function(p) {
        let li = "li" + p.id
        if (li === vj) {
            return true
        } else {
            return false
        }
    })
    let e = todolist[line]
    if (e.ischecked === true) {
        e.ischecked = false
    } else {
        e.ischecked = true
    }
}

function deleteli(vj) {
    let l = document.getElementById(vj)
    ul.removeChild(l)
    let o = todolist.findIndex(function(u) {
        let t = "li" + u.id
        if (t === vj) {
            return true
        } else {
            return false
        }
    })
    todolist.splice(o, 1)

}

function todosname(todo) {
    let r = "userinput" + todo.id
    let s = "label" + todo.id
    let vj = "li" + todo.id

    let li = document.createElement("li")
    li.classList.add("li1", "d-flex", "flex-row")
    li.id = vj
    ul.appendChild(li)

    let input1 = document.createElement("input")
    input1.type = "checkbox"
    input1.id = r
    input1.checked = todo.ischecked
    input1.onclick = function() {
        checkedline(r, s, vj)
    }
    li.appendChild(input1)

    let div = document.createElement("div")
    div.classList.add("div", "d-flex", "flex-row")
    li.appendChild(div)

    let label = document.createElement("label")
    label.setAttribute("for", r)
    label.classList.add("right")
    label.id = s
    label.textContent = todo.name
    if (todo.ischecked === true) {
        label.classList.add("line")
    }
    div.appendChild(label)



    let div2 = document.createElement("div")
    div.appendChild(div2)
    let but = document.createElement("i")
    but.classList.add("far", "fa-trash-alt", "delete-icon", "right")
    div2.appendChild(but)

    but.onclick = function() {
        deleteli(vj)
    };

}
for (let todo of todolist) {
    todosname(todo)
};

function additem() {
    let i = document.getElementById("inputid")
    let g = i.value
    if (g === "") {
        alert("please enter the value")
        return
    }
    n = n + 1
    let newTodo = {
        name: g,
        id: n,
        ischecked: false
    };
    todosname(newTodo);
    todolist.push(newTodo)
    i.value = ""
}


butt.onclick = function() {
    additem()
}