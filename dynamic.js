//display content
const displaycontent=(content)=>{
    //result is id of input tag
    result.value += content
}

const clearscreen = ()=>{
    result.value=""
}

const finaloutput  =()=>{
    try{result.value = eval(result.value)}
    catch{
        result.value="ErroR"
    }
}