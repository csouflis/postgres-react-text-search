
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">PostgreSQL-React Basic Text Searching</h3>

  <p align="center">
    Basic text search in PostgreSQL with LIKE operator and method to avoid SQL injection on simple React frontend
    <br/>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


More of a personal repo - an exercise to learn about SQL injection attacks and interacting between React and PostgreSQL with minimal backend (I usually would throw Django in here)

### Built With

Obviously this template was built with PostgreSQL and React. Most React code through <code>create-react-app</code>. Here's links to Django and React:
* [PostgreSQL](https://www.postgresql.org/)
* [React](https://reactjs.org/)



<!-- GETTING STARTED -->
## Getting Started

Just a simple search. The React frontend is pretty much vanilla, and the pg-database is simple.

### Prerequisites

For this template to work you need to have [nodejs](https://nodejs.org/en/)  and [postgresql](https://www.postgresql.org/download/) installed.  Just download install both and then:

Update node to the most recent version:
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo and make it your current working directory
   ```sh
   git clone https://github.com/repo.git
   ```
   then 
      ```sh
   cd repo
   ```
<br/>
       
2. You may have to install react-scripts. Do this by 
	 ```sh
   npm i -g react-scripts
   ```
    <br/>
    
3. Create database in PostgreSQL - use the [database.sql](backend/database.sql) commands once in psql CLI. Create database partydb, create table users, and insert all users. Copy and paste from document. You can double-check you have 500 users with:
	 ```sh
   SELECT COUNT(*) FROM users;
   ```
    <br/>
    
4. For frontend and backend, get/install all packages for each (while in their directory): 
	 ```sh
   yarn
   ```
   or
   	 ```sh
   npm install
   ```
    <br/>
    
5. Run backend with: 
   ```sh
   node index
   ```
    <br/>
    
6. Run frontend with: 
   ```sh
   yarn start
   ```
   or
   ```sh
   npm start
   ```


<!-- USAGE EXAMPLES -->
## Usage

To edit the React frontend, see the [README.md][frontend-readme] in /frontend directory


<!-- ROADMAP -->
## Roadmap

Show a more fleshed out example of using this template using data more than just names.

Let me know of any issues - See the [open issues](https://github.com/) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.




<!-- ACKNOWLEDGEMENTS -->
## Resources
Definitely check out the [PostgreSQL](https://www.postgresql.org/) and [React](https://reactjs.org/) documentation for tutorials and questions. 






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/csouflis/django-react-template.svg?style=for-the-badge
[contributors-url]: https://github.com/csouflis/django-react-template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/csouflis/django-react-template.svg?style=for-the-badge
[forks-url]: https://github.com/csouflis/django-react-template/network/members
[stars-shield]: https://img.shields.io/github/stars/csouflis/django-react-template.svg?style=for-the-badge
[stars-url]: https://github.com/csouflis/django-react-template/stargazers
[issues-shield]: https://img.shields.io/github/issues/csouflis/django-react-template.svg?style=for-the-badge
[issues-url]: https://github.com/csouflis/django-react-template/issues
[license-shield]: https://img.shields.io/github/license/csouflis/django-react-template.svg?style=for-the-badge
[license-url]: https://github.com/csouflis/django-react-template/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/christopher-souflis/
[frontend-readme]: frontend/README.md
