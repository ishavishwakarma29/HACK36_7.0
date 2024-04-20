//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.7;

contract SmartContract {
    uint256 public count;

    constructor(){
        count=0;
    }

    struct issues{
        uint id;
        string repoUrl;
        string desc;
        string title;
        string username;
        bool completed;
        uint256 ethAmount;
        address ownerAddress;
        address solverAddress;
        string solverUserName;
        bool trying;
        requested[] pending;
    }
    struct requested{
        uint index; // Add index to refer to the index in the array
        address sender;
        string userName;
        bool trying;
        bool completed;
    }
    
    mapping(uint256=>issues) map;
    
    function getIssueCount() public view returns(uint256)
    {
        return count;
    }

    function allIssues() public view returns(issues[] memory){
        issues[] memory allissues = new issues[](count);
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            allissues[k]=issue;
            k++;
        }
        return allissues;
    } 

    function addIssue(uint _ethAmount, uint _id, string memory _repoUrl, string memory _desc, string memory _title,string memory _username)public{
        issues storage issue=map[count];
        issue.id=count;
        count+=1;
        issue.repoUrl=_repoUrl;
        issue.desc=_desc;
        issue.title=_title;
        issue.completed=false;
        issue.trying=false;
        issue.ownerAddress=msg.sender;
        issue.ethAmount=_ethAmount;
        issue.username=_username;
    }

    function doPayment() external payable{
        
    }
    
    function getOpenIssues() public view returns(issues[] memory){
        issues[] memory openIssues=new issues[](count);
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(issue.completed==false)
            {
                openIssues[k]=issue;
                k++;
            }
        }
        return openIssues;
    }
    function myIssues() public view returns (issues[] memory)
    {
        issues[] memory myIssue=new issues[](count);
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(msg.sender==issue.ownerAddress)
            {
                myIssue[k]=issue;
                k++;
            }
        }
        return myIssue;
    }

    function getClosedIssues() public view returns(issues[]memory)
    {
        issues[] memory myCompletedIssues=new issues[](count);
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(issue.ownerAddress==msg.sender)
            {
                if(issue.completed==true)
                {
                    myCompletedIssues[k]=issue;
                    k++;
                }
            }
        }
        return myCompletedIssues;
    }

    function requestIssue(uint256 _id, string memory _username) public {
        issues storage issue = map[_id];
        issue.pending.push(requested(issue.pending.length, msg.sender, _username, true, false));
    }
    // function requestIssue()

    function getMyTryingIssues() public view returns(issues[] memory){
        issues[] memory issue=new issues[](count);
        uint k=0;
        for(uint j=0;j<count;j++)
        {
            uint len=map[j].pending.length;
            if(map[j].trying==true){
                continue;
            }
            for(uint i=0; i < len; i++){
                if(msg.sender==map[j].pending[i].sender){
                    issue[k]=map[j];
                    k++;
                }
            }
        }
        return issue;
    }

    function claim()external payable{

    }
    

}
