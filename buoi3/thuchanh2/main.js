const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');
const ul = document.getElementById('ulTarget');
let ele =[];

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")

    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message)
}

function renderBreed(breeds) {
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
    for (const breed in breeds) {
        let optionEl = document.createElement("option")
        optionEl.innerHTML = breed
        select.appendChild(optionEl)
    }

    btn.addEventListener('click', async function () {
        ele = []
        ul.innerHTML = ""
        let value = select.value;
        let res = await axios.get(`https://dog.ceo/api/breed/${value}/list`)
        console.log(res.data.message)
        if(res.data.message.length == 0){
                ul.innerHTML += `<li>Không Có Sub Breed</li>`
        } else{
            for (let index = 0; index < res.data.message.length; index++) {
                ele[index] =  res.data.message[index];
                ul.innerHTML += `<li> <a  onclick="showImage(${index})">${res.data.message[index]}</a> </li>`
            }
        }
    })
}

function myFunction() {
    alert("hello")
}

async function showImage(subBreed) {
    try {
       
        let res = await axios.get(`https://dog.ceo/api/breed/${select.value}/${ele[subBreed]}/images/random`)

        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}

getBreedList()