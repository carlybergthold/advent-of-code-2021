const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    // Part 1
    const binaryStrings = data.match(/.{1,12}/g);

    let gammaRate = '';
    let epsilonRate = '';

    for (let i = 0; i < 12; i++) {
        moreOccurencesOf0 =
            binaryStrings.map((binary) => binary.charAt(i)).filter(nums => nums === '0').length >
            binaryStrings.map((binary) => binary.charAt(i)).filter(nums => nums === '1').length;

        gammaRate += moreOccurencesOf0 ? '0' : '1';
        epsilonRate += moreOccurencesOf0 ? '1' : '0';
    }

    const powerConsumption = (parseInt(gammaRate, 2)) * (parseInt(epsilonRate, 2));
})