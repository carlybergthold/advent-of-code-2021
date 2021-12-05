const sonarSweeps = require('./input');

// Part 1
let horizontalPosition = 0;
let depth = 0;

sonarSweeps.forEach(sweep => {
    const splitArray = sweep.split(' ');
    const command = splitArray[0];
    const units = parseInt(splitArray[1]);

    if (command === 'forward') {
        horizontalPosition += units;
    } else {
        command === 'down' ? depth += units : depth -= units;
    }
})

console.log('Our final horizontal position of ' + horizontalPosition + ' multiplied by our final depth of ' + depth + ' = ' + (horizontalPosition * depth));

// Part 2
horizontalPosition = 0;
depth = 0;
let aim = 0;

sonarSweeps.forEach(sweep => {
    const splitArray = sweep.split(' ');
    const command = splitArray[0];
    const units = parseInt(splitArray[1]);

    if (command === 'forward') {
        horizontalPosition += units;
        depth += (aim * units);
    } else {
        command === 'down' ? aim += units : aim -= units;
    }
})

console.log('Our final horizontal position of ' + horizontalPosition + ' multiplied by our final depth of ' + depth + ' = ' + (horizontalPosition * depth));