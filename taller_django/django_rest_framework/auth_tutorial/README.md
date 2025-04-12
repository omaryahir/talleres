# Tutorial Django REST Framework


### Step 1: Create your folder for the project, in this case is called: auth_tutorial 

```
$ mkdir auth_tutorial
$ cd auth_tutorial
```

### Step 2: Create / Activate the python environment

```
$ python -m venv env
$ source env/bin/activate
```

### Step 3: Install django

```
$ pip install django
```

### Step 4: Start and test the first django project

```
$ django-admin startproject backend .
$ python manage.py runserver
```

Navigate to the browser

http://127.0.0.1:8000 

Once you validated you can hit in the terminal ^C (control+C)


### Step 5: Install django rest framework

```
$ pip install djangorestframework
```

Add in your project settings (in this case backend/settings.py) the apps:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    ...
    'django.contrib.staticfiles',

    'rest_framework',
    'rest_framework.authtoken'
]
```

### Step 6: 


### Step 7: 

