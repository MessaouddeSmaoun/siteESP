function Button1() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "relai_1", true);
    xhttp.send();
}

function Button2() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "relai_2", true);
    xhttp.send();
}

setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("ETATBUTTON1").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "ETATBUTTON1", true);
    xhttp.send();
},
 10000);

 setInterval(function getData()
{
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("ETATBUTTON2").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "ETATBUTTON2", true);
    xhttp.send();
},
 10000);




///////////////////////////////////////////////////////////////////////////////////////


const numberInput1 = document.getElementById("numberInput1");
let numberInput2 = document.getElementById("numberInput2");
let minuteButton1 = numberInput1.value;
let minuteButton2 = numberInput2.value;

const buttonName1 = document.getElementById("buttonName1");
const buttonName2 = document.getElementById("buttonName2");

function Inc(txt) {
    if (txt == 'Button1') {
        minuteButton1++;
    numberInput1.value = minuteButton1;
    } else {
        minuteButton2++
        numberInput2.value = minuteButton2;
    }
    numberInput1.textContent = '22';
    console.log('inc');
}
function Dec(txt) {
    if (txt == 'Button1') {
        minuteButton1--
        numberInput1.value = minuteButton1;
    } else {
        minuteButton2--
        numberInput2.value = minuteButton2;
    }
    console.log('dec');
}

 function save() {
    
   /*
    const nameLabelOn1 = document.getElementById("nameLabelOn1");
    const nameLabelOff1 = document.getElementById("nameLabelOff1");
    const nameButton1 = document.getElementById("nameButton1");
    const buttonName1 = document.getElementById("buttonName1");
    buttonName1.textContent = nameButton1.textContent;

    const nameLabelOn2 = document.getElementById("nameLabelOn2");
    const nameLabelOff2 = document.getElementById("nameLabelOff2");
    const nameButton2 = document.getElementById("nameButton2");
    const buttonName2 = document.getElementById("buttonName2");
    buttonName2.textContent = nameButton2.textContent;

*/
    window.history.back();

}



function Button3() {
    window.history.back();
}

nameButton1.textContent = "bonjour";

checkbox1.addEventListener('change', () => {
    
 
    const nameLabelOn1 = document.getElementById("nameLabelOn1");
   const nameLabelOff1 = document.getElementById("nameLabelOff1");
   const nameButton1 = document.getElementById("nameButton1");

   if (checkbox1.checked) {
    nameLabelOn1.disabled = false;
    nameLabelOff1.disabled = false;
    nameButton1.disabled = false;
} else {
    nameLabelOn1.disabled = true;
    nameLabelOff1.disabled = true;
    nameButton1.disabled = true;
}
});

checkbox2.addEventListener('change', () => {
    
   
    const nameLabelOn2 = document.getElementById("nameLabelOn2");
    const nameLabelOff2 = document.getElementById("nameLabelOff2");
    const nameButton2 = document.getElementById("nameButton2");
    if (checkbox2.checked) {
        nameLabelOn2.disabled = false;
        nameLabelOff2.disabled = false;
        nameButton2.disabled = false;
    } else {
        nameLabelOn2.disabled = true;
        nameLabelOff2.disabled = true;
        nameButton2.disabled = true;
    }
});