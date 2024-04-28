let btn = document.getElementById("fetchBtn")
let cont = document.getElementById("cont")
// function getData gets the data 
function getData(url) {
    fetch(url)
    .then((res) => {
        return res.json()
    }).then((res) => {
        showdata(res)
    }).catch((error)=>{
        alert(`${error} ,Check the error and try again!`)
    })
}
// showData function display 

function showdata(arr){
    arr.data.forEach((ele) => {
        let div = document.createElement("div")
        let avatar = document.createElement("img")
        avatar.src = ele.avatar
        let userName = document.createElement("h2")
        userName.innerHTML = ele.first_name +" "+ ele.last_name
        let email = document.createElement("p")
        email.innerHTML = ele.email
        div.append(avatar, userName, email)
        cont.append(div)
    })
}
btn.addEventListener("click", () => {
    getData("https://reqres.in/api/users?page=2")
})