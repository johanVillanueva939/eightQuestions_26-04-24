let number= 2;
function primeVerification(number) {
    if (number <= 1) return false;
        for (var i = 2; i <= number - 1; i++)
            if (number % i == 0) return number+'its not prime';
                return number+ ' its prime';
}
console.log(primeVerification(number));
