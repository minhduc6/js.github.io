let button1 = document.getElementById("nameColor")
let button2 = document.getElementById("hexColor")
let button3 = document.getElementById("rgbColor")
let h1 = document.getElementById("color")

let arrButton = document.querySelectorAll("button")
console.log(arrButton)

for (let index = 0; index < arrButton.length; index++) {
    arrButton[index].addEventListener('click',async function(){
        try {
            // cách 1 let type = arrButton[index].dataset.type
            // cách 2 sử dụng index của array
            let res = await axios.get(`http://localhost:8080/random-color?type=${index+1}`)
            h1.innerText = res.data
            document.body.style.backgroundColor = res.data;
           } catch (error) {
               alert(error.response.data.message)
           }
    })
}


