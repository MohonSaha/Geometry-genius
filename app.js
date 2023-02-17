let serial = 0;

// For triangle 
document.getElementById('triangle-btn').addEventListener('click', function () {
    serial = serial + 1; 
    const triangleSide = getInputValue('triangle-side');
    const triangleHeight = getInputValue('triangle-height');
    const name = getInnerTextValue('triangle-title');;
    const area = triangleHeight * triangleSide * 0.5;
    displayData(serial, name, area)
    clearInputField('triangle-side');
    clearInputField('triangle-height');
})

// For rectangle
document.getElementById('rectangle-btn').addEventListener('click', function () {
    serial = serial + 1; 
    const rectangleWidth = getInputValue('rectangle-width');
    const rectangleHeight = getInputValue('rectangle-height');
    const name = getInnerTextValue('rectangle-title');;
    const area = rectangleHeight * rectangleWidth;
    displayData(serial, name, area)
    clearInputField('rectangle-width');
    clearInputField('rectangle-height');
})

// For rectangle
document.getElementById('parallelogram-btn').addEventListener('click', function () {
    serial = serial + 1; 
    const firstValue = getInputValue('parallelogram-base');
    const secondValue = getInputValue('parallelogram-height');
    
    const name = getInnerTextValue('parallelogram-title');;
    const area = parseInt(firstValue) * parseInt(secondValue);
   
    validation(firstValue, secondValue,serial, name, area);
    
    clearInputField('parallelogram-base');
    clearInputField('parallelogram-height');
})




function validation(firstValue, secondValue,serial, name, area){
    if(firstValue == '' || 
    secondValue == '' ||
    firstValue <= 0 ||
    secondValue <= 0 ||
    firstValue === NaN ||
    secondValue === NaN
    ){
        alert("Please enter currect value")
    }
    else{
    displayData(serial, name, area)
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