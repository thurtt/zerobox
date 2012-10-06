var urlServer = 'http://www.flyerzero.com';
//var urlServer = 'http://192.168.1.107:3000';
var online = false;
 
function preventBehavior(e) 
 { 
 	e.preventDefault(); 
 };
 document.addEventListener("touchmove", preventBehavior, false);

function onBodyLoad() {		
    document.addEventListener("deviceready", onDeviceReady, false);
}
function online() {
	online = true;
}
function offline() {
	online = false;
}
function onDeviceReady() {  
	
	// Events
    document.addEventListener("online", online, false);
    
    document.addEventListener("offline", offline, false);
    
	$('#main_content').load(function(){
			$('#loading_screen').fadeOut('slow', function(){$('#main_content').fadeIn('slow');});
	});
	
	$('#save_button').click(generateUUID);
	
	var uuid = window.localStorage.getItem('uuid');

	if (!uuid) {
		$('#id_dialog').fadeIn('slow');
	} else {
		$('#loading_screen').fadeIn('slow');
		bootstrap(uuid);
	}
}

function bootstrap(uuid) {
	if (isConnected()) {
		var urlPath = '/zerobox/box?hash=' + uuid + '&size=medium';
		$('#main_content').attr('src', urlServer + urlPath);
	} else {
		setTimeout(bootstrap, 1000);
	}
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

function isConnected() {
	var conn = navigator.network.connection.type;
	return (conn == Connection.WIFI ||
		conn == Connection.ETHERNET ||
		conn == Connection.CELL_2G ||
		conn == Connection.CELL_3G ||
		conn == Connection.CELL_4G); 
}