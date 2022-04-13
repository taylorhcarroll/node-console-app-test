function robotOrigin(input) {
    //set up our points of origin
    let x = 0;
    let y = 0;

    //start at 0, get a string and loop through string to app value to x/y
    //u -> y+1
    //d -> y-1
    //l -> x-1
    //r -> x+1

    //standardize input
    input.toUpperCase()
    //compare if x = 0 and y = 0
    const coords = input.split('');

    coords.forEach(element => {
        if (element == 'U') {
            y += 1;
        }
        else if (element == 'D') {
            y -= 1;
        } else if (element == 'L') {
            x -= 1;
        } else if (element == 'R') {
            x += 1;
        } else {
            console.log(`this isn't a valid direction`)
        }
    });
    if (x == 0 && y == 0) {
        console.log('true')
    } else {
        console.log('false')
    }
}

robotOrigin('UUDDLRLR')
robotOrigin('UUDD')