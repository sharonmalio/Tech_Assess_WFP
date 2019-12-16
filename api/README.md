## WFP ASSESSMENT QUESTION 1 (PYTHON DJANGO AND DRF) API

### Requirements
1. Implement a Django app that exposes the data to the front end via rest API using Django
Rest Framework. In particular:
* Implement a data structure to store “Life expectancy at birth” and “Life expectancy
at age 60” data for Male and Female for each Region and each year.
* Implement loading functions to read data from the downloaded file and store them
in the generated objects.
* Expose the data in json via DRF serializer.

###  Application Link
[LInk to the online API](https://lifehealthyexpectancy.herokuapp.com/)

### Technologies Used(Dependencies)

1. Python==3.6.9 
2. Django==2.2
3. Django Rest Framework==3.11.0
4. Linux - Ubuntu 18.04

### Other Dependencies
1. asgiref==3.2.3
2. dj-database-url==0.5.0
3. django-cors-headers==3.2.0
4. django-filter==2.2.0
5. django-heroku==0.3.1
6. gunicorn==20.0.4
8. psycopg2==2.8.4
9. psycopg2-binary==2.8.4
10. pytz==2019.3
11. sqlparse==0.3.0
12. style==1.1.0
13. update==0.0.1
14. whitenoise==5.0.1

### Installation on local machine
1. Clone the repo in to your local machine
i.e. `git clone https://github.com/sharonmalio/Tech_Assess_WFP.git`
2. Cd into the repo and copi the `api` folder into a separate folder
1. Cd in the `api` folder and create a virtual environment using the command below where "myenv" is the environment name
 `virtualenv -p python3 myenv`
2. Activate the virtual environment.
` source myenv/bin/activate`
3. Install the dependencies
    `pip install -r requirements.txt`
4. Run the application on localhost
    `python manage.py runserver`

## Testing
* Used Postman API collaboration platform for Automated API testing and for the CLient development side

## Deployment and Hosting
 * Used Heroku: Cloud Application Platform, to deploy and host the application
 
## Screenshots

![THE FIRST PAGE](api/images/API-ROOT.png)

 * Click on the GET action and choose API to view the data or JSON to view the data in JSON Format
 ![API Data](api/images/API.png)

 ![Filters](api/images/Filters.png)
  
 ![pagination](api/images/Pagination.png)
  
 ![JSON data format](api/images/JSON.png)