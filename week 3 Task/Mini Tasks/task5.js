function metersToFeet(meters) {
    let feet = meters * 3.281;
    console.log(`${meters} meters is equal to ${feet.toFixed(2)} feet.`);
}

function feetToMeters(feet) {
    let meters = feet * 0.3048;
    console.log(`${feet} feet is equal to ${meters.toFixed(2)} meters.`);
}

metersToFeet(10);
feetToMeters(30);
metersToFeet(5.5);
feetToMeters(15);
