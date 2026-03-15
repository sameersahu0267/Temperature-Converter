// Function runs when we click the Button
function convertTemp(){
    
    // Get Temperature value and selected Unit
    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;

    // Checking Validity of input
    if(isNaN(temp)){
        alert("Please Enter Temperature");
        return;
    }

    let c,f,k;
    
    // If unit is Celsius
    if(unit === "celsius"){
        c = temp;
        f = (temp * 9/5) + 32;
        k = temp + 273.15;
    }
    // If unit is Fahrenheit
    else if(unit === "fahrenheit"){
        f = temp;
        c = (temp-32) * 5/9;
        k = c + 273.15;
    }
    // If unit is Kelvin
    else if(unit === "kelvin"){
        k = temp;
        c = temp - 273.15;
        f = (c * 9/5) + 32;
    }

    // Displaying Result
    // toFixed(2) is used to show value upto 2 decimal places
    document.getElementById("celsius").innerText = "Celsius :  "+ c.toFixed(2) + " °C";
    document.getElementById("fahrenheit").innerText = "Fahrenheit :  "+ f.toFixed(2) + " °F";
    document.getElementById("kelvin").innerText = "Kelvin :  "+ k.toFixed(2) + " K";
    
}