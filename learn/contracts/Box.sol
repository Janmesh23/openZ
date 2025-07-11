// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./access-control/auth.sol";

contract Box {
    uint256 private _value;
    auth private _auth;

    // Emitted when the stored value changes
    event ValueChanged(uint256 value);

    constructor(){
         _auth = new auth(msg.sender);
    }

    // Stores a new value in the contract
    function store(uint256 value) public {

         // Require that the caller is registered as an administrator in Auth
            require(_auth.isAdministrator(msg.sender),"unauthorized");

        _value = value;
        emit ValueChanged(value);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value;
    }
}
