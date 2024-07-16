function calculatePetAge(petAge, conversionRate = 7) {
    let petYears = petAge * conversionRate;
    console.log(`Your pet is ${petYears} years old in pet years!`);
}

calculatePetAge(5);
calculatePetAge(5, 5);
calculatePetAge(2, 10);
