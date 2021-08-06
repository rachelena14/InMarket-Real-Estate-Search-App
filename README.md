# Project 2  - inMarket

![GitHub license](https://img.shields.io/badge/Made%20by-%40RLAQUEA-pink) ![GitHub license](https://img.shields.io/badge/Made%20by-%40AlexAbbamondi-blue)![GitHub license](https://img.shields.io/badge/Made%20by-%40fusionbeam01-orange)![GitHub license](https://img.shields.io/badge/Made%20by-%40CristianC707-green)![GitHub license](https://img.shields.io/badge/Made%20by-%40cartaya1-darkblue)
![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg)

# Description :

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as Content Management Systems. In this homework assignment, the challenge was to architect and build an App using node, inquirer, and MySQL, Heroku and all learn until now..

Los desarrolladores a menudo tienen la tarea de crear interfaces que faciliten a los no desarrolladores ver e interactuar con la información almacenada en las bases de datos. A menudo, estas interfaces se conocen como sistemas de gestión de contenido. En esta tarea, el desafío era diseñar y construir una Aplicacion usando node, inquirer y MySQL.

# Motivation : 

Developers are often tasked with creating interfaces that make it easy for non-developers to view and interact with information stored in databases. Often these interfaces are known as **C**ontent **M**anagement **S**ystems.

Los desarrolladores a menudo tienen la tarea de crear interfaces que faciliten a los no desarrolladores ver e interactuar con la información almacenada en las bases de datos. A menudo, estas interfaces se conocen como **S**istemas de **G**estión de **C**ontenido.

# Table of Contents

* [Demo](#demo)
* [Technology](#technology)
* [Usage](#usage)
* [Features](#features)
* [License](#license)
* [Contribution](#contribution)
* [Questions](#questions)
* [GitHub](#github)

# User Story : 

```
As a User: 
I want to be able to view and load the Apartments and Houses, in my Area.
So that I can organize and plan my futures buy or rent for business

Como Usuario:
Quiero poder ver y buscar los Apartamentos y casas de mi Area.
Para que pueda organizar y planificar mi futuro negocio.
```

# Demo 

![Demo](./images/EXAMPLE.gif)

# Database Schema and remote : 

![Database Schema](./images/database.png)

* **Locations** :

  * **id** - INT PRIMARY KEY
  * **City** - VARCHAR(30) to hold City name
  * **State** - VARCHAR(30) to hold State name

* **Propiety** :

  * **id** - INT PRIMARY KEY
  * **Propiety** -  VARCHAR(30) to hold Propiety name
  * **Listing Price** -  DECIMAL to hold Listing price
  * **propiety_id** -  INT to hold reference to propiety belongs to

* **User** :

  * **id** - INT PRIMARY KEY
  * **User_ID** - VARCHAR(30) to hold User name
  * **Password** - VARCHAR(30) to hold User Password.

# Technology
**1. [MySQL2](https://www.npmjs.com/package/mysql2) NPM package** : 
* MySQL is an open-source relational database management system.
* A relational database organizes data into one or more data tables in which data types may be related to each other; these relations help structure the data.
* SQL is used by language programmers to create, modify and extract data from the relational database, as well as control user access to the database.

**2. [Node.js](https://nodejs.org/en/)** : 

* Node.js is an open-source and cross-platform JavaScript runtime environment. 

* A Node.js app is run in a single process, without creating a new thread for every request. 

* Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking.

**3. [InquirerJs](https://www.npmjs.com/package/inquirer/v/0.2.3)** :

* Inquirer.js strives to be an easily embeddable and beautiful command line interface for Node.js. 

* NPM package to interact with the user via the command-line.

**4. [console.table](https://www.npmjs.com/package/console.table)** :

* Uses easy-table for printing to console.log

* Used to print MySQL rows to the console.

**5. [testing part Axios](https://www.npmjs.com/package/axios)**:

* Make XMLHttpRequests from the browser
* Make http requests from node.js
* Supports the Promise API
* Intercept request and response
* Transform request and response data
* Cancel requests
* Automatic transforms for JSON data
* Client side support for protecting against XSRF

* We used this NPM package to add the API information to our own database

# Usage
* Clone this repository to use this application on local machine.

* To install necessary dependencies, run the following command :

```
npm i
```

* The application will be invoked with the following command : 

```
node server.js
```
* After running above command, user is presented with series of options to manage employee databse.

# Features
1. MySql npm package is used to connect to database and perform queries. (locally and Remote)

2. Inquirer npm package is used to interact with the user via the command-line.

3. Console.table is used to print MySQL rows to the console.

4. User with this NPM package to add the data pull from Real State API to our own personal database.

5. User can view all Houses and Aparment in City requested.

6. User can add Propieties to each DashBoard for each user.

7. User can update Propiety.

8. User can remove Propiety.

9. User can view all Propieties for all user in this app.

10. Created three tables - Propieties, User and Locatios. These tables are connected with primary and foreign keys.

11. Included a `schema.sql` to hold databse schema and relation file to API database. This makes development of individual features much easier.

# License
This project is under ![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg).

# Contribution
![GitHub license](https://img.shields.io/badge/Made%20by-%40RLAQUEA-pink) ![GitHub license](https://img.shields.io/badge/Made%20by-%40AlexAbbamondi-blue)![GitHub license](https://img.shields.io/badge/Made%20by-%40fusionbeam01-orange)![GitHub license](https://img.shields.io/badge/Made%20by-%40CristianC707-green)
![GitHub license](https://img.shields.io/badge/Made%20by-%40cartaya1-darkblue)

Pull requests are always welcome!

# Questions
If you have any questions about the repo, 
[open an issue](https://github.com/RLAQUEA/project-2/issues) 
or contact me directly at [Email](mailto:cartaya1@msn.com).

# GitHub - Binary Beast.

- Raquel Laquea, 
- Kyle M Mularoni,
- Cristian Cuevas,
- Alex Abbamondi,
- Luis R. Cartaya.

[GitHub Profile](https://github.com/cartaya1)


