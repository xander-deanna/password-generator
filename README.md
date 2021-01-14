password-generator - Homework assignment for 01/11/2021

---------------------------------------------------------

This week's assignment was to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected.

I started by simply changing the html, javaScript, and css file locations within my password-generator folder, so that the structure made more sense. index.html was previously in a separate folder, and would need to be at the base level to successfully deploy on GitHub.

Since my html and css documents were already written, I then jumped right in to editing my javaScript so that I could focus not he javaScript content. I decided that if I had additional time left over I might play with different color and styling combinations in css, but should focus on the purpose of the assignment first.

I then began to define as many variables as I could think of. I started thinking about how to randomize each type of character (lowercase, capital, number and special character) and give the user an option of what they wish to include in their password. 

I then needed to find away to attach these selections to the checkbox buttons I added to the HTML and return a Boolean. I also added a "number" input in the html, where the user could decide how long they wanted their password to be. I used console.log to display these variables and make sure they were working properly. I did keep the console.log inputs in my final project to help me to continue to understand these concepts as I look back on my work. I understand in a work environment these shouldn't be in the finish product. 

From this point on, I got a little but stuck, and decided to play around with formatting in CSS to give the site more character and give my brain a rest. I added a background, played with text colors, and borders, and made the button a little more dynamic by changing :hover and :active attributes.

Once I had taken a bit of a breather and felt like the site was looking nice, I went back to the javaScript and finished up as mush as I could. Walter helped me tremendously getting my final password result to show up in the text field, however the result was disregarding password length. I went ahead and added some additional conditions to my if statements, and then wrapped the function in a for loop that continues as long as "i" is less than 200. I know this is not ideal and I should give "i" a better condition, but I just wanted to make sure my code would function for the user and I was still feeling a bit stuck. If you have any pointers on how to make this better, please let me know in your comments!

I hope you like the finished product!

---------------------------------------------------------
https://github.com/xander-deanna/password-generator
https://xander-deanna.github.io/password-generator

Thanks for grading! :)