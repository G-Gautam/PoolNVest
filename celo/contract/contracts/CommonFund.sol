pragma solidity >=0.4.17;

contract CommonFund {
    
    uint8 private userCount;
    mapping (address => uint) private balances;
    address public owner;

    event DepositMade(address indexed accountAddress, uint amount);

    constructor() public payable {
        require(msg.value == 30 ether, "30 ether initial funding required");
        owner = msg.sender;
        userCount = 0;
    }

    function deposit() public payable returns (uint) {
        balances[msg.sender] += msg.value;
        emit DepositMade(msg.sender, msg.value);
        return balances[msg.sender];
    }

    function withdraw(uint withdrawAmount) public returns (uint remainingBal) {
        if  (withdrawAmount <= balances[msg.sender]){
            balances[msg.sender] -= withdrawAmount;
            msg.sender.transfer(withdrawAmount);
        }
        return balances[msg.sender];
    }

    function balance() public view returns (uint) {
        return balances[msg.sender];
    }

    function deposistsBalance() public view returns (uint) {
        return address(this).balance;
    }
}