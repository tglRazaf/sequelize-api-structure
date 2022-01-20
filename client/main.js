


import './bulma.min.css'
import './style.css'

(async () =>{
    const {data} = await axios.get('http://localhost:7000/users/list')
    console.log('users', data);
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement('tr')
        tr.id = 'tr'+i;
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        td1.innerText = data[i].uuid
        td2.innerText = data[i].name
        td3.innerText = data[i].number
        td4.innerHTML = `<button class="button is-small is-success for-post" id="${data[i].id}">Add post</button>`
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tbody.appendChild(tr)
     }
})()

const tbody = document.getElementById('tbody')
const submit = document.getElementById('submit')
const nameField = document.getElementById('name')
const numberField = document.getElementById('number')
const dateField = document.getElementById('date')

axios.get('http://localhost:7000/message/hello')
    .then(res => document.querySelector('.title').innerHTML = res.data.message)

const addUser = async ()=>{
    let user = {
        name: nameField.value,
        number: numberField.value,
        date: dateField.value
    }
    try {
        const newUser = await axios({
            url: 'http://localhost:7000/user/create',
            method: 'POST',
            data: user
        })
        console.log(newUser)
    } catch (error) {
        console.log(error)
    }
}

submit.addEventListener('click', addUser)

const postBtns = document.querySelectorAll('button')
console.log(postBtns);
postBtns.forEach(btn =>{
    console.log(btn.id);
})