
# Typescript


## installation
1. get node 
    You need node so you can install it directly or you can use nvm 
    https://github.com/nvm-sh/nvm

    if you already have it don't worry about this.

1. install typescript:
    npm install -g typescript

1. how to use it 
    tsc hello.ts

1. ^ this will generate automatically a js file 

1. so you can run the program using:
    $ node hello.js


## watch 
how to do it in a single step ?
Ok we can use a watch, in that matter we can just run:
$ tsc --watch testing.ts

# Learn With Examples TypeScript :)

## Init 
$ tsc --init

## Two types of variables 

- Explicit
    variableName: Datatype
    (postfix notation)

- Inflicted
    variableName = value
    ^ Typescript will assign 
    the type with the initial value

    there primitive/basic types 

# Caviats:
- In example1/ you can find an example of a petty basic structured folder
- Usually you don't need to take care of ts conversion if you are using a framework

# Run this using:
```bash
tsc learnWithExamples.ts && node learnWithExamples.js
```

# Learn with examples 
Navigate to [learnWithExamples.ts](./learnWithExamples.ts)