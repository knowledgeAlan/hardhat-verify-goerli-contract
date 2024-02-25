// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ZcdNFT is ERC1155 {
    constructor() ERC1155("URL") {
        _mint(msg.sender,0,1,"");
    }
}