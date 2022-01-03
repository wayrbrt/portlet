function getParameterByName(name) {
				name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				results = regex.exec(location.search);
				return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
			}		
			function updateRoleName(){
                var prefs = gadgets.views.getParams(); console.log(prefs);
				var userId = prefs.sabaContext.userId; console.log(userId);
				var userName = prefs.sabaContext.userName; console.log(userName);
                var apiCertificate = prefs.sabaContext.apiCertificate; console.log(apiCertificate);
				var certificate=prefs.sabaContext.certificate; console.log(certificate);
				var sabaLocale=prefs.sabaContext.sabaLocale; console.log(sabaLocale);
				var urlHost = parent.location;  console.log(urlHost);
				urlHost=urlHost.toString(); 
				var n= urlHost.indexOf("."); 
				var prefix=urlHost.substring(0,n);
				var m=urlHost.indexOf('/Saba');
				var postfix=urlHost.substring(n,m);
				var url=prefix+"-api"+postfix+"/v1/people/"+userId; console.log(url);
				var params = {};		

				var headers = {	"SabaCertificate":apiCertificate };
				params[gadgets.io.RequestParameters.HEADERS] = headers;
				params[gadgets.io.RequestParameters.CONTENT_TYPE] = "application/json;charset=UTF-8";
				params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET; 
					console.log(params);
              		gadgets.io.makeRequest(url, result, params);
 console.log(url);

};
   
function result(obj) {
	const res = JSON.parse(obj.text);
		console.log(res);

if (res.is_manager === true) {
	var item = document.createElement("div");
	item.setAttribute("id","Team");
 item.innerHTML = "<p>I'm a Leader</p>";
document.getElementById("Completed").appendChild(item);

	var prefs = gadgets.views.getParams(); console.log(prefs);
				var userId = prefs.sabaContext.userId; console.log(userId);
				var userName = prefs.sabaContext.userName; console.log(userName);
                var apiCertificate = prefs.sabaContext.apiCertificate; console.log(apiCertificate);
				var certificate=prefs.sabaContext.certificate; console.log(certificate);
				var sabaLocale=prefs.sabaContext.sabaLocale; console.log(sabaLocale);
				var urlHost = parent.location;  console.log(urlHost);
				urlHost=urlHost.toString(); 
				var n= urlHost.indexOf("."); 
				var prefix=urlHost.substring(0,n);
				var m=urlHost.indexOf('/Saba');
				var postfix=urlHost.substring(n,m);
				var url=prefix+"-api"+postfix+"/v1/people?type=internal&q=(manager_id%3D%3D"+userId+",status%3D%3DActive)&includeDetails=true"; console.log(url);
				var params = {};		

				var headers = {	"SabaCertificate":apiCertificate };
				params[gadgets.io.RequestParameters.HEADERS] = headers;
				params[gadgets.io.RequestParameters.CONTENT_TYPE] = "application/json;charset=UTF-8";
				params[gadgets.io.RequestParameters.METHOD] = gadgets.io.MethodType.GET; 
					console.log(params);
              		gadgets.io.makeRequest(url, tms, params);
 console.log(url);
	
	function tms(x) {
		const Tm = JSON.parse(x.text);
			console.log(Tm);
			var arr = Tm.results;
		console.log(arr);
		arr.forEach(result);
	
//creates html div card for each results
		
		function result(currentValue, index) {
			var item = document.createElement("ul");
			item.innerHTML ="<li><a href='https://drive.rockfin.com/LeaderGoal?TeamMemberCommonId="+currentValue.username+"&viewType=AllGoals' target='_blank'>"+currentValue.fname+" "+currentValue.lname+"</a></li>";
			document.getElementById("Team").appendChild(item);
}};
	
}

else {
	var item = document.createElement("div");
 	item.innerHTML = "<p>I'm a Team Member</p>";
document.getElementById("Completed").appendChild(item);
}

/*	var arr = res.results;
		console.log(arr);
	arr.forEach(result);
	
//creates html div card for each results
		
		function result(currentValue, index) {
			var item = document.createElement("div");
			item.setAttribute("class","sprk-o-Stack__item sprk-o-Stack__item--flex@l sprk-c-Card sprk-o-Stack");
			item.innerHTML ="<a href='#nogo' class='sprk-o-Stack__item'><img class='sprk-c-Card__media' alt='Learn more' src='https://spark-assets.netlify.app/desktop.jpg'></a><div class='sprk-o-Stack__item sprk-c-Card__content sprk-o-Stack sprk-o-Stack--large'><h3 class='sprk-b-TypeDisplayFive sprk-o-Stack__item'>"+currentValue.offering_temp_id.displayName+"</h3><p class='sprk-b-TypeBodyTwo sprk-o-Stack__item'><b>Completed On:</b>"+currentValue.completion_date+"</p><div class='sprk-o-Stack__item sprk-o-Stack sprk-o-Stack--end-column'><a href='https://quickenloanssb.sabacloud.com/Saba/Web_spf/NA6T1SNB076/app/me/learningeventdetail/"+currentValue.offering_temp_id.id+"' class='sprk-o-Stack__item sprk-b-Link sprk-b-Link--has-icon'>Review<svg class='sprk-c-Icon' viewBox='0 0 64 64'><use xlink:href='#arrow-right' /></svg></a></div></div>";
			document.getElementById("Completed").appendChild(item);
				
			console.log("Index in array is: "+index+" :: Value is: " +currentValue.offering_temp_id.displayName);

	
}
*/	
};

(document); 