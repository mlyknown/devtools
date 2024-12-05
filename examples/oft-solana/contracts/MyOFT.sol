// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.22;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/oft-evm/contracts/OFT.sol";

contract MyOFT is OFT {
    mapping(address => bool) public frozenAccounts;

    event AccountFrozen(address account);
    event AccountUnfrozen(address account);

    constructor(
        string memory _name,
        string memory _symbol,
        address _lzEndpoint,
        address _delegate
    ) OFT(_name, _symbol, _lzEndpoint, _delegate) Ownable(_delegate) {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function redeem(uint256 amount) external {
        _burn(msg.sender, amount);
    }

    function freezeAccount(address account) external onlyOwner {
        frozenAccounts[account] = true;
        emit AccountFrozen(account);
    }

    function unfreezeAccount(address account) external onlyOwner {
        frozenAccounts[account] = false;
        emit AccountUnfrozen(account);
    }

    function _update(address from, address to, uint256 value) internal override {
        require(!frozenAccounts[from] && !frozenAccounts[to], "Account is frozen");
        super._update(from, to, value);
    }
}
