pragma solidity >=0.7.0 <0.9.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";


contract LipToken is ERC721, Ownable {
    constructor(string memory name_, string memory symbol_) 
       ERC721(name_,symbol_)
       {}
     
    
}