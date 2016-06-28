Create project using terminal
-----------------------------

### Using curl

```shell
$ mkdir ui && cd ui
$ curl https://start.spring.io/starter.tgz -d style=web -d style=security -d name=ui | tar -xzvf-
```

### Using Spring Boot CLI

To install on OSX you can use brew:

```shell
$ brew tap pivotal/tap
$ brew install springboot
```

Otherwise you can download from:
http://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#getting-started-installing-the-cli

To make the project use:

```shell
$ spring init --dependencies web,security ui/ && cd ui
```

### Using STS 

```shell
File -> New -> Spring Starter Project
```

### MVN install

If you are on OSX you can use homebrew:

```shell
$ brew install maven
```

We will need mvn so we will download from:
http://maven.apache.org/download.cgi

Extract the file apache-maven-3.3.9-bin.tar.gz and add to 
bash_profile or zshrc.

```shell
export M2_HOME=/path/to/apache-maven-3.3.9
export PATH=$PATH:$M2_HOME/bin
```

http://www.mkyong.com/maven/install-maven-on-mac-osx/

### Run the project

Use:

```shell
$ mvn spring-boot:run 
```

In this section I had an error in pom.xml because I need to compile in java 1.7
and the project by default has 1.8, so if you need you have to change it.

### Package the project

```shell
$ mvn package
$ java -jar target/*.jar
```

### Installing angularjs-bootstrap-jquery

The tutorial of the reference is used wro4j I will use
here npm to install the libraries if you don´t have it
use:

```shell
$ brew install npm
$ npm i angularjs-bootstrap-jquery
```




---------
Front End Assets










References:
https://spring.io/blog/2015/01/12/spring-and-angular-js-a-secure-single-page-application
docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#getting-started-installing-the-cli
https://dzone.com/articles/login-page-angular-js-and
http://www.mkyong.com/maven/install-maven-on-mac-osx/
