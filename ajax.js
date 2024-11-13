// ajax xhr 关系
let xhr = new XMLHttpRequest()

xhr.open('GET', 'http://example.com/data')

xhr.onreadystatechange = function (){
    if(xhr.readyState === 4 && xhr.status === 200){
        let data = xhr.responseText

        console.log(data)
    }
}

xhr.send()


// fetch
fetch('https://example.com/data')
.then(data => data.json())
.then(data => console.log(data))
.catch(error => console.error(error))

// axios
axios.get('https://example.com/data')
.then(response => console.log(response.data))
.catch(error => console.error(error))