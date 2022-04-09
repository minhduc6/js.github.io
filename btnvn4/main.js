let inputWeight = document.getElementById("inputWeight")
let inputHeight = document.getElementById("inputHeight")
let buttonPost =  document.getElementById("post")
let buttonGet = document.getElementById("get")

buttonPost.addEventListener('click',async function(){
    try {
        let res = await axios.post('http://localhost:8080/bmi', {
            height: inputHeight.value,
            weight: inputWeight.value
          });
        messageBMI(res.data)
       } catch (error) {
           alert(error.response.data.message)
       }
})

buttonGet.addEventListener('click',async function(){
    try {
        let res = await axios.get(`http://localhost:8080/bmi?weight=${inputWeight.value}&height=${inputHeight.value}`)
        messageBMI(res.data)
       } catch (error) {
           alert(error.response.data.message)
       }
})

function messageBMI(x){
    if(x < 18.5){
         alert("Thiếu Cân")
    } else if(18.5 <= x <= 24.9) {
        alert("Bình thường")
    } else if(25 <= x <= 29.9) {
        alert("Thừa Cân")
    } else if (x >= 30) {
        alert("Béo phì")
    }
}