document.querySelector('#dark-mode-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-on');
})

function sumUp() {
    let n1 = parseInt(document.getElementById('first-number').value);
    let n2 = parseInt(document.getElementById('second-number').value);
    let equals = n1 + n2;

    document.querySelector('#sum-result').textContent = equals;
}