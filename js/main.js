/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$(document).ready(function() {
	
	setTimeout(function(){
		$('header').addClass('loaded');
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);
	
});

function enviar(){
	console.log("entrou")
	console.log(document.getElementById('email').value)
	Email.send(document.getElementById('email').value,
		   "enactusufal@gmail.com",
		   document.getElementById('subject').value,
		   document.getElementById('message').value,
		     {
        	token: "376193ce-a168-4e13-9dac-19078e7b04d5",
        	callback: function done(message) { swal("Enviado!", "Em breve entraremos em contato.", "success"); console.log(message) }   
    		});
}
