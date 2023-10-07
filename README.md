# Proyecto Final C43i Rolling Code
# Menu Project: **Rolling Gourmet**

<img src="./">

## Project Description 📋📄

In this project, students in groups will divide the tasks necessary to desing an application so that restaurant customers can choose between different products and place their order.

The scope of this project focuses on carrying out all the steps of the CRUD and it must have a login with different options depending on the user who logs in. Only the adinistrator user is considered to be able to manage the different menu options, while customers must log in or register to be able to request an order.

## Requirements 📌📝

> **IMPORTANT:** For the project to work on your PC, **npm i** must be done to be able to bring the bootstrap modules and everything necessary to start the project. For the project to work on your PC, you must install **JSON server** on your PC with the following command: npm install -g json-server. In case of having an error due to script execution policy, the following command is executed in the window power shell: Set-ExecutionPolicy Unrestricted and with the Get-ExecutionPolicy command it allows us to know if I have it enabled.

> [Project requirements](https://drive.google.com/file/d/1RGGT8MBVV3XusMked-FQqMlehbNtlB8C/view)

> Nodejs **v18.17.1**

> Npm **v9.8.1**

---

● **Login:** Login screen where the user can authenticate or register through a link to the registration form record.

● **Register:** It can be a page or a modal where the new user can register. The essential data for allow entry must be an email and password, you can add more data if you wish.

● **Homepage:** Main screen with restaurant information and products available so that users can select the ones you want (if I want to create an order by selecting the options on the main page You must first request that you log in)

● **Detail Page:** When selecting a product from the main page, a product detail page or modal window will appear, where the product data is displayed correctly.

● **Orders:** A page that will contain the menus selected by the user and their total cost. It should have a place an order button. When clicked, the order will be saved in the DB with a pending status and will show the user a message that your order was placed correctly.

● **Administrator Page:** The administrator user must be able to access a page where the user lists are displayed,bmenu products and requested orders, you must also be able to perform the following operations:

1. **Users:** List users

2. **Menu items:**

   ● registter products

   ● modify products

   ● remove products

   ● list products

3. **Orders:**

   ● List orders

   ● Modify the status of orders from pending to placed

● **About us:** An informational page will contain information about the project's developer group.

● **Error 404:** a page with the respective error message should direct us if the funcionality is not developed

---

## Tecnologies / Tools 🛠️🔗

● HTML v5
● CSS v3
● React
● Node Js v18.17.1
● NPM v9.8.1
● React Bootstrap v2.9.0-beta.1
● Trello
● [React-Hook-Form] (https://www.react-hook-form.com/) v5/v6
● Sweetalert2 v11.7.27
● JSON Server v0.17.3

1. We use [React-Bootstrap](https://react-bootstrap.netlify.app/) **v2.9.0** in our porject to incorporate Container, Form, Button, InputGroup and all the necessary react bootstrap elements

2. We use **"bootstrap/dist/css/bootstrap.min.css"** to use Bootstrap styles.

3. We use the library **"react-router-dom"** to use the NavLink and Link Components to do the routing

---

> **IMPORTANT:** for all cases, we need to import these tools with the **import**.

4. We use **json-server:** it is important to have it installed with the command:

```bash
npm install -g json-server
```

- Then we have to create a file --> **db.json** on the root of our project.

- We must use the command:

```bash
 json-server --watch db.json --port 3004
```

It is used to execute json-server but since by default it executes it on port 3000 we must add which port it will be executed on.

5. We use the library **react-hook-form** to do form validatons, also using regular expressions in the forms. We install it with:

```bash
npm install react-hook-form
```

6. We install the library sweetalert to show the Alert messages (success or error):

```bash
npm install sweetalert2
```

7. There are 5 environment variables called:

   **VITE_API_PRODUCTS**

   **VITE_API_CATEGORIES**

   **VITE_API_ORDERS**

   **VITE_API_USERS**

   **VITE_API_USERS_LOGIN**

### Repository 💻

The site code is located in the following repository:
https://github.com/MauroVillagra1/RollingGourmet

- Para clonar el Repositorio:

```bash
git clone https://github.com/MauroVillagra1/RollingGourmet
```

- Para contribuir con el proyecto ponerse en contacto con el sgte. mail: **emi.mtorresbq@gmail.com**

## Project Authors 👩‍🏫👨‍🏫

● Mauro Villagra [maurovillagra257@gmail.com]()

● Martin Gramajo martingramajo08@gmail.com

● Emiliana María Torres emi.mtorresbq@gmail.com

● Jonathan Emmanuel Tello Carrasco jonathantello.dev@gmail.com

● Lucas Eduardo Anachuri lucas.anachuri@gmail.com


## Licence

Copyright (c) 2023. All rights reserved
