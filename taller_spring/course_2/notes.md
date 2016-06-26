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


4. How to configure Spring MVC applications in web.xml file
-----------------------------------------------------------

This is a basic configuration for the file:

<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://xmlns.jcp.org/xml/ns/javaee" xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" id="WebApp_ID" version="3.1">
  <display-name>TestProject</display-name>
  <welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
    <welcome-file>default.html</welcome-file>
    <welcome-file>default.htm</welcome-file>
    <welcome-file>default.jsp</welcome-file>
  </welcome-file-list>
  <context-param>
    <param-name>systemBossEmail</param-name>
    <param-value>omaryahir@hotmail.com</param-value>
  </context-param>
  <servlet>
    <servlet-name>WelcomeServlet</servlet-name>
    <servlet-class>spring.mvc.servlets.WelcomeController</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>WelcomeServlet</servlet-name>
    <url-pattern>/WelcomeController</url-pattern>
  </servlet-mapping>
<!--   <filter>
    <filter-name>UrlFilter</filter-name>
    <filter-class></filter-class>
  </filter>
  <filter-mapping>
    <filter-name>UrlFilter</filter-name>
    <url-pattern>/user/*</url-pattern>
  </filter-mapping> -->
  <error-page>
    <error-code>404</error-code> <!-- page not found -->
    <location>
        /error.jsp
    </location>
  </error-page>
</web-app>



ContextLoaderListener configuration
-----------------------------------

ContextLoaderListener is responisble for creating a root application context
in Java Enterprise Web application inside ServletContext.

You can use different controller and views layer: Struts, JSF or Spring MVC.

To use the context loader add next line into web.xml:
<context-param>
    ...
    <param-value>
        ...
        /WEB-INF/classes/application-context.xml
        /WEB-INF/classes/application-context-dao.xml
        /WEB-INF/classes/security.xml
        ...
    </param-value>
    ...
</context-param>
<listener>
    ...
    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
    ...
</listener>


It depends of the use.



DispatcherServlet
-----------------
This is confured in order to dispatch in-coming HTTP request to handlers and returns 
response to browser.

Spring MVC is designed around DispatcherServlet

DispatcherServlet is configured in web.xml file:

...
</filter-mapping>
<servlet>
    <servlet-name>dispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/classes/mvc-config.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-starup>
</servlet>
<servlet-mapping>
    <servlet-name>dispatcherServlet</servlet-name>
    <url-parttern>/</url-pattern>
</servlet-mapping>
<error-page>
...


Dependency injection in Spring MVC Framework
--------------------------------------------

Dependency injection is also called as IOC (Inversion of Control Principle) it has next properties:
- It is a software design pattern wich is really useful for designing loosely coupled software components.
- You will have more plug-gable and testable code and objects.
- It is easy to reuse your code in other applications.
- The dependencies will not be hard coded inside all java objects/classes instead they will be defined in XML configuration files or configuration classes (Java Config)
- Spring container is responsible for injecting dependencies of objects.
- There are two types of Dependency injection in Spring Framework:
    - Setter injection
    - Construction injection



REST Framework
--------------

BAD EXAMPLES

/getUser?user=obernal       
/addUser                    # Not use verb or action in the names
                                to get user you have to use get of http

GOOD EXAMPLE

/user/obernal  (GET)        
/user/obernal  (POST)       # This example is correct because we identify the 
                              user resource his identification is obernal and 
                              the use of http is GET(consultar) and POST(adicionar)

STATUS CODE OF HTTP

1XX: Information
2XX: Event or success   example 200 is successful
3XX: Redirect
4XX: Client error       example 404 page not found
5XX: Server error


