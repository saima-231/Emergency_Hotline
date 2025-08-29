const history = [];
// copy button funtionality 
function countCopyBtn(id1, id2) {
    const initialCopyCount = parseInt(document.getElementById(id1).innerText);
    const copyCount = initialCopyCount + 1;
    const number = document.getElementById(id2).innerText;
    navigator.clipboard.writeText(number);
    alert("Copied: " + number);
    return document.getElementById(id1).innerText = copyCount;
}


// heart icon function 
function countHeartIcon(id) {
    const initialHeartIcon = parseInt(document.getElementById(id).innerText);
    const heartIconCount = initialHeartIcon + 1;
    return document.getElementById(id).innerText = heartIconCount;

}


// coin button function
function initialCoin(id) {
    return parseInt(document.getElementById(id).innerText);
}

function setCoin(value) {
    return document.getElementById("coin-count").innerText = value;
}

// show alert 
function showAlert(id1, id2) {
    const serviceName = document.getElementById(id1).innerText;
    const serviceNumber = document.getElementById(id2).innerText;
    return alert('Calling '+serviceName + ' ' + serviceNumber+'...');
}


// Clear button 
document.getElementById("clear-btn").addEventListener('click', function () {
    const callHistory = document.getElementById('call-history-container');
    callHistory.innerText = "";

})

// heart icon 
document.querySelectorAll('.heart-press').forEach(heart => {
  heart.addEventListener('click', function () {
    countHeartIcon("heart-count");
  });
});

