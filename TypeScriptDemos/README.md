# Typescript 

## Installation and set up

Install **node.js**

Create a new *package.json* file using
```
npm init
```
Install Typescript using 
```
npm i typescript
```
Update npm if necessary `npm install -g npm@10.2.0`. Create a **tsconfig** file `tsc --init`. If it results an error, then try [installing typescript](https://stackoverflow.com/a/36917406) using 
`npm install -g typescript`. Check version using `tsc -v`. 

```
tsc --init. 
```
The *module* parameter inside the generated *tsconfig.json* decides where to run the code. Also enter an appropriate value for the parameter *target*.

## 1 Datatypes and associated methods and properties

Create a typescript file *datatypes.ts*.

Compile the code using `tsc`. This will create a new file *datatypes.js*, which is similar to the ts file. To run the code enter `node datatypes`. Once more changes has been made to the *datatypes.js* file, execute it by running

```
tsc
node datatypes
```