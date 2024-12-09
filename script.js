let input = document.getElementById("input");



function calculate(){
    try{
        input.value = eval(input.value);
    }

    catch(error){
        input.value = "Error"
    }
}