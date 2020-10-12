Create React-Django-Docker App
==============================

# Heroku
```
heroku config:set PRODUCTION_HOST=<your app name>.herokuapp.com SECRET_KEY=<your secret key> DJANGO_SETTINGS_MODULE=hello_world.settings.production
```
Tell heroku to use Docker
```
heroku stack:set container
```
```
git push heroku master
```
or 
```
git push heroku <your branch>:master
```