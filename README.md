# django-react-test

https://www.fusionbox.com/blog/detail/create-react-app-and-django/624/

For development, will have to run two different servers -- one for Django, and one for React.
Add "proxy": "http://localhost:8000" to your package.json (within the frontend directory). 
This will proxy requests from the React app to Django's runserver. Then start both servers in separate terminals:
