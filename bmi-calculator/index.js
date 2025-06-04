let input = document.querySelectorAll("input[type='radio']");
const unit = {
    metric: {
        height: 'cm',
        weight: 'kg',
    },

    imperial: {
        height: ['ft', 'in'],
        weight: ['st', 'ibs'],
    },
};

let heightUnit = document.getElementById('heightUnit');
let weightUnit = document.getElementById('weightUnit');

input.forEach((el) => {
    el.onchange = function (event) {
        const { value, checked } = event.target;
        const unitSystem = unit[value];
        heightUnit.innerText = unitSystem.height;
        weightUnit.innerText = unitSystem.weight;
    };
});

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const bmiValue = document.getElementById('bmiValue');
const bmiBlock = document.getElementById('bmiCounted');
const welcomeBlock = document.getElementById('bmiWelcome');

function updateBMI() {
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    const isValid = height > 0 && weight > 0;

    if (isValid) {
        const bmi = weight / ((height / 100) * (height / 100));
        bmiValue.innerText = bmi.toFixed(1);
        welcomeBlock.style.display = 'none';
        bmiBlock.style.display = 'flex';
    } else {
        welcomeBlock.style.display = 'block';
        bmiBlock.style.display = 'none';
    }
}

heightInput.addEventListener('input', updateBMI);
weightInput.addEventListener('input', updateBMI);

const radios = document.querySelectorAll("input[name='unit']");
const metricFields = document.getElementById('metricFields');
const imperialFields = document.getElementById('imperialFields');

radios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const value = event.target.value;

        if (value === 'metric') {
            metricFields.style.display = 'block';
            imperialFields.style.display = 'none';
        } else {
            metricFields.style.display = 'none';
            imperialFields.style.display = 'block';
        }
    });
});

const healthyText = document.querySelector('#bmiCounted p');

function updateBMI() {
    const height = Number(heightInput.value);
    const weight = Number(weightInput.value);

    const isValid = height > 0 && weight > 0;

    if (isValid) {
        const bmi = weight / (height / 100) ** 2;
        bmiValue.innerText = bmi.toFixed(1);

        const minWeight = 18.5 * (height / 100) ** 2;
        const maxWeight = 24.9 * (height / 100) ** 2;

        let message = '';
        if (weight < minWeight) {
            message =
                "Your BMI suggests you're <strong>underweight</strong>.<br />" +
                'Your ideal weight is between <strong>' +
                minWeight.toFixed(1) +
                'kgs – ' +
                maxWeight.toFixed(1) +
                'kgs</strong>.';
        } else if (weight > maxWeight) {
            message =
                "Your BMI suggests you're <strong>overweight</strong>.<br />" +
                'Your ideal weight is between <strong>' +
                minWeight.toFixed(1) +
                'kgs – ' +
                maxWeight.toFixed(1) +
                'kgs</strong>.';
        } else {
            message =
                "Your BMI suggests you're a <strong>healthy weight</strong>.<br />" +
                'Your ideal weight is between <strong>' +
                minWeight.toFixed(1) +
                'kgs – ' +
                maxWeight.toFixed(1) +
                'kgs</strong>.';
        }

        healthyText.innerHTML = message;

        welcomeBlock.style.display = 'none';
        bmiBlock.style.display = 'flex';
    } else {
        welcomeBlock.style.display = 'block';
        bmiBlock.style.display = 'none';
    }
}

const ftInput = document.getElementById('heightFt');
const inInput = document.getElementById('heightIn');
const weightSt = document.getElementById('weightSt');
const weightLbs = document.getElementById('weightLbs');

