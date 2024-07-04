document.addEventListener('DOMContentLoaded', () => {
    const incomeBtn = document.getElementById('income-btn');
    const incomeInput = document.getElementById('income-value');
    const incomeList = document.getElementById('income-list');

    incomeBtn.addEventListener('click', () => {
        const incomeValue = incomeInput.value;
        if (incomeInput !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = incomeValue;
            incomeList.appendChild(listItem);
            incomeInput.value = '';

        }
    });

});
