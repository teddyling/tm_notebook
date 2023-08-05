
# Tm-notebook


Tm-notebook is a web-based **JavaScript compiler** that can be used online or in a local environment. It has the capability to compile JavaScript code in **real-time** and display the results. Additionally, it supports **importing npm packages** and **rendering JSX code**. Visit [tm-notebook](https://tm-notebook.com/) and give it a try!




## Authors

- [@teddyling](https://www.github.com/https://github.com/teddyling)

## Technologies and Frameworks
Tm-notebook was developed using Node.js and TypeScript.


Tm-notebook used the following framework:
- **ReactJS**
- **React Redux**
- **ExpressJS**




## To use tm-notebook online

Tm-notebook is encapsulated within a **Docker container** and hosted on **Google Cloud Platform (GCP)**. To use it, simply open your preferred web browser and visit https://tm-notebook.com/



## To use tm-notebook locally

You can also use tm-notebook in your local environment. If you have npm installed on your machine, there are two ways to utilize it

- You can download tm-notebook from npm as a global package:

    ```
    npm install tm_notebook -g
    ```
    Once you have downloaded it, you can execute it using the command-line interface (CLI) provided by tm-notebook.
    ```
    tm_notebook execute 
    ```
    This will trigger the execution of tm-notebook. By default, it will operate on port 3001 on the localhost.

    You can also specify a .js or .txt file as a command-line argument when executing it. tm-notebook will subsequently open the designated file in its editor.

    ```
    tm_notebook execute [filename]
    ```
    You also have the option to specify the port number on which tm-notebook will operate:

    ```
    tm_notebook execute [filename] [-p portnumber]
    ```

- You can also use tm_notebook without the need to download it by utilizing the npx command. This will fetch tm-notebook remotely and execute it.
    ```
    npx tm_notebook execute
    ```

    
    All the commands mentioned above are also applicable here.
    ```
    npx tm_notebook [filename] [-p portnumber]
    ```







## How to use tm-notebook
In tm-notebook, you'll encounter two types of code cells: JavaScript code cells and Markdown language cells. To add a new cell of your preference, simply click on either of the two buttons provided.

Simply use tm-notebook as you would any other IDE you have used before. Type your JavaScript code on the left side, and the corresponding output will be displayed on the right. Additionally, you'll find a "format" button in the top-right corner of the editor that you can use to format your code neatly.

To insert an additional code cell, position your mouse cursor at the top or bottom of the existing code cell, then click on either of the two buttons available to add a cell of your choosing.


## The show() function

When using tm-notebook, the *show()* function is necessary for displaying the output. The show() function supports both JavaScript expressions and JSX code snippets.

```
show(5) //Display "5" in the output window
show(6+1) //Display "7" in the output window
show(<h1> Hello </h1>) //Display the h1 heading in the output window
```



