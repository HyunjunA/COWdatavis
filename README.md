# INF 554 Assignment 9

## Provenance of dataset and Reference
    The link of the military Expenditure data  and the link of reference are below.

- [Military Expenditure Dataset](http://data.un.org/Search.aspx?q=military+expenditure)

- [Reference](https://www.sipri.org/sites/default/files/2018-04/sipri_fs_1805_milex_2017.pdf)

## The a9.html on USC SCF

- [Published a9.html on USC SCF](http://www-scf.usc.edu/~choi797/a9/index.html)

## The angular component location and file composition.
    The geojson files and other json files are used for the maps. And angular.json, package.json, and package-lock.json are uploaded. 
#### ![alt text](8-4-2.PNG) 
    You can check each component in src/app. 
#### ![alt text](00.PNG) 

## How to run
    1. Download the github file.
    2. Run "npm install", in the folder.
    3. Run "ng serve --open".


## 0. Format your files and Load the JSON file.
### For Choropleth Map
    For the Choropleth Map, I need geojson and military expenditure file. I upload my geojson file in the repository.

### Proportional Symbol Map
    For this proportional symbol map like choropleth map, I need same kinds of files. 

### Los Angeles County Map
    For this Los Angeles County Map like choropleth map, I need geojson file and csv file.



## 1. Implementation the main page.

    By using the bootstrap example code, I made main webpage. But in this case, the parts which are related to each chart are excluded, which means that in the app.component.html, there are not htmls codes which are related to each chart. (The html codes for each chart are located in each component folder.)  

   
## 2. Implementation the Choropleth Map.
#### ![alt text](10-1.PNG)
### 2-1 Explanation about choro-world-map-in-mil-exp.component.html
    For the Choropleth Map, you need to implement html code. The code is located in this choro-world-map-in-mil-exp.component.html. 
### 2-2 Explanation about choro-world-map-in-mil-exp.component.ts
#### About Choropleth Map
    I implement js code in this file. Let's me explain my code in ts file. I select the svg with ID worldChor.
#### ![alt text](10.PNG)   
    As I said eariler, I need two files. one is geojson file, and another is the json file for military expenditure. 
    In the military expenditure file, there are coorinate field(longitude and latitude). By using path.centroid with geojson file, we can calculate the centroid of each path. But these values are different with the official centroid of each country, because some countries have country subdivisions which is far from their main lands. For example, the centroid of USA is the red dot. But if I use path.centroid to get the centroid of USA, It is located in the middle of USA and Alaska, which is not true. Therefore, I wrote the official centroids of 10 countries in the file. 
#### ![alt text](11.PNG)  
    I use d3.scaleSequential(d3.interpolateBlues). The legend shows how color is related to the share of military expenditure. 
#### ![alt text](12.PNG)  
#### ![alt text](12-1.PNG)  

#### Load files
    To load these two files, I use forEach function.
#### ![alt text](13.PNG)  

#### Draw world map
    I use geoMercator function. By using the geojson file, I do projection. And then I draw the path using data join.
#### ![alt text](13-1.PNG) 

#### Color with the share of military expenditure.
    By using the json file about military expenditure and ID of each country, I color each country area. 
#### ![alt text](13-2.PNG) 

#### Draw centroid of each country.
    By using the json file about military expenditure, I draw the centroid. But when you draw it, you must need to project the longitude and latitude. 
#### ![alt text](13-3.PNG) 

#### Make labels for each country.
    Based on the projected longitude and latitude value, I draw the lines and country name. 
#### ![alt text](13-4.PNG) 



## 3. Implementation the Proportional Symbol Map.
#### ![alt text](001.PNG)
    In this proportional symbol map, most explanation is same to what I explained in the Choropleth Map.  
### 3-1 Explanation about propo-world-map-in-mil-exp.component.html
    For the Proportional Symbol Map, you need to implement html code. The code is located in this propo-world-map-in-mil-exp.component.html. 
### 3-2 Explanation about propo-world-map-in-mil-exp.component.ts
#### About Proportional Symbol Map
    I implement js code in this file. Let's me explain my code in ts file. I select the svg with ID worldProp.
#### ![alt text](10.PNG)   
 
#### Load files
    To load these two files, I use forEach function.
#### ![alt text](13.PNG)  

#### Draw world map
    I use geoMercator function. By using the geojson file, I do projection. And then I draw the path using data join.
#### ![alt text](13-1.PNG) 

#### Draw circle, based on the military expenditure share of each country.
    By using the json file about military expenditure, I draw the circle in the centroid of each country. But when you draw it, you must need to project the longitude and latitude. 
#### ![alt text](313-3.PNG) 

#### Make labels and legend for each country.
    Based on the projected longitude and latitude value, I draw the lines and country name. 
#### ![alt text](313-4.PNG) 


## 4. Implementation the LA county Map.
#### ![alt text](102.PNG)
    In this map, I exclude the explanation about "Unincoporated Areas".
- [Unincoporated Areas in LA county](https://www.lacounty.gov/government/about-la-county/unincorporated-areas/)

### 4-1 Explanation about choro-lacounty-map-in-popu.component.html
    For the Choropleth Map, you need to implement html code. The code is located in this choro-lacounty-map-in-popu.component.html. 
### 4-2 Explanation about choro-lacounty-map-in-popu.component.ts
#### About Choropleth Map
    I implement js code in this file. Let's me explain my code in ts file. I select the svg with ID laCountyChor.
#### ![alt text](410.PNG)   
    I use d3.shemeBlues and d3.scaleThreshold function. The legend shows how color is related to population in each city of LA county.  
#### ![alt text](412.PNG)  
#### ![alt text](412-1.PNG) 
#### ![alt text](412-2.PNG)

#### Load files
    To load these two files, I use forEach function. But in this case, one is json file and another is csv file. So I need two kinds of function to load the files, which are d3.json and d3.csv.
#### ![alt text](413.PNG)  

#### Draw LA county map 
    I use geoMercator function. By using the geojson file, I do projection. And then I draw the path using data join.
#### ![alt text](413-1.PNG) 

#### Color with population
    By using the csv file and the city names, I color cities. In the csv, Total means population. 
#### ![alt text](413-1.PNG) 

#### Draw centroid of each city.
    By using the geojson file and path.centroid function, I draw the centroid. In my case, I want to show the cities where population is smaller than 10000. And I do not consider the unincoporated area.
#### ![alt text](413-3.PNG) 

#### Make labels for each city.
    Based on the centroid, I draw the lines and country name. 
#### ![alt text](413-4.PNG) 








## 5. Setup the bootstrap and the angular
    5-1 Install angular.
#### ![alt text](8-1.PNG)
    5-2 And then you can see the my-app folder.
#### ![alt text](8-2.PNG)
    5-3 change the directory to my-app and install bootstrap.
#### ![alt text](8-3.PNG)
    5-4 In the my-app, install jquery.
#### ![alt text](8-4.PNG)
    5-5 Edit this style and scripts in angular.json.
#### ![alt text](8-4-1.PNG)
    5-6 Edit app.component.ts.
#### ![alt text](8-5.PNG)
    5-7 Edit app.component.html.
#### ![alt text](8-6.PNG)
    5-8 Run ng generate component map and Edit them  

### 4-10. Now you can check whether the angular works use the command line(ng serve --open).

## 5. Deployment
   5-1. Run ng build --base-href /~<username>/a9/
#### ![alt text](6-1.PNG)
   5-2. After running this file, you can see the dist file. Move the a9 file in the dist file under public_html. (If you do not know what is public_html, read how to publish the web page on USC SCF.)
#### ![alt text](6-1-1.PNG)
   5-3. You can enter this web page using the address. 
 #### ![alt text](6-1-4.PNG)   
   5-3'. Or you can run "ng serve --open". And then you can see the pop up webpage.
#### ![alt text](6-1-2.PNG) 
#### ![alt text](6-1-3.PNG) 



## Publish the web page on USC SCF.

    1. make dircetory, name public_html.
    2. change dircetory to public_html.
    3. Upload your web page file.
    4. change directory , named ..
    5. Run this command line(chmod -R 755 public_html)
    6. You can check your home page.
    7. By using FileZilla, you can also upload your code. 
    8. In filezilla, open the site manager.
    9. And then write aludra.usc.edu into Host.
    10. Write your user ID.
#### ![alt text](6-2.PNG)
    11. After connecting you can check the file directories in the server.
#### ![alt text](6-3.PNG)
    12. Install and set what professor explained in the 7th lecture note(From page 74 to page 80).
    13. And then you can see the file, called node_modules. You should upload this file to the server. By using filezilla, I uploaded the file under the public_html.
#### ![alt text](6-4.PNG)
    14. Check setting of the directory.
#### ![alt text](6-4-2.PNG)
    15. Check your webpage on the server. 
#### ![alt text](6-5.PNG)  
#### ![alt text](6-6.PNG)   



## 6. Use of GIT.
    6-1. When you want to upload your file to github,write summary and click the commit to master on the Github Desktop. 
#### ![alt text](7-1.PNG)
    6-2. After commiting, click the push origin. 
#### ![alt text](7-2.PNG)


