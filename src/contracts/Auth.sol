// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
 
contract Auth
{   
    uint public userCount = 0;
 
    mapping(string => user) public usersList;
 
     struct user
     {
       string username;
       string email;
       string password;
       string secret;
     }
 
   event created(
      string username,
      string email,
      string password,
      string secret
    );
 
  function createUser(string memory _username,
                      string memory _email,
                      string memory _password,
                      string memory _secret) public
  {     
      userCount++;
      usersList[_email] = user(_username,
                               _email,
                               _password,
                               _secret);
      emit created(_username,
                       _email,
                       _password,
                       _secret);
    }
}