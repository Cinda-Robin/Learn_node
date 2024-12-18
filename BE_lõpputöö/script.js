function calculatePythagoras() {
    const sideA = parseFloat(document.getElementById("sideA").value) || 0;
    const sideB = parseFloat(document.getElementById("sideB").value) || 0;
    const hypotenuse = parseFloat(document.getElementById("hypotenuse").value) || 0;
    let result = "";

    if (hypotenuse === 0 && sideA > 0 && sideB > 0) {
        // Calculate hypotenuse using a² + b² = c²
        result = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2)).toFixed(2);
        document.getElementById("result").innerText = `Hüpetunuus: ${result}`;
    } 
    else if (sideA === 0 && hypotenuse > 0 && sideB > 0) {
        // Calculate side A using c² - b² = a²
        result = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideB, 2)).toFixed(2);
        document.getElementById("result").innerText = `1: ${result}`;
    }
    else if (sideB === 0 && hypotenuse > 0 && sideA > 0) {
        // Calculate side B using c² - a² = b²
        result = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideA, 2)).toFixed(2);
        document.getElementById("result").innerText = `2: ${result}`;
    } 
    else {
        document.getElementById("result").innerText = "Palun lisage kahe poole andmed.";
    }
}







function calculateCircle() {
    // Get user inputs
    const radius = parseFloat(document.getElementById("radius").value) || 0;
    const diameter = parseFloat(document.getElementById("diameter").value) || 0;
    const area = parseFloat(document.getElementById("area").value) || 0;
    const circumference = parseFloat(document.getElementById("circumference").value) || 0;

    let result = "";

    if (radius > 0) {
        // Calculate diameter, area, and circumference from radius
        result = `
            Diameeter: ${(2 * radius).toFixed(2)} <br>
            Ümbermõõt: ${(2 * Math.PI * radius).toFixed(2)} <br>
            Pindala: ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}
        `;
    } 
    else if (diameter > 0) {
        // Calculate radius, area, and circumference from diameter
        const calculatedRadius = diameter / 2;
        result = `
            Raadius: ${calculatedRadius.toFixed(2)} <br>
            Ümbermõõt: ${(Math.PI * diameter).toFixed(2)} <br>
            Pindala: ${(Math.PI * Math.pow(calculatedRadius, 2)).toFixed(2)}
        `;
    }
    else if (circumference > 0) {
        // Calculate radius, diameter, and area from circumference
        const calculatedRadius = circumference / (2 * Math.PI);
        result = `
            Raadius: ${calculatedRadius.toFixed(2)} <br>
            Diameeter: ${(2 * calculatedRadius).toFixed(2)} <br>
            Pindala: ${(Math.PI * Math.pow(calculatedRadius, 2)).toFixed(2)}
        `;
    } 
    else if (area > 0) {
        // Calculate radius, diameter, and circumference from area
        const calculatedRadius = Math.sqrt(area / Math.PI);
        result = `
            Raadius: ${calculatedRadius.toFixed(2)} <br>
            Diameeter: ${(2 * calculatedRadius).toFixed(2)} <br>
            Ümbermõõt: ${(2 * Math.PI * calculatedRadius).toFixed(2)}
        `;
    }
    else {
        result = "Palun lisage andmeid.";
    }

    document.getElementById("circleResult").innerHTML = result;
}