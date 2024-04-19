//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract SmartContract {
    uint256 public count;

    struct issues{
        uint id;
        string repoUrl;
        string desc;
        string title;
        bool completed;
        uint256 ethAmount;
        address userAddress;
    }
    
    mapping(uint256=>issues) map;

    function allIssues() public view returns(issues[] memory){
        issues[] memory allissues;
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            allissues[k]=issue;
            k++;
        }
        return allissues;
    } 

    function  addIssue(uint _id,string memory _repoUrl,string memory _desc, string memory _title,bool _completed,uint256 _ethAmount,address _userAddress)public {
        issues memory issue=map[count];
        count+=1;
        issue.id=_id;
        issue.repoUrl=_repoUrl;
        issue.desc=_desc;
        issue.title=_title;
        issue.completed=_completed;
    }

    function getMyIssues(address sender) public view returns(issues[] memory){
        issues [] memory myIssues;
        uint k=0;
        for( uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(issue.userAddress==sender)
            {
                myIssues[k]=issue;
                k++;
            }
        }
        return myIssues;
    }

    

}
