
# generate a project

STEP 1

```
npx create-react-app my-app --template typescript
```
more info:
https://create-react-app.dev/docs/adding-typescript/

STEP 2
Navigate to **the folder [my-app]** and you can run:
```
npm start
```


# install bootstrap

STEP 1
```
npm install --save bootstrap
```

STEP 2
Edit your App.js/App.tsx add the import statement before App.css
like this:
```
...
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
...
```

# create a component 
Let's use generate-react-cli

STEP 1
```
npm install -g generate-react-cli
```

```
npx generate-react component MyComponent
```







