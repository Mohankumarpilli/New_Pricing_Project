let val = document.querySelector('#toggle');
console.log(val.checked);
val.addEventListener('change',function(){
    let text1 = document.getElementById('1');
    let text2 = document.getElementById('2');
    let text3 = document.getElementById('3');
    if(val.checked){
        text1.innerHTML = '$19.99'
        text2.innerHTML = '$24.99'
        text3.innerHTML = '$30.99'
    }else{
        text1.innerHTML = '$199.99'
        text2.innerHTML = '$249.99'
        text3.innerHTML = '$399.99'
    }
})