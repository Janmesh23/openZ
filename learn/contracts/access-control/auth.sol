// contracts/access-control/auth.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract auth {
    address private _administrator;

    constructor(address deployer) {
        // Make the deployer of the contract the administrator
        _administrator = deployer;
    }

    function isAdministrator(address user) public view returns (bool) {
        return user == _administrator;
    }
}
