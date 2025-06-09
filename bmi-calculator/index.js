const radios = document.querySelectorAll("input[name='unit']");
const metricFields = document.getElementById('metricFields');
const imperialFields = document.getElementById('imperialFields');

const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const ftInput = document.getElementById('heightFt');
const inInput = document.getElementById('heightIn');
const weightSt = document.getElementById('weightSt');
const weightLbs = document.getElementById('weightLbs');

const bmiValue = document.getElementById('bmiValue');
const bmiBlock = document.getElementById('bmiCounted');
const welcomeBlock = document.getElementById('bmiWelcome');
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
            message = `Your BMI suggests you're <strong>underweight</strong>.<br />
                Your ideal weight is between <strong>${minWeight.toFixed(
                    1
                )}kgs – ${maxWeight.toFixed(1)}kgs</strong>.`;
        } else if (weight > maxWeight) {
            message = `Your BMI suggests you're <strong>overweight</strong>.<br />
                Your ideal weight is between <strong>${minWeight.toFixed(
                    1
                )}kgs – ${maxWeight.toFixed(1)}kgs</strong>.`;
        } else {
            message = `Your BMI suggests you're a <strong>healthy weight</strong>.<br />
                Your ideal weight is between <strong>${minWeight.toFixed(
                    1
                )}kgs – ${maxWeight.toFixed(1)}kgs</strong>.`;
        }

        healthyText.innerHTML = message;
        welcomeBlock.style.display = 'none';
        bmiBlock.style.display = 'flex';
    } else {
        welcomeBlock.style.display = 'block';
        bmiBlock.style.display = 'none';
    }
}

function updateBMIImperial() {
    const ft = Number(ftInput.value);
    const inch = Number(inInput.value);
    const st = Number(weightSt.value);
    const lbs = Number(weightLbs.value);

    const totalInches = ft * 12 + inch;
    const totalPounds = st * 14 + lbs;

    const isValid = totalInches > 0 && totalPounds > 0;

    if (isValid) {
        const bmi = (totalPounds / (totalInches * totalInches)) * 703;
        bmiValue.innerText = bmi.toFixed(1);

        const minWeight = (18.5 * totalInches ** 2) / 703;
        const maxWeight = (24.9 * totalInches ** 2) / 703;

        let message = '';
        if (totalPounds < minWeight) {
            message = `Your BMI suggests you're <strong>underweight</strong>.<br />
                Your ideal weight is between <strong>${minWeight.toFixed(
                    1
                )}lbs – ${maxWeight.toFixed(1)}lbs</strong>.`;
        } else if (totalPounds > maxWeight) {
            message = `Your BMI suggests you're <strong>overweight</strong>.<br />
                Your ideal weight is between <strong>${minWeight.toFixed(
                    1
                )}lbs – ${maxWeight.toFixed(1)}lbs</strong>.`;
        } else {
            message = `Your BMI suggests you're a <strong>healthy weight</strong>.<br />
                Your ideal weight is between <strong>${minWeight.toFixed(
                    1
                )}lbs – ${maxWeight.toFixed(1)}lbs</strong>.`;
        }

        healthyText.innerHTML = message;
        welcomeBlock.style.display = 'none';
        bmiBlock.style.display = 'flex';
    } else {
        welcomeBlock.style.display = 'block';
        bmiBlock.style.display = 'none';
    }
}

heightInput.addEventListener('input', updateBMI);
weightInput.addEventListener('input', updateBMI);

ftInput.addEventListener('input', updateBMIImperial);
inInput.addEventListener('input', updateBMIImperial);
weightSt.addEventListener('input', updateBMIImperial);
weightLbs.addEventListener('input', updateBMIImperial);

radios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const value = event.target.value;

        if (value === 'metric') {
            metricFields.style.display = 'block';
            imperialFields.style.display = 'none';

            ftInput.value = '';
            inInput.value = '';
            weightSt.value = '';
            weightLbs.value = '';
        } else {
            metricFields.style.display = 'none';
            imperialFields.style.display = 'block';

            heightInput.value = '';
            weightInput.value = '';
        }

        bmiValue.innerText = '';
        healthyText.innerHTML = '';
        welcomeBlock.style.display = 'block';
        bmiBlock.style.display = 'none';
    });
});

window.addEventListener('load', () => {
    metricFields.style.display = 'block';
    imperialFields.style.display = 'none';

    [heightInput, weightInput].forEach((input) => (input.value = '0'));

    bmiValue.textContent = '';
    healthyText.innerHTML = '';
    welcomeBlock.style.display = 'block';
    bmiBlock.style.display = 'none';
});
