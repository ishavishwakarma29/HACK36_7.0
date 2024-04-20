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
        address ownerAddress;
        bool trying;
        requested[] pending;
    }
    struct requested{
        address sender;
        address ownerAddress;
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

    function  addIssue(string memory _repoUrl,string memory _desc, string memory _title,bool _completed,uint256 _ethAmount)public {
        issues memory issue=map[count];
        issue.id=count;
        count+=1;
        issue.repoUrl=_repoUrl;
        issue.desc=_desc;
        issue.title=_title;
        issue.completed=_completed;
        issue.ownerAddress=msg.sender;
    }

    
    function getOpenIssues() public view returns(issues[] memory){
        issues[] memory openIssues;
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(issue.ownerAddress==msg.sender)
            {
                continue;
            }
            if(issue.completed==false)
            {
                openIssues[k]=issue;
            }
        }
        return openIssues;
    }
    function myIssues() public view returns (issues[] memory)
    {
        issues[] memory myIssues;
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(msg.sender==issue.ownerAddress)
            {
                myIssues[k]=issue;
            }
        }
        return myIssues;
    }

    function getClosedIssues() public view returns(issues[]memory)
    {
        issues[] memory myCompletedIssues;
        uint k=0;
        for(uint i=0;i<count;i++)
        {
            issues memory issue=map[i];
            if(issue.ownerAddress==msg.sender)
            {
                if(issue.completed==true)
                {
                    myCompletedIssues[k]=issue;
                }
            }
        }
        return myCompletedIssues;
    }

    // function requestIssue()
    

}
