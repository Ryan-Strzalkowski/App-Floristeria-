// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Floristeria',
	dialog: {
		title: 'Floristeria ☺',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		{
		path: '/categorias/',
    	url: 'categorias.html',
    	name: 'categorias',
  		},
		{
		path: '/rosas/',
    	url: 'rosas.html',
    	name: 'rosas',
  		},
		{
		path: '/mis ordenes/',
    	url: 'mis ordenes.html',
    	name: 'mis ordenes',
  		},
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnAlerta').on('click',function(){
	app.dialog.alert('Hola Diseño Web 2 ♠');	
});


$$('#btnLogin').on('click', function(e){
	e.preventDefault();
	
	var usuario = $$('#username').val();
	var password = $$('#password').val();
	
	if (usuario == 'admin' && password == "admin"){
		$$('#nombre').html('Hola Ryan S.');
		app.loginScreen.close('.login-screen');		
	}else{
		app.dialog.alert('Datos Ingresados no son validos');
	}
  
});























 

