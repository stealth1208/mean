'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Demo = new Module('demo');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Demo.register(function(app) {

  //We enable routing. By default the Package Object is passed to the routes
  // Demo.routes(app);  

  app.set('views', __dirname + '/server/views');  
  
  return Demo;
});
