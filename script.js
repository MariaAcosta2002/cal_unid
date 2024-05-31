const units = {
    mass: {
        "toneladas": 1e6,
        "kilogramos": 1e3,
        "gramos": 1,
        "miligramos": 1e-3,
        "libras": 453.592,
        "onzas": 28.3495
    },
    length: {
        "kilómetros": 1e3,
        "metros": 1,
        "centímetros": 0.01,
        "milímetros": 0.001,
        "millas": 1609.34,
        "yardas": 0.9144,
        "pies": 0.3048,
        "pulgadas": 0.0254
    },
    speed: {
        "millas por hora": 0.44704,
        "millas por segundo": 1609.34,
        "kilómetros por hora": 0.277778,
        "kilómetros por segundo": 1000,
        "nudo": 0.514444,
        "metros por hora": 1 / 3600,
        "metros por segundo": 1
    }
};

function updateUnits() {
    const category = document.getElementById('category').value;
    const fromUnit = document.getElementById('from-unit');
    const toUnit = document.getElementById('to-unit');

    fromUnit.innerHTML = '';
    toUnit.innerHTML = '';

    for (const unit in units[category]) {
        const option1 = document.createElement('option');
        option1.value = unit;
        option1.textContent = unit;
        fromUnit.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = unit;
        option2.textContent = unit;
        toUnit.appendChild(option2);
    }
}

function convert() {
    const category = document.getElementById('category').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const value = parseFloat(document.getElementById('value').value);

    if (isNaN(value)) {
        document.getElementById('result').textContent = 'Por favor, introduce un valor numérico válido.';
        return;
    }

    const fromFactor = units[category][fromUnit];
    const toFactor = units[category][toUnit];
    const result = (value * fromFactor) / toFactor;

    document.getElementById('result').textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
}

window.onload = updateUnits;
