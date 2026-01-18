    const range = document.getElementById('budgetRange');
    const value = document.getElementById('budgetValue');

    range.addEventListener('input', () => {
        value.textContent = range.value + ' €';
    });

