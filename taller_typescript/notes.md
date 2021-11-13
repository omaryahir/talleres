
# Typescript


## installation


1. get node 
    You need node so you can install it directly or you can use nvm 
    https://github.com/nvm-sh/nvm

    if you already have it don't worry about this.

2. install typescript:
    npm install -g typescript

3. how to use it 
    tsc hello.ts

4. ^ this will generate automatically a js file 

5. so you can run the program using:
    $ node hello.js


## watch 

how to do it in a single step ?

Ok we can use a watch, in that matter we can just run:

$ tsc --watch testing.ts

## Init 

$ tsc --init


## variables 

**explicit**
variableName: Datatype
(postfix notation)

**inflicted**
variableName = value
^ Typescript will assign 
  the type with the initial value

there primitive/basic types 

### number, boolean and string

take a look to the file variables.ts


