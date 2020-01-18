var OSinfo = require('./modules/osinfo');


process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        console.log('Your NODE.js version is: ' + process.version);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting APP!\n');
                process.exit();
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});