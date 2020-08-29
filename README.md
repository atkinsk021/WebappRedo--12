# webapp-assignment-REDO-V2 Kevin Atkins 20080734

(NOTE : RECOVERY 1 IS THE FINAL VERSION AS OF CURRENT. THIS IS 
BECAUSE GITHUB DESKTOP CAUSED AN ERROR WHEN BEING OVERWRITTEN)

## --------------------------Overview--------------------------
Bookmark Vault was a react app, this is the Express App varient.
Some features have been stripped from it in order to make it 
functional in a mongoose environment.

## --------------------------Setup--------------------------
The creation process was based heavily upon the Node labs
featured in the nodes of both ContactList and HackerNews

## --------------------------Routing--------------------------

Home/Vault  -   Displays existing Bookmarks, Header, Searchbar and 
                Create Bookmark form.

About       -   Displays a simple About page for the application.

## ---------------------Independant Learning--------------------
Tests using Mockgoose were added to test Create, Read and Delete

## ----------------------------Bugs-----------------------------
The intention of this app was to get Bookmark Vault working with a 
Mongo database. This caused many things to be cut back from the prior
version. What works is that it can Create and Read from the database 
(REQUIRES THE PAGE TO BE REFRESHED, UNSURE WHY). Update and Delete 
work in Postman and testing however do not work correctly in the 
Express App itself.
The filter was also removed due to errors in the render section of 
App.js.
