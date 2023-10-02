/* eslint-disable no-undef */

module.exports = {


  networks: {
    // dashboard: {
    //   host: "127.0.0.1", // Replace with your Ethereum client's host
    //   port: 24012,        // Replace with your Ethereum client's port
    //   network_id: "*",   // Replace with your network ID
    // },
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
     
    }
  },

 
};
