
/*const Voting = artifacts.require("Voting");

module.exports = async (deployer) => {
  await deployer.deploy(Voting, 5, {value:100000000});
  let instance = await Voting.deployed();
  //console.log(await instance.retrieve());
};*/

const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
    deployer.deploy(Voting);
};