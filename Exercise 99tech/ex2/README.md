When you start the project , go to the console and execute the cd ex2_back followed by npm install.

Afther this step set up the data base and import the file called dump_99tech.sql.

You should now be able to run the comand npx tsx app.ts which initializes the server on http://localhost:3000 .

The routes are as follows :

- Create a resource (POST) : http://localhost:3000/movies/movie and in the body you have to send these params : title , description , year , cast and director. Example in a json format : 
{
	"title": "Jaws The Jawning The revenge",
	
	"description": "Tubarão maluco ataca pescadores com stress pós traumático, muito pesado",
	"year": "199",
	"cast": "Pescadores, Tubarão, Louco",
	"director": "PBE"
}

- List resources with basic filters ( GET ALL MOVIES ) :  http://localhost:3000/movies/all_movies

- Get details of a resource ( GET BY ID ) : http://localhost:3000/movies/7 being 7 the id of the particular movie , if you create a resource the id will auto increment so the next entry will have the id number 8. 

- Update resource details ( PUT ) : http://localhost:3000/movies/7 and you have to send the item you want to change in the body for example : 
{
    	"director": "DB"
}

This will update the resource and change its director name , i chose put because put updates the whole resource even if the fields are not changed , so it gives you freedom to update the movie as you see fit in those fields. Had i chosen patch the change would be partial ie. it would only update the resources that "need" to be changed.

- Delete a resource ( DELETE ) : http://localhost:3000/movies/7




.ENV FILE 


PORT=3000


HOST=localhost

PASSWORD=MIest2U#