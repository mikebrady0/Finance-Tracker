document.addEventListener('DOMContentLoaded', () => {
    const incomeBtn = document.getElementById('income-btn');
    const incomeInput = document.getElementById('income-value');
    const incomeList = document.getElementById('income-list');

    incomeBtn.addEventListener('click', () => {
        const incomeValue = incomeInput.value;
        if (incomeValue !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = incomeValue;
            incomeList.appendChild(listItem);
            incomeInput.value = '';

            // Create button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.className = 'btn btn-secondary btn-sm';
            listItem.append(deleteBtn);

            // Delete function
            deleteBtn.onclick = function subtractIncome() {
                const totalIncome = document.getElementById('income-total');
                let sum = parseFloat(totalIncome.textContent.replace('Total Income: $', ''));

                const incomeValue = parseFloat(listItem.textContent);
                sum -= incomeValue;
                totalIncome.textContent = `Total Income: $${sum.toFixed(2)}`;

                listItem.remove();
                updateCombinedTotal();
            }

            getTotalIncome();
        }

        function getTotalIncome() {
            const incomeItems = document.querySelectorAll('#income-list li');
            const totalIncome = document.getElementById('income-total');
            let sum = 0;

            incomeItems.forEach(item => {
                const value = parseFloat(item.textContent);
                if (!isNaN(value)) {
                    sum += value;
                }
            });

            totalIncome.textContent = `Total Income: $${sum.toFixed(2)}`;
            updateCombinedTotal();
        }
    });

    const expenseBtn = document.getElementById('expense-btn');
    const expenseInput = document.getElementById('expense-value');
    const expenseList = document.getElementById('expense-list');

    expenseBtn.addEventListener('click', () => {
        const expenseValue = expenseInput.value;
        if (expenseValue !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = expenseValue;
            expenseList.appendChild(listItem);
            expenseInput.value = '';

            // Create button
            const deleteBtn = document.createElement('button');
            deleteBtn.innerText = 'Delete';
            deleteBtn.className = 'btn btn-secondary btn-sm';
            listItem.append(deleteBtn);

            // Delete function
            deleteBtn.onclick = function subtractExpense() {
                const totalExpense = document.getElementById('expense-total');
                let sum = parseFloat(totalExpense.textContent.replace('Total Expenses: $', ''));

                const expenseValue = parseFloat(listItem.textContent);
                sum -= expenseValue;
                totalExpense.textContent = `Total Expenses: $${sum.toFixed(2)}`;

                listItem.remove();
                updateCombinedTotal();
            }

            getTotalExpense();
        }

        function getTotalExpense() {
            const expenseItems = document.querySelectorAll('#expense-list li');
            const totalExpense = document.getElementById('expense-total');
            let sum = 0;

            expenseItems.forEach(item => {
                const value = parseFloat(item.textContent);
                if (!isNaN(value)) {
                    sum += value;
                }
            });

            totalExpense.textContent = `Total Expenses: $${sum.toFixed(2)}`;
            updateCombinedTotal();
        }
    });

    function updateCombinedTotal() {
        const totalIncome = parseFloat(document.getElementById('income-total').textContent.replace('Total Income: $', ''));
        const totalExpense = parseFloat(document.getElementById('expense-total').textContent.replace('Total Expenses: $', ''));
        const combinedTotal = totalIncome - totalExpense;
        document.getElementById('combined-total').textContent = `Combined Total: $${combinedTotal.toFixed(2)}`;
    }
});



