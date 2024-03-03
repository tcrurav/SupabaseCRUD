# Simplest CRUD example with React and Supabase

This project is just a project example to learn how to use Supabase with React.

## Getting Started

Read the links in the acknowlegements section bellow to get an idea about Supabase.

The final result looks like this, i.e. a simple CRUD without update.

![Screenshot](/screenshots/screenshot-02.png)

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the LTS version.

## General Installation instructions

First follow the following 3 steps to create your Supabase project and add the database to it:

* Step 1: Create an account in Supabase.

* Step 2: Create a Supabase project.

* Step 3: Inside your project go to the SQL Editor and create your ```bicycles``` table. After that clic on the green bottom ```Run```.

![Screenshot](/screenshots/screenshot-01.png)

Here you have the code to copy/paste in the SQL Editor:

````
 -- Create the table
 CREATE TABLE bicycles (
   id SERIAL PRIMARY KEY,
   brand VARCHAR(255) NOT NULL,
   model VARCHAR(255) NOT NULL
 );
 -- Insert some sample data into the table
 INSERT INTO bicycles (brand,model) VALUES ('BH','Star');
 INSERT INTO bicycles (brand,model) VALUES ('Orbea','Sky');
 ````

After that clone this project:

```
git clone https://github.com/tcrurav/SupabaseCRUD.git
```

Now install all dependencies.

```
cd SupabaseCRUD
npm install
```

You must look for the correct project ref and the supabase anon key of your supabase project.

![Screenshot](/screenshots/screenshot-03.png)

Now create the .env file. You can copy from the example file .env.example. And put the correct project-ref and supabase anon key. 

```
VITE_SUPABASE_URL=https://<project-ref>.supabase.co
VITE_SUPABASE_KEY=<supabase-key>
```

And finally run the project.

```
cd SupabaseCRUD
npm start
```

Enjoy!!!


## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [supabase](https://supabase.com/) - Supabase is an open source Firebase alternative.
* [Vite](https://vitejs.dev/) - Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects.

## Acknowledgments

* https://github.com/TomasCuevas/React-Supabase-Auth-Crud/tree/main/src/components. Interesting CRUD example that helped me a lot.
* https://www.npmjs.com/package/react-icons. Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.
* https://palettes.shecodes.io/. CSS color palettes.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
