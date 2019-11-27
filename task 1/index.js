function calculateRest(sum = 0, price = 0) {
    var result;
    if (+sum && +price) {
        result = sum - price;
            if (result < 0) {
                alert('Недостатньо коштів!');
            } else {
                var num3 = result = parseFloat(Math.round(result * 100) / 100).toFixed(2);
                var dividedNumber = num3.split('.');

                document.getElementById('int').innerHTML = `${dividedNumber[0]} долари`;
                document.getElementById('afterComa').innerHTML = `${dividedNumber[1]} центів`;
            }
    } else {
        alert('Відсутні або некоректні дані, перевірте будь ласка всі поля та заповніть їх');
    }
}