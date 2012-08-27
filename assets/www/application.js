var urlServer = 'http://www.flyerzero.com';
//var urlServer = 'http://192.168.1.107:3000';
 
function preventBehavior(e) 
 { 
 	e.preventDefault(); 
 };
 document.addEventListener("touchmove", preventBehavior, false);

function onBodyLoad() {		
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {  
	$('#main_content').load(function(){
			$('#loading_screen').fadeOut('slow', function(){$('#main_content').fadeIn('slow');});
	});
	$('#save_button').click(generateUUID);
	var uuid = window.localStorage.getItem('uuid');
	if (!uuid) {
		$('#id_dialog').fadeIn('slow');
	} else {
		bootstrap(uuid);
	}
}

function bootstrap(uuid) {
	var urlPath = '/zerobox/box?hash=' + uuid + '&size=medium';
	$('#loading_screen').fadeIn('slow');
	$('#main_content').attr('src', urlServer + urlPath);
}

function generateUUID() {
	var id = $('#device_id').val();
	if(id.length <= 0){
		alert("Seriously? All we're asking for is one character.")
	} else {
		$('#id_dialog').fadeOut('slow');
		var name = device.name;
		var uuid = CryptoJS.SHA1(name + id );
		window.localStorage.setItem('uuid', uuid);
		bootstrap(uuid);
	}
}