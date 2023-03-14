const Migrations = artifacts.require("digilocker")

module.exports = function (deployer) {
    deployer.deploy(Migrations);
}