function calculateTotal() {
    const carType = document.getElementById('carType').value;
    const rentalDays = document.getElementById('rentalDays').value;
    const name = document.getElementById('name').value;
    const totalCost = document.getElementById('totalCost');
    const error = document.getElementById('error');

    if (!carType || !rentalDays || !name) {
        error.textContent = 'Please fill in all the fields';
        return;
    }

    let carPrice;
    switch (carType) {
        case 'mahindrathar':
            carPrice = 199*24;
            break;
        case 'sedan':
            carPrice = 150*24;
            break;
        case 'creta':
            carPrice = 110*24;
            break;
        case 'nexon':
            carPrice = 95*24;
            break;
        case 'tata':
            carPrice = 90*24;
            break;
        default:
            error.textContent = 'Invalid car type';
            return;
    }
    const total = carPrice * rentalDays;
    totalCost.value = total;
}