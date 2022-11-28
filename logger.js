var url = 'http://mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// Export the function to use in outside of module
// module.exports.log = log;
module.exports = log;

// Export the variable to use in outside
// But keep the url private, 
module.exports.endPoint = url;