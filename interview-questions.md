# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Why would super be used in a Ruby class?

Your answer: Super would be used in a class if we were to do inheritance. It allows for us to call on one class and their key value pairs while in another class.

Researched answer: Super would be used in the subclass to the superclass. Once we have invoked super the subclass will have access to the instance variables within that method and allow us to borrow from the superclass.

2. What is a gem? 

Your answer: Gem is a package manager and library.

Researched answer: Gems are library of code snippets and code functionality. They package code making it easier to apply commonly used code to applications while also making it easier to share functionality with fellow developers.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a table of information made up of rows and columns. Its very similar to an excell spreadsheet. Yes there are othe kinds of databases.

Researched answer: A relational database is a table of information made up of rows and columns. Its very similar to an excell spreadsheet. There can be many tables related to one another. There are many types of RDbs that are language specific.

4. What are primary keys? What purpose does a primary key serve?

Your answer: Primary keys are essentially ID numbers. They allow us another way to access our data and they serve us in an organized way with our parent and child tables.

Researched answer: Primary keys are unique identifiers that benifit us as coders in many ways. They give us another way to access database information. They also help us coorelate between our parent and child tables. They are a great tool for organization. Bonus, we do not have to assign the Primary Key, rails does that for us! we just have to be sure to match the foreign key for our child table.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Create : Get
             Read : Post
             Update : Put
             Delete : Delete

Researched answer: Create : Post
                   Read : Get
                   Update : Put
                   Delete : Delete
The CRUD actions are the developer philosophy that describe what actions a user should be able to perform inside an application.
The fith one is Patch which allows for a user to do a partial update. 
## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: Tool used to ensure that only clean and valid data gets saved into the database. If Rails is able to run all model validations without error then the content can be saved. 

2. RESTful routes: RESTful routes provide a mapping between HTTP verbs, the CRUD operations and controller actions in an application. It provides the naming covention that RAILS is looking for. 

3. ERB: It is a templating system that allows us to embed Ruby code directly into text files.

4. Params: What allows us to choose which attributes are permitted for mass updating and helps prevent accidental exposure of what should not be exposed. Key terms are 'require' and 'permit'.

5. API: Short for Application Programming Interface. It is an application that transmits data in the form of JSON which is a data structure modeled after JavaScript but supported by most programming languages. 
