var timer = function(length) {
    return new Promise((resolve, reject) => {
        console.log("init timer");

        setTimeout(() => {
            if( length < 5000) {
                console.log('Timer is less than 5000');
                resolve();
            } else {
                console.log('Timer exceeded');
                reject();
            }
        }, length);
    });
}

timer(6000)
    .then(() => alert('Timer is done!'))
    .catch(() => alert('Timer exceeded'));