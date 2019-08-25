pragma solidity >=0.4.17;


contract Initializable {
  bool public initialized;

  modifier initializer() {
    require(!initialized);
    initialized = true;
    _;
  }
}