superagent = require('superagent');

module.exports = function( opts ){
  var API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  var seneca = this,
      name = 'weather',
      weatherByCode;

  seneca.add( {cmd: 'weather'}, weatherByCode );

  weatherByCode = function( args, done ){
    superagent
      .get( API_URL + args.code )
      .end( function( err, resp ){
        done( err, resp.body.main.temp );
      } );
  };


  return {name: name};
};
