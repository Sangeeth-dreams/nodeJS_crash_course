const os = require('os');

//platform
console.log(os.platform());

//cpu core info
console.log(os.cpus());

//cpu architecture
console.log(os.arch());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home directory
console.log(os.homedir());

//uptime
console.log(os.uptime());