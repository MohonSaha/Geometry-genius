let serial = 0;

// For triangle 
document.getElementById('triangle-btn').addEventListener('click', function () {
    const firstValue = getInputValue('triangle-side');
    const secondValue = getInputValue('triangle-height'); 
    const name = getInnerTextValue('triangle-title');;
    const area = parseInt(firstValue) * parseInt(secondValue) * 0.5; 
    validation(firstValue, secondValue, name, area);
    
    clearInputField('triangle-side');
    clearInputField('triangle-height');
})


// For rectangle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    const firstValue = getInputValue('rectangle-width');
    const secondValue = getInputValue('rectangle-height'); 
    const name = getInnerTextValue('rectangle-title');;
    const area = parseInt(firstValue) * parseInt(secondValue); 
    validation(firstValue, secondValue, name, area);
    
    clearInputField('rectangle-width');
    clearInputField('rectangle-height');
})

// For Parallelogram

document.getElementById('parallelogram-btn').addEventListener('click', function () {
    const firstValue = getInputValue('parallelogram-base');
    const secondValue = getInputValue('parallelogram-height'); 
    const name = getInnerTextValue('parallelogram-title');;
    const area = parseInt(firstValue) * parseInt(secondValue); 
    validation(firstValue, secondValue, name, area);
    
    clearInputField('parallelogram-base');
    clearInputField('parallelogram-height');
})


// For Rhombus

document.getElementById('rhombus-btn').addEventListener('click', function () {
    
    const firstValue = getInputValue('first-diagonal');
    const secondValue = getInputValue('second-diagonal'); 
    const name = getInnerTextValue('rhombus-title');;
    const area = parseInt(firstValue) * parseInt(secondValue); 
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
    console.log(serial, name, area);
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
    const cmArea = area + "cm²"
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${serial}</td>
            <td>${name}</td>
            <td>${cmArea}</td>
            <td>
            <button class="btn btn-primary p-0 px-2">Covert to m²</button>
            </td>   
  `;
    container.appendChild(tr);
}