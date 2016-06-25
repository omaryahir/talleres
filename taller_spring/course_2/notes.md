#### COURSE


1. Development environment
--------------------------

Download STS (Spring Tool Suite)
Download and install Tomcat

2. Structure of a J2EE Project
------------------------------

## WEB-INF/web.xml 

This file is the web application deployment descriptor of Java Enterprise Web applications.

Inside you can define:
- Servlets (dispatcher)
- Welcome File List (like index)
- Filters (html url)
- Context parameters (constant system admin name email)
- Error pages 
- Security rights and etc. (ssl)


## First Steps to create new project on STS

1. Click on File / New / Dynamic Project (becareful with the path)
2. Add next package on Java Resources:
    src/spring.mvc.servlets/
3. Add Servlets with second click on the package before, with clase name to WelcomeController.
4. Click on 1.Next, 2.Next, 3.Next, Finish.
    

3. MVC on Spring Web MVC
------------------------
- It is a design pattern used in WEB based Java Enterprise Applications.
- MVC pattern is also implemented in other WEB frameworks as well.

MVC         ACTION
MODEL       Includes business specific logic
VIEW        Is responsible for rendering (displaying) model objects 
            inside the user interface using different view technologies
            (JSP, Facelets or Velocity) (browser)
CONTROLLER  Receives user inputs and calls model object on handler mappings 
            and pass model objects to views in order to display output inside 
            the view layer.


How to configure Spring MVC applications in web.xml file



