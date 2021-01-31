const form = document.querySelector(".searchForm")


async function getGif(arr){
    const api_key = "nGswyaOEKowKALHmXPxhV1QNOV8cBtes"
    const img = await axios.get("https://api.giphy.com/v1/gifs/search",{params:{api_key,q:arr,limit:1}})
    return img.data.data[0].images.downsized_large.url
}


function createImg(url){
    const img = document.createElement("img")
    img.setAttribute("src",url)
    return img
}


function handleEvents(e){
    const displayDIV = document.getElementById("display")
    if(e.target.classList.contains("submit")){
        e.preventDefault();
        const searchVal = document.querySelector("input[type=\"text\"]").value;
        getGif(searchVal)
        .then(url =>{
            displayDIV.appendChild(createImg(url))
        })
        e.target.parentElement.reset()
    }else if(e.target.tagName === "BUTTON"){
        displayDIV.innerHTML = ""
    }
}


form.addEventListener("click",handleEvents)