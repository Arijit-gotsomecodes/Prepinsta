function calculateCoffeeSupply(age, cupsPerDay) {
    const maxAge = 90;
    let yearsRemaining = maxAge - age;
    let totalCups = Math.round(cupsPerDay * 365.25 * yearsRemaining);
    
    console.log(`You will need ${totalCups} cups of coffee to keep you awake until the age of ${maxAge}.`);
}

calculateCoffeeSupply(30, 2);
calculateCoffeeSupply(25, 3.5);
calculateCoffeeSupply(40, 1.5);
