# Movies
## How to run in dev mode:
From main directory run command ```npm run all```. Client will be available at ```http://localhost:3000/```, server at ```http://localhost:5000/```.  
The project contains config folder with default.json file. You need to create local.json or change data directly
inside default.json. There is connect to mongoDB.  
```"mongoUri": "mongodb+srv://user:password@cluster0-ua3dl.mongodb.net/test?retryWrites=true&w=majority"```  
set your ```user``` and ```password``` fields.

## About project
This is a test task, that contains the next features:
1. Add movie with form data.
2. Delete movie.
3. Show information about the movie.
4. Show a list of movies sorted in alphabet order.
5. Find movies by title.
6. Find movies by actor's name.
7. Add movies with a txt file.

```sample_movies.txt``` file is in server/ folder. It is an example of the file format to import data into a database. Application with responsive design, so you can use it via smartphone as well, as you do it via PC or tablet.  
  
Server documentation is located at apidoc/ folder. Open ```index.html``` file to watch endpoints information.

### Tech view
Movie schema:
1. id — mongo id.
2. title — string.
3. releaseYear — number from 1900 to 2020.
4. format — allowed values VHS, DVD, Blu-Ray.
5. stars — array of strings.

Tools and technologies:
* Client:
  - ReactJS (functional components with hooks usage)
  - Redux
  - Redux sagas
  - SCSS
* Server:
  - NodeJS (express)
  - multer
  - mocha
  - joi
  - mongoose (mongoDB)
  - eslint

### Things, that were done wrong
Nowadays, scalability is the very important thing every developer must be considered. If we look at task resolving, we need to understand, that there are a lot of things, that can appear in the future. Exactly this task would be better to do with SQL database like PostgreSQL or MySQL. Because in my case there are data overflow and slow speed. It is better to split movies and stars into different tables and create many-to-many relations with an additional table of foreign keys. 
  
One more wrong thing is creating one endpoint for a searching movies by movie title and actor. I just did it because of more attractive client side with one field in header without any radiobuttons. However, it must be two different endpoints. This approach entailed one additional operation of comparing two arrays to leave unique movies.  
  
There is one more place I'm not proud of. Parsing txt file into an array of movies. Is is a little hell with many operations and complexity O(kn), where k is more then 10. A lot of splits. I believe that a better solution exists.  
  
In other cases everything is ok.