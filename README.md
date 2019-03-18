# PureJS-KeyPad
Assignment

# Problem Statement

You are provided with an interface that imitates keypad that of Old Phones with number and
keys. Your job is to make it functional.
What we mean by functional as if you quickly press a particular key. The letter is printed on the
white space above and cycles through all the letters on that key. If you press after some time. It
should append to the previously typed character and start to cycle through letters on that key.

# Solution
Using Pure JS i have completed the task and applied very basic approach of javascript to solve this problem.
Steps by steps:
- In the given HTML template i putted onClick event and called my function with respective array for each "key".(exp: 2->[a,b,c]

- then comes to JS, i declared two variables first just to handle few cases like 
    - if somebody types the same character more than once,
    - for "aa" as an input 
 
- so i have to bind my events based on some time interval which is here asssumes as 3 sec.
-  I have written a function and "if-else" condition to handle scenarios like the character is already present in the string or not (exp:"d"+"d"->"dd")
- If not then, i am appending that value into existing value(exp: "aa"+"d"=>"aad"), Else after 3 sec i have reinitilaised the "last_used" variable("ad"+a"->"ada")
    



# Output
JS Fiddle Link: https://jsfiddle.net/m75ungjv/
![image](https://user-images.githubusercontent.com/10995431/54471950-20833d00-47e7-11e9-8ec2-383dd5f5f73b.png)
