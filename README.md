## Bootstrap

```js
npm install bootstrap
```

## Concurrently,

Ele irá executar o ng server e o json-server

```js
npm install concurrently
```

"Start" = tem que estar desta forma

```js
{
"name": "curso-ngrx",
"version": "0.0.0",
"scripts": {
"ng": "ng",
"start": "concurrently \"ng serve\" \"json-server --watch db json\"" ,
"build": "ng build",
"watch": "ng build --watch --configuration development",
"test": "ng test"
},
```

## json-server

npm install json-server

## Para emular o projeto

npm start

## Para verificar o json

http://localhost:3000/Usuarios

ou

http://localhost:3000/Usuarios/1

npm install @ngrx/store --save
$ npm install @ngrx/effects --save
npm install @ngrx/store-devtools --save

extensão crome ngrx
Redux DevTools
