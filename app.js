
// Dynamic Blog Button 
document.getElementById('blog-btn').addEventListener('click', function(e){
    window.location.href = './Blogs/blogs.html';
})


let serial = 0;

// For triangle 
document.getElementById('triangle-btn').addEventListener('click', function () {
    const firstValue = getInputValue('triangle-side');
    const secondValue = getInputValue('triangle-height'); 
    const name = getInnerTextValue('triangle-title');;
    const areaTotal = parseInt(firstValue) * parseInt(secondValue) * 0.5; 
    const area = areaTotal.toFixed(2);
    validation(firstValue, secondValue, name, area);
    
    clearInputField('triangle-side');
    clearInputField('triangle-height');


    const meterButton = document.querySelectorAll('.meter-btn');
    for(const button of meterButton){
        button.addEventListener('click', function(e){
            const cmArea = e.target.parentNode.parentNode.children[2].children[0].innerText;
            const meterArea = cmArea / 10000;
            // console.log(meterArea);
            e.target.parentNode.parentNode.children[2].children[0].innerText = meterArea;
        })
    }



})


// For rectangle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const firstValue = getInputValue('rectangle-width');
    const secondValue = getInputValue('rectangle-height'); 
    const name = getInnerTextValue('rectangle-title');;
    const areaTotal = parseInt(firstValue) * parseInt(secondValue); 
    const area = areaTotal.toFixed(2); 
    validation(firstValue, secondValue, name, area);
    
    clearInputField('rectangle-width');
    clearInputField('rectangle-height');
})

// For Parallelogram

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const firstValue = getInputValue('parallelogram-base');
    const secondValue = getInputValue('parallelogram-height'); 
    const name = getInnerTextValue('parallelogram-title');;
    const areaTotal = parseInt(firstValue) * parseInt(secondValue) * 0.5; 
    const area = areaTotal.toFixed(2); 
    validation(firstValue, secondValue, name, area);
    
    clearInputField('parallelogram-base');
    clearInputField('parallelogram-height');
})


// For Rhombus

document.getElementById('rhombus-btn').addEventListener('click', function () {
    
    const firstValue = getInputValue('first-diagonal');
    const secondValue = getInputValue('second-diagonal'); 
    const name = getInnerTextValue('rhombus-title');;
    const areaTotal = parseInt(firstValue) * parseInt(secondValue) * 0.5; 
    const area = areaTotal.toFixed(2); 
    validation(firstValue, secondValue, name, area);
    
    clearInputField('first-diagonal');
    clearInputField('second-diagonal');
})



// Function for validation
function validation(firstValue, secondValue, name, area){
    const firstValueType = parseInt(firstValue);
    const secondValueType = parseInt(secondValue);
    if(firstValue == '' || 
    secondValue == '' ||
    firstValue <= 0 ||
    secondValue <= 0)
    {
        alert("Please enter currect value")
    }
    else if(isNaN(firstValueType) || isNaN(secondValueType)){
        alert("Please enter number not string !!!")
    }
    else{
        serial = serial + 1; 
    displayData(serial, name, area);
    }
}


// Function to clear value in input field

function clearInputField(id){
    const value = document.getElementById(id).value = '';
    return value;
}

// Function to get value from input field
function getInputValue(id){
    const value = document.getElementById(id).value;
    return value;
}


// Function to get data from text field
function getInnerTextValue(id){
    const value = document.getElementById(id).innerText;
    return value;
}

// function to create new html in web page
function displayData(serial, name, area) {
    const container = document.getElementById('table-container')
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${serial}</td>
            <td>${name}</td>
            <td><span>${area}</span><span>cm²</span><td>
            <button id = "dextop-btn" class="meter-btn btn btn-primary p-0 px-2">Covert to m²</button>
            </td>   
            <button id = "mobile-btn" class="btn btn-primary bg-primary p-1 px-2">m²</button>
            </td>   
  `;
    container.appendChild(tr);
}

// Function to set random background color 
function randomBgColor(cardId) {
    const card = document.getElementById(cardId);
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     card.style.background = bgColor;
        }




