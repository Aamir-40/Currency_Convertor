#! /usr/bin/env node


import inquirer from "inquirer";

let c_value: {[key: string]: number} = {
    PKR : 278.40,
    USD : 1,
    UAE : 3.67
};

let ans = await inquirer.prompt([{
    message : "converting from",
    name : "from",
    type : "list",
    choices : ["PKR", "USD", "UAE"]
},
{
    message : "converting to",
    name : "to",
    type : "list",
    choices : ["PKR", "USD", "UAE"]
},
{
    message : "Enter Your Amount To Convert",
    name : "amount",
    type : "number"
}]);

console.log (c_value [ans.to] / c_value [ans.from] * ans.amount);



