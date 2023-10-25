const selectBusiness = e=>{
    e.preventDefault();
    let lastNum = lastNumber.value;
    result.innerText  = Math.ceil(Math.random()* lastNum);
}