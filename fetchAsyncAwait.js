// por default o fetch vai ser get

fetch ('data.json').then(responseStream => {
    if(responseStream.status === 200){
      return responseStream.json()
    }else{
        throw new Error('Request error');
    }
    }).then(data =>{
        console.log(data);
    }).catch(err=>{
        console.log('Erro: ', err);

    });

//Async / Await
const asyncTimer = () => new Promise((resolve, reject)=>{
    setTimeout(()=>{
    resolve(12345);

    }, 1000);
});

const simpleFunc = async () => {

    const data = await Promise.all([asyncTimer().  fetch('/data.json')
    .then(resStream=>resStream.json())])
         return dataJson
    };



simpleFunc()
.then(data=>{
    console.log(data);
}).catch(err => {
    console.log(err);
});


