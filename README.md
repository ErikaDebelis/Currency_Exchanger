# Currency Exchanger

#### A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to EUR, JPY, CLP, KHR, GNF, and CAD. 

#### Authored by Erika Debelis

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_
* _webpack_
* _Babel_
* _ES6_
* _Git BASH_
* _exchangerate-api_

## Setup/Installation Requirements

1. Download or clone the https://github.com/ErikaDebelis/Currency_Exchanger to your local machine
2. Open git BASH terminal and navigate to the top level of the directory
3. Run "npm install" in the git BASH terminal to install dependencies
    $ npm install
4. Create a '.env' file in your root directory
    $ touch .env

#### In your browser, go to _https://www.exchangerate-api.com/_, provide your email address + click "Get Free Key" ####

5. Open project folder with VSCode (in git BASH if you have VSCode as your default code editor)
    $ code .
6. Paste the API key generated in the .env file as "API_KEY = (your api key here)" (don't include the parentheses, they're there to communicate that the api key with be different for each user)
7. In VSCode, navigate to your .gitignore file and add .env to the bottom of the list on a new line
8. Run "npm run build" in the git BASH terminal to bundle all of the files
    $ npm run build
9. Run "npm start" in the terminal to create and launch the development server
    $npm start

## Bugs

_no known bugs at this time_

## License

_MIT_

_Copyright (c) 2021 Erika Debelis_

if any issues are discovered while navigating the site, please let me know! It will help me learn and grow!

## Contact Information

Erika Debelis _erika.debelis@gmail.com_