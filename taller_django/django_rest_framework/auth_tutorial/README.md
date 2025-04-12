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

### Step 6: Create some views to test

Create the file `backend/views.py` with this content:

```python
from rest_framework.decorators impot api_view
from rest_framework.response import Response


@api_view(['POST'])
def login(request):
	return Response({})

@api_view(['POST'])
def register(request):
	return Response({})

@api_view(['POST'])
def profile(request):
	return Response({})

```

Additionally, we need to create the routes in `backend/urls.py`:

```python
...
from . import views
...
urlpatterns = [
    path('admin/', admin.site.urls),

    path('login/', views.login),
    path('register/', views.register),
    path('profile/', views.register),
]
```

### Step 7: Perform the migration of the database

Go to the terminal and run the commands, you might have an similar outputs:
```bash
$ python manage.py makemigrations
No changes detected

$ python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, authtoken, contenttypes, sessions
Running migrations:
  Applying contenttypes.0001_initial... OK
  Applying auth.0001_initial... OK
  Applying admin.0001_initial... OK
  Applying admin.0002_logentry_remove_auto_add... OK
  Applying admin.0003_logentry_add_action_flag_choices... OK
  Applying contenttypes.0002_remove_content_type_name... OK
  Applying auth.0002_alter_permission_name_max_length... OK
  Applying auth.0003_alter_user_email_max_length... OK
  Applying auth.0004_alter_user_username_opts... OK
  Applying auth.0005_alter_user_last_login_null... OK
  Applying auth.0006_require_contenttypes_0002... OK
  Applying auth.0007_alter_validators_add_error_messages... OK
  Applying auth.0008_alter_user_username_max_length... OK
  Applying auth.0009_alter_user_last_name_max_length... OK
  Applying auth.0010_alter_group_name_max_length... OK
  Applying auth.0011_update_proxy_permissions... OK
  Applying auth.0012_alter_user_first_name_max_length... OK
  Applying authtoken.0001_initial... OK
  Applying authtoken.0002_auto_20160226_1747... OK
  Applying authtoken.0003_tokenproxy... OK
  Applying authtoken.0004_alter_tokenproxy_options... OK
  Applying sessions.0001_initial... OK
```

Note(s):
- For the purpose of this quick tutorial this is using sqllite
- The database is needed because the tokens are handled with the database


