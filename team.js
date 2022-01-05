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
	var item = document.getElementById("header");
	item.innerHTML = "I'm a Leader";
	var ul=document.createElement("ul");
			ul.setAttribute("class","sprk-c-Accordion sprk-o-VerticalList");
			ul.setAttribute("id","team");
			document.getElementById("main").appendChild(ul);
	
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
			var item = document.createElement("li");
			item.setAttribute("class","sprk-c-Accordion__item");
			item.setAttribute("data-sprk-toggle","container");
			index++;
			item.innerHTML ="<button class='sprk-c-Accordion__summary' data-id='accordion-item-"+index+"' data-analytics='analytics_string_goes_here' data-sprk-toggle='trigger' data-sprk-toggle-type='accordion'><h3 class='sprk-c-Accordion__heading sprk-b-TypeDisplaySeven'>"+currentValue.fname+" "+currentValue.lname+"</h3><svg class='sprk-c-Icon sprk-c-Icon--toggle sprk-c-Accordion__icon sprk-c-Icon--xl' data-sprk-toggle='icon' viewBox='0 0 64 64'><use xlink:href='#chevron-down-circle' data-sprk-toggle='accordionIconUseElement'></use></svg></button><div data-sprk-toggle='content'><div class='sprk-c-Accordion__content sprk-o-Stack sprk-o-Stack--medium'><p><a href='https://drive.rockfin.com/LeaderGoal?TeamMemberCommonId="+currentValue.username+"&viewType=AllGoals' target='_blank'>DRIVE</a></li></p></div></div></li>";
			document.getElementById("team").appendChild(item);
			console.log("Index in array is: "+index);
			
			gadgets.window.adjustHeight();
}};
	
	document.getElementById("button").style.visibility="hidden";
	
	
}

else {
	var item = document.getElementById("header");
 	item.innerHTML = "I'm a Team Member";
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