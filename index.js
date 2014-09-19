require('seneca')()
  .use( './libs/weather' )
  .listen( 3001 )
  .ready( function(){
    this.act( {cmd: 'weather', code: 'barcelona,es'}, console.log )
  } );

