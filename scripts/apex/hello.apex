// Use .apex files to store anonymous Apex.
// You can execute anonymous Apex in VS Code by selecting the
//     apex text and running the command:
//     SFDX: Execute Anonymous Apex with Currently Selected Text
// You can also execute the entire file by running the command:
//     SFDX: Execute Anonymous Apex with Editor Contents

// string tempvar = 'Enter_your_name_here';
// System.debug('Hello World!');
// System.debug('My name is ' + tempvar);

Account myAccount = new Account();
myAccount.Name = 'Salesforce.com';
System.debug('Account Name: ' + myAccount.Name);

Experience__c exp = new Experience__c();
exp.Name = 'Salesforce.com';
System.debug('Experience Name: ' + exp.Name);
