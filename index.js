const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")

const error = document.getElementById("error")
const button = document.getElementById("button")

const res1 = document.getElementById("res1")
const res2 = document.getElementById("res2")

button.addEventListener('click', () => {
    const i1 = input1.value
    const i2 = input2.value
    if (Number.isNaN(Number(i1)) || Number.isNaN(Number(i2))) {
        error.textContent = "введено(ы) неверное(ые) значение(я)"
    }
    else {
        let result = Number(i1)/(Number(i2)/100)**2
        // console.log(result)
        result = Math.round(result * 10) / 10
        // console.log(result)
        res1.textContent =  "ИМТ: " + result
        
        if (result < 16) {
            res2.textContent = "выраженный дефицит массы тела";
            res2.style.backgroundColor = '#c0c22c'
        }
        else if (result < 18.5) {
            res2.textContent = "недостаточная масса тела";
            res2.style.backgroundColor = '#b5c22c'
        } 
        else if (result < 25) {
            res2.textContent = "норма";
            res2.style.backgroundColor = '#77c22a'
        } 
        else if (result < 30) {
            res2.textContent = "избыточная масса тела (предожирение)";
            res2.style.backgroundColor = '#f5b400'
        } 
        else if (result < 35) {
            res2.textContent = "ожирение I степени";
            res2.style.backgroundColor = '#f58300'
        } 
        else if (result < 40) {
            res2.textContent = "ожирение II степени";
            res2.style.backgroundColor = '#f55a00'
        } 
        else {
            res2.textContent = "морбидное (тяжелое) ожирение";
            res2.style.backgroundColor = '#d63a3b'
        }
    };
});


// Менее 16 — выраженный дефицит массы тела
// 16 – 18,5 — недостаточная масса тела
// 18,5 – 24,9 — норма
// 25 – 29,9 — избыточная масса тела (предожирение)
// 30 – 34,9 — ожирение I степени
// 35 – 39,9 — ожирение II степени
// 40 и более — морбидное (тяжелое) ожирение
