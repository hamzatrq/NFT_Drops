
var WebaverseNFT = artifacts.require("./WebaverseNFT.sol");

module.exports = function(deployer) {
  deployer.deploy(WebaverseNFT);
};