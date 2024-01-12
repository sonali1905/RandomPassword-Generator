const upperCaseSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseSet="abcdefghijklmnopqrstuvwxyz";
const numbersSet="0123456789";
const symbolSet="~!@#$%^&*()_+";

const passBox=document.querySelector("#pass-box");
const totalChar=document.querySelector("#total-char");
const upperCase=document.querySelector("#upper-case");
const lowerCase=document.querySelector("#lower-case");
const numbers=document.querySelector("#numbers");
const symbols=document.querySelector("#numbers");
const button=document.querySelector("#btn");

const randomGenerate=(dataSet)=>{
   return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword=(password="")=>{
  if(upperCase.checked){
    password+=randomGenerate(upperCaseSet);
  }
  if(lowerCase.checked) {
    password+=randomGenerate(lowerCaseSet);
  }
  if(numbers.checked){
    password+=randomGenerate(numbersSet);
  }
  if(symbols.checked){
    password+=randomGenerate(symbolSet);
  }
  if(password.length<totalChar.value)
  {
    return generatePassword(password);
  }

  passBox.innerText=truncateString(password,totalChar.value);

}

generatePassword();

button.addEventListener("click", function(){generatePassword()});


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}