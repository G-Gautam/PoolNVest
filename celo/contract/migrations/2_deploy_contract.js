var Fund = artifacts.require("./contracts/CommonFund.sol");

module.exports = function(deployer) {
  deployer.deploy(Fund, { value: 30000000000000000000 });
};
