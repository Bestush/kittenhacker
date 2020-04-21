let correctAnswer = "silenzio";
let closeAnswer = "silence";
let catImage = document.getElementById("catImage");
let inputField = document.getElementById("inputField");
let input = "";


console.log(inputField);

function catify(){
    input = inputField.value;
    if(input == "silenzio"){
        alert("637520787d9ef8dfd04dc3a5bbbb95b87876161142d91a0e3913d478a49e56c0")
    }
    else if (input == "silence"){
        alert("https://www.youtube.com/watch?v=UEnzE-NKa9A");
    }
    else{
    alert("https://youtu.be/gJscrxxl_Bg?t=13");}
   
}