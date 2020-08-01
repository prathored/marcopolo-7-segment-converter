# Marcopolo & 7 Segment Converter

Requirements:-

1. Linux system
2. Install nodejs https://nodejs.org/en/

## Marco Polo Game:-

Steps:-

1. Clone this repository
2. Install required npm modules `npm install`
3. Run server `node index.js`
4. In browser go to http://localhost:3000/api/marco-polo-game

Result:-

Numbers will be printed from 1 to 1,000,000 with 1,000 numbers per line. If the number is divisible by 4 then 'marco' will be printed. If the number is divisible by 7 then 'polo' will be printed. If the number is divisible by 4 & 7 then 'marcopolo' will be printed.

## Simple NodeJs Question

Question:- When is it a good idea to not use NodeJs? Why?

Answer:- There are 3 case scenarios comes to mind which are:-

1. A simple CRUD Application.
2. A Relational Database.
3. High computational programs.

In the first case scenario, we will not be able to use full capacity of nodejs.
In the second case scenario, using relational database with nodejs is very complex.
In the third case scenario, as being single threaded nodejs uses only single cpu and if a program takes too much of computational power then it will make the application slow. But this problem can be solved by using load balancing.

## Parse Invoice Numbers

Steps:-

1. Put the text file having 7-segment invoice numbers at project root
2. Install required npm modules `npm install`
3. Run server `node index.js`
4. In browser go to http://localhost:3000/api/userStory

Result:-

A file with parsed numbers will be created and stored at the project root with name `output_user_story_1.txt`

## People

The author of this repository is [Priyanshu Rathore](https://github.com/prathored)

## License

[MIT](LICENSE)
