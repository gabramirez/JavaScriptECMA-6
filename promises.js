//promises

const doSomenthingPromise = new Promise((resolve, reject)=>{
    setTimeout(function(){
        resolve('first data');
    },1000);
});

//callbacks

function doSomenthing(callback){
    setTimeout(function(){
        callback('first data');
    },1000);
}
function doOtherThing(callback){
    setTimeout(function(){
        callback('second data');
    },1000);
}
function doAll(){
    try {
        doSomenthing(function(data){
        var processedData = data.split('');
        try {
            doOtherThing(function(data2){
            var processedData2 = data2.split('');   
                try {
                    setTimeout(function(){
                    console.log(processedData, processedData2);
                    }, 1000);
                }catch(err){
                //handle error
            }
         });
    } catch(err){
    //handle error
}
});
}catch(err){
        //handle error
    }
}
doAll();
