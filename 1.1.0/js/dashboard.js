const _avatarImage = "";

var chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  info: '#41B1F9',
  blue: '#3245D1',
  purple: 'rgb(153, 102, 255)',
  grey: '#EBEFF6'
};

function charInfoFix() {
  return {
  type: "line",
  data: {
    labels: ["...","...","...","...","...","...","...","...","..."],
    datasets: [
      {
        label: "Balance",
        backgroundColor: "#fff",
        borderColor: "#fff",
        data: [0,0,0,0,0,0,0,0,0],
        fill: false,
        pointBorderWidth: 100,
        pointBorderColor: "transparent",
        pointRadius: 3,
        pointBackgroundColor: "transparent",
        pointHoverBackgroundColor: "rgba(63,82,227,1)",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, 
    layout: {
      padding: {
        left: -10,
        top: 10,
      },
    },
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            display: false,
          },
        },
      ],
    },
  },
};
}

const limitChart = 8;

var iSDBG = true;
var prm1, prm2, prm3, prm4, optget="setting", issetting=false, recovery_code = 0;

function __reload() {	
    $(".cmdSendAction").click(function(event){
		var data_action = $(this).data("action");
		var data_cmd = $(this).data("cmd");
		var data_alert = $(this).data("alert");
		var data_title = $(this).data("title");
		var data_message = $(this).data("message");
		var data_textY = $(this).data("y");
		var data_textN = $(this).data("n");
		
	    var this_success = $(this).parents(".card").children("div.card-header").children("div.valid-save-form").children("span:nth-child(1)");
	    var this_load = $(this).parents(".card").children("div.card-header").children("div.valid-save-form").children("span:nth-child(2)");
		var this_error = $(this).parents(".card").children("div.card-header").children("div.valid-save-form").children("span:nth-child(3)");
	
        modalConfim(data_title, data_message, data_alert, data_textY, data_textN, function (){
		    this_success.show();
		    this_load.hide();
		    this_error.hide();
		    $.post({ url: _HTTP_BASE_WEB + data_action, timeout:500 }, { cmd: data_cmd, token: _TOKEN }).done(function( ers ) {	
			    if (ers.status) {
		            this_success.show();
		            this_load.hide();
		            this_error.hide();
					this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);	
			    } else {
		            this_success.hide();
		            this_load.hide();
		            this_error.show();
					this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);	
			    }
		    }).fail(function(response) {
				this_error.text("Déconnecter");	
		        this_success.hide();
		        this_load.hide();
		        this_error.show();
				this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);				
            });				
			
					
		},function (){
		    this_success.hide();
		    this_load.hide();
		    this_error.hide();		
		});
				
		this_load.text("en attente");			
		this_success.hide();
		this_load.show();
		this_error.hide();
		this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);			
    });


    $(".gadgetOpen").click(function( event ) {

		var data_openID = $(this).parent().children(".gadgetOpen").data("openid");
		var data_id = $(this).parent().children(".gadgetOpen").data("cibleid");		
		var data_title = $(this).parent().children(".gadgetOpen").data("title");
		var data_info = $(this).parent().children(".gadgetOpen").data("info");

		$(".sidebar-item.active").removeClass( "active" );
		$(".sidebar-" + data_openID).addClass( "active" );
		
	    $.each($(".gadgetMenu"), function(i, d) {
			var data_category = $(this).data("category");
            $(".page-title").html('<h3>' + data_title.toUpperCase() + '</h3><p class="text-subtitle text-muted">' + data_info + '</p>');					
	
			if (data_category == data_openID) {
				if (data_id) {
				
				    if (data_id != $(d).data("cibleid")) { 
					   $(this).hide(0);
					} else  { 
					   $(this).show(0);
					} 
				} else { 
				   $(this).slideDown(100);
                }				   
			} else {
				if (data_id) {
					$(this).hide(0); 
				} else { 				
		            $(this).slideUp(100);
                }				
			}			
	    });		
    });
	
    $(".formSendKeyDown").keydown(function(event){    
        sendsPostAutoInput(this);
    });

    $( ".formSendChange" ).on( "change", function(event) {
        sendsPostAutoInput(this);
    });

   if (checkExists("#canvas1")) {
      prm1 = new Chart(document.getElementById("canvas1").getContext("2d"), charInfoFix());
      $("#canvas1-text").text("");
	  $("#canvas1-title").text("Chargement");
   }
   
   if (checkExists("#canvas2")) {
      prm2 = new Chart(document.getElementById("canvas2").getContext("2d"), charInfoFix());
      $("#canvas2-text").text("");
	  $("#canvas2-title").text("Chargement");	  
   }
   
   if (checkExists("#canvas3")) {
      prm3 = new Chart(document.getElementById("canvas3").getContext("2d"), charInfoFix());
      $("#canvas3-text").text("");
	  $("#canvas3-title").text("Chargement");	  
   }
   
   if (checkExists("#canvas4")) {
      prm4 = new Chart(document.getElementById("canvas4").getContext("2d"), charInfoFix());
      $("#canvas4-text").text("");
	  $("#canvas4-title").text("Chargement");	  
   }
    
    $(".recovery-submit").click(function( event ) {
	    var arr = {};
	    $.each($(this).parent().parent().find("input"), function(i, d) {
            var name = $(d).attr("name");
	        var value = $(d).attr("value");
	        if (value == undefined) { value = $(d).val(); }
	        arr[name] = value;	 
	    });		
	    console.log("recovery", arr)
	    
	    switch ($(this).data("mode")) {
            case "getcode":
            	formSend(_HTTP_BASE_WEB + "recovery", arr, function(a){}, function(a){}, "Ok", "↩");	
            	break;
            case "checkcode":
            	formSend(_HTTP_BASE_WEB + "recovery", arr, function(a){
            		if (a.status) {
            			$("#recovery_key").attr("value", $("#recovery_getkey").val());
            			$(".recovery-pages-1").hide();
            			$(".recovery-pages-2").show();
            		}
            	}, function(a){}, "Ok", "↩");	
            	break; 
            case "save":
            	formSend(_HTTP_BASE_WEB + "recovery", arr, function(a){ if (a.status) { window.location.replace(_HTTP_BASE_WEB); } }, function(a){}, "Ok", "↩");	
            	break;                	
	    }    	
        
    });    
    
    if (checkExists("#app")) { 
        infostats();
        setTimeout(() => { synFile(); feather.replace(); }, 500);
        setTimeout(() => { rescanWifi(); feather.replace(); }, 1000);
	    setInterval(infostats, 2000);
	    $('a[data-openid="dashboard"]').click();
    } else {
    	feather.replace();
    } 

}

function infostats() {
    switch (optget) {
        case "setting":
            if (issetting) { optget = "notifications"; }					
            break;
        case "notifications":
			optget = "stats";
            break;						
        case "stats":
			optget = "notifications";   
            break;
    }	
	
    $.post({ url: _HTTP_BASE_WEB + "stats", timeout:500 }, { opt: optget, token: _TOKEN }).done(function( cfg ) {
	    var config = cfg.setting;
        switch (optget) {
            case "setting":	
                if (checkExists("#nav-avatar") && cfg.avatar) {
                    $("#nav-avatar").attr("src", cfg.avatar);
                }	   
                
                if (checkExists("#nav-username")) {
	                $("#nav-username").text(cfg.username);
                }	
                
	            if (checkExists("#avatar")){
		            $("#avatar").attr("placeholder", cfg.avatar);
	            }	 
	   
	            if (checkExists("#username")){
		            $("#username").attr("placeholder", cfg.username);
	            }

	            if (checkExists("#password")){
		            $("#password").attr("placeholder", cfg.password);
	            }
	            
	            if (checkExists("#nameApp")){
		            $("#nameApp").attr("placeholder", cfg.nameApp);
	            }
	   
	            if (checkExists("#tft_bl")) {
		            $("#tft_bl").attr("placeholder", cfg.tft_bl);
	            } 
	   
	            if (checkExists("#tft_bl_fade")) {
		            $("#tft_bl_fade").attr("placeholder", cfg.tft_bl);
	            } 	   
	            if (checkExists("#ntpServer")) {
		            $("#ntpServer").attr("placeholder", cfg.ntpServer);
	            } 
	   
	            if (checkExists("#gmtOffset_sec")) {
		            $("#gmtOffset_sec").attr("placeholder", cfg.gmtOffset_sec);
	            } 
	   
	            if (checkExists("#daylightOffset_sec")) {
		            $("#daylightOffset_sec").attr("placeholder", cfg.daylightOffset_sec);
	            } 
	   
	            if (checkExists("#wifi_ssid")) {
		            $("#wifi_ssid").attr("placeholder", cfg.wifi_ssid);
	            }
	   
	            if (checkExists("#wifi_password")) {
		            $("#wifi_password").attr("placeholder", cfg.wifi_password);
	            } 

	            if (checkExists("#api_host")) {
		            $("#api_host").attr("placeholder", cfg.api_host);
	            } 
	   
	            if (checkExists("#api_port")) {
		            $("#api_port").attr("placeholder", cfg.api_port);
	            } 
	   
	            if (checkExists("#api_key")) {
		            $("#api_key").attr("placeholder", cfg.api_key);
	            } 
	   
	            if (checkExists("#nameApp")) {
		            $("#nameApp").attr("placeholder", cfg.nameApp);
	            } 
       
	            if (cfg && iSDBG) {
		            $("#debug").attr("placeholder", cfg.debug);
                    document.getElementById("debug").value = cfg.debug;					
		            iSDBG = false;
	            }
	            
	            enableDEBUG(cfg.debug);
	            
	            __DEBUG("warning", "WARNING :::", "Veuillez noter que cette page est réservée exclusivement aux développeurs pour les aider à résoudre des problèmes potentiels.")

                if (cfg) {
					issetting = true;
					formSave();
                }	

                break;
            case "notifications":
	            readNotifications(cfg);
                break;						
            case "stats":
	            $.each(cfg, function(i, d) {					
			        if (checkExists(".text_" + i)) {
		                $(".text_" + i).text(d);
			        }	
			        if (checkExists(".textByte_" + i)) {
		                $(".textByte_" + i).text(formatBytes(d));
			        }
			        if (checkExists(".textWidth_" + i)) {
		                $(".textWidth_" + i).width(d + "%");
			        }

			        if (checkExists(".textWidth_flash_free_percent")) {
					    var s = (100 / cfg.flash_size) * (cfg.flash_size - cfg.flash_used);
		                $(".textWidth_flash_free_percent").width(s + "%");
			        }	
					
			        if (checkExists(".textByte_flash_free")) {
					    var s = (cfg.flash_size - cfg.flash_used);
		                $(".textByte_flash_free").text(formatBytes(s));
			        }

			        if (checkExists(".textWidth_flash_used_percent")) {
					    var s = (100 / cfg.flash_size) * cfg.flash_used;
		                $(".textWidth_flash_used_percent").width(s + "%");
			        }
					
			        if (checkExists(".textByte_flash_used")) {
					    var s = cfg.flash_used;
		                $(".textByte_flash_used").text(formatBytes(s));
			        }	


			        if (checkExists(".textWidth_getRamUsage_percent")) {
					    var s = (100 / cfg.ramSize) * cfg.ramUsed;
		                $(".textWidth_getRamUsage_percent").width(s + "%");
			        }
					
			        if (checkExists(".text_getRamUsage")) {
					    var s = (100 / cfg.ramSize) * cfg.ramUsed;
		                $(".text_getRamUsage").text(Math.round(s) + "%");
			        }
					
			        if (checkExists(".text_getCpuUsage")) {
					    var s = cfg.getCpuUsage;
		                $(".text_getCpuUsage").text(Math.round(s) + "%");
			        }
					
	            }); 
				
	            if (checkExists("#canvas1")) {
		            prm1.data.datasets[0].label = "cpu"; 
		            prm1.data.labels.push(new Date().toLocaleString());
		            prm1.data.labels = prm1.data.labels.slice(-limitChart, limitChart+1);          		  
		            prm1.data.datasets[0].data = prm1.data.datasets[0].data.slice(-limitChart, limitChart+1);          
		            prm1.data.datasets[0].data.push(cfg.getCpuUsage);
		            $("#canvas1-title").text("CPU");
		            $("#canvas1-text").text(cfg.getCpuUsage + "%");		  
		            prm1.update();
	            }
	   
	            if (checkExists("#canvas2")) {
		            prm2.data.datasets[0].label = "ram"; 
		            prm2.data.labels.push(new Date().toLocaleString());
		            prm2.data.labels = prm2.data.labels.slice(-limitChart, limitChart+1);          		  
		            prm2.data.datasets[0].data = prm2.data.datasets[0].data.slice(-limitChart, limitChart+1);          
		            prm2.data.datasets[0].data.push(cfg.ramfree);
		            $("#canvas2-title").text("RAM Libre");
		            $("#canvas2-text").text(formatBytes(cfg.ramfree, 2));		  
		            prm2.update();
	            }
	   

	            if (checkExists("#canvas3")) {
		            prm3.data.datasets[0].label = "stockage"; 
		            prm3.data.labels.push(new Date().toLocaleString());
		            prm3.data.labels = prm3.data.labels.slice(-limitChart, limitChart+1);          		  
		            prm3.data.datasets[0].data = prm3.data.datasets[0].data.slice(-limitChart, limitChart+1);          
		            prm3.data.datasets[0].data.push((cfg.flash_size - cfg.flash_used));
		            $("#canvas3-title").text("STOCKAGE Libre");
		            $("#canvas3-text").text(formatBytes((cfg.flash_size - cfg.flash_used), 2));		  
		            prm3.update();
	            }
	   

	            if (checkExists("#canvas4")) {
		            prm4.data.datasets[0].label = "signal"; 
		            prm4.data.labels.push(new Date().toLocaleString());
		            prm4.data.labels = prm4.data.labels.slice(-limitChart, limitChart+1);          		  
		            prm4.data.datasets[0].data = prm4.data.datasets[0].data.slice(-limitChart, limitChart+1);          
		            prm4.data.datasets[0].data.push(cfg.wifiEtats);
		            $("#canvas4-title").text("Wifi signal");
		            $("#canvas4-text").text(cfg.wifiEtats + "%");		  
		            prm4.update();
	            }
	            
                break;
        }		
   });  	
}

var __y, __n;
function modalConfim(title, message, alert, textY, textN, y, n) {
	console.log("modalConfim", title);
	__y = y;
	__n = n;
	
    var colorBG, colorTITLE, colorBTN1, colorBTN2;
	if (alert == "success") {
		colorBG = "bg-success";
		colorTITLE = "white";
		colorBTN1 = "light-secondary";
		colorBTN2 = "success";
	} else if (alert == "info") {
		colorBG = "bg-info";
	    colorTITLE = "white";
		colorBTN1 = "light-secondary";
		colorBTN2 = "primary"; 
	} else if (alert == "warning") {
		colorBG = "bg-warning";
		colorTITLE = "white";
		colorBTN1 = "light-secondary";
		colorBTN2 = "warning"; 
	} else if (alert == "dark") {
		colorBG = "bg-dark";
		colorTITLE = "white";
		colorBTN1 = "light-secondary";
		colorBTN2 = "dark"; 
	}  else if (alert == "danger")  {
		colorBG = "bg-danger";
		colorTITLE = "white";
		colorBTN1 = "light-secondary";
		colorBTN2 = "danger"; 
	} else {
		y();
		return; 
	}
			   
	if (checkExists("#alert-modal")) {
		$("#alert-modal").remove();
	} 
  
	var al = '<button type="button" id="alert-modal-click" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#alert-modal" style="display:none"></button>';
        al += '             <div class="modal fade text-left" id="alert-modal" tabindex="-1" role="dialog" aria-labelledby="alert-modal-1" aria-hidden="true">';
        al += '                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">';
        al += '                    <div class="modal-content">';
        al += '                       <div class="modal-header ' + colorBG + '">';
        al += '                          <h5 class="modal-title ' + colorTITLE + '" id="alert-modal-1">' + title + '</h5>';
        al += '                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>';
        al += '                       </div>';
        al += '                       <form>';
        al += '                          <div class="modal-body">' + message;
        al += '                          </div>';
        al += '                          <div class="modal-footer">';
        al += '                             <button onclick="__n()" type="button" class="btn btn-' + colorBTN1 + '" data-bs-dismiss="modal"><i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">' + textN + '</span></button>';
        al += '                             <button onclick="__y()" type="button" class="btn btn-' + colorBTN2 + ' ml-1" data-bs-dismiss="modal"><i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">' + textY + '</span></button>';
        al += '                          </div>';
        al += '                      </form>';
        al += '                    </div>';
        al += '                </div>';
        al += '              </div>';
		$("body").append(al);
		$("#alert-modal-click").click();
}

  
  
function checkExists(sel) {
    var status = false;
    if ($(sel).length) status = true;
    return status;
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals; 
    const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

function formSend(url, arr, y, n, textY="Oui", textN="Non") {
    arr["token"] = _TOKEN;
    $.post({ url: url, timeout:500 } , arr).done(function( res ) { 
    	modalConfim( res.title, res.message, res.alert, textY, textN, function(){
    		y(res);
    	}, function(){
    		n(res);
    	}); 
    });
}

function formSave() {
    $("form").submit(function( event ) {
	    event.preventDefault();
	    var arr = {};
	    $.each($(this).find("input"), function(i, d) {
            var name = $(d).attr("name");
	        var value = $(d).attr("value");
	        arr[name] = value;	 
	    });	
	    formSend(_HTTP_BASE_WEB + "save", arr, function(){}, function(){},"Accepter","↩");
    });
}	

var timp, time, iskeypad;
function sendsPostAutoInput(_this) {

	
		var this_success = $(_this).parents(".card").children("div.card-header").children("div.valid-save-form").children("span:nth-child(1)");
		var this_load = $(_this).parents(".card").children("div.card-header").children("div.valid-save-form").children("span:nth-child(2)");
		var this_error = $(_this).parents(".card").children("div.card-header").children("div.valid-save-form").children("span:nth-child(3)");
		
        this_load.text("en attente");		
		this_success.hide();
		this_load.show();
		this_error.hide();
		
	clearTimeout(timp);
    time = new Date().getTime();
    timp = setTimeout( async () => {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - time;
		let __value = $(_this).val();
	    let __name = $(_this).attr("name");
	    
	    //console.log("value", __value);
	    //console.log("name", __name)	
        if (timeDiff >= 1000 && iskeypad != __value) {
			clearTimeout(timp);
	    	var arr = {};
			arr["token"] = _TOKEN;
			arr[__name] = __value;// > div > span:nth-child(0)
			iskeypad = __value;
					
            $.post({ url: _HTTP_BASE_WEB + "save", timeout:500 } , arr).done(function( res ) {
			    if (res.alert == "success") {
					//this_success.text(res.message);
		            if (__name == "username" && checkExists("#nav-username")) { $("#nav-username").text(__value); };
		            if (__name == "avatar" && checkExists("#nav-avatar")) { $("#nav-avatar").attr("src", (__value ? __value : _avatarImage)); };  					
					
		            this_success.show();
		            this_load.hide();
		            this_error.hide();
			    } else {
					this_error.text(res.message);	
		            this_success.hide();
		            this_load.hide();
		            this_error.show();
			    }
		        this_success.fadeOut(2500);
		        this_load.fadeOut(2500);
		        this_error.fadeOut(5500);				
		    }).fail(function(response) {
				this_error.text("Déconnecter");	
		        this_success.hide();
		        this_load.hide();
		        this_error.show();
		        this_success.fadeOut(2500);
		        this_load.fadeOut(2500);
		        this_error.fadeOut(5500);				
            });	
            //formSend(arr);
        }
    }, 1000);
}	


//*********************************************************************************
//******************************* Notifications ***********************************
//*********************************************************************************
function readNotifications(data) {   

    if (checkExists("#notifications") && checkExists("#notifications-count")) {
		////console.log(data);
        $.each(data, function(i, dt) {
			////console.log(dt);
			if (checkExists("#notifications-id-" + i)) {

			} else {
				var icon, colorBG; 
				if (dt.alert == "success") {
			        colorBG = "bg-success";
			        icon = "check";
			    } else if (dt.alert == "info") {
			        colorBG = "bg-info";
			        icon = "alert-circle";
			    } else if (dt.alert == "warning") {
			        colorBG = "bg-warning";
			        icon = "alert-triangle";
			    } else {
			        colorBG = "bg-danger";
			        icon = "x";
			    }

				var noty = '';
                noty += '<li id="notifications-id-' + i + '" class="notifications-messages list-group-item border-0 align-items-start">';
                noty += '    <div class="avatar ' + colorBG + ' me-3">';
                noty += '        <span class="avatar-content"><i data-feather="' + icon + '"></i></span>';
                noty += '     </div>';
                noty += '    <div>';
                noty += '        <h6 class="text-bold">' + dt.title + '</h6>';
                noty += '        <p class="text-xs">' + dt.message + '</p>';
                noty += '    </div>';
                noty += '    <div style="position: absolute;right: 0%;margin-right: 5px;"><a id="notifications-id-erase-' + i + '" class="notifications-erase-btn-' + i + ' badge bg-dark" style="padding: .2rem .35rem;opacity: 0.6;">x</a><div>';					
                noty += '</li>';
				
			    $("#notifications").prepend(noty);
				$('#notifications').animate({scrollTop: 0}, 'slow');
					
				document.querySelector(".notifications-erase-btn-" + i ).addEventListener("click", (event) => {
			        var id = event.target.id.replace("notifications-id-erase-", "");
                    if (checkExists("#notifications-id-"+id)) {
				        removeNotifications(id, event);
			        }
                });
			}
			
		
        });
		
	    $('.notifications-messages').each(function(i2, obj) {
			var id = obj.id.replace("notifications-id-", "");
			if (Object.hasOwn(data, id) === false) {
		        $("#notifications-id-" + id).remove();	
		    }                   		   
        });	
		
		feather.replace();
		if (checkExists("#notifications-count")) {
			var count = $('.notifications-messages').length;
		    if (count == 0 || count == "") {
		        $("#notifications-count").text("");
	        } else {
		        $("#notifications-count").text(count);
	        }
	    }		
		
    }	
}

function removeNotifications(id, event) {
	if (checkExists("#notifications-id-" + id)) {
		$.post({ url: _HTTP_BASE_WEB + "notifications", timeout:500 }, { erase: id, token: _TOKEN }).done(function( ers  ) {	
			if (ers.status) {
		        $("#notifications-id-" + id).remove();
			}
		});
	}	
}	
//*********************************************************************************

function __File(_this, key="upload", idval="", infoval="") {
  let file = _this.files[0];
  let _baseThis = $(_this).parent().parent().parent().parent();

  let alert_success = _baseThis.children(".card-header").children("div.valid-save-form").children("span:nth-child(1)");
  let alert_load = _baseThis.children(".card-header").children("div.valid-save-form").children("span:nth-child(2)");
  let alert_error = _baseThis.children(".card-header").children("div.valid-save-form").children("span:nth-child(3)");
  
  let upload_container = _baseThis.children(".card-content").children("div.card-body").children("table.isprogresstable");  
  let upload_name = upload_container.children("tbody").children("tr").children("td:nth-child(1)");  
  let upload_bar = upload_container.children("tbody").children("tr").children("td:nth-child(2)").children("div.progress").children("div.progress-bar");  
  let upload_info = upload_container.children("tbody").children("tr").children("td:nth-child(3)");

  let upload_input = _baseThis.children(".card-content").children("div.card-body").children("div").children("div").children("div").children("input");  
    
  alert_success.hide();
  alert_load.show();
  alert_error.hide();
  alert_success.fadeOut(2500); alert_load.fadeOut(2500); alert_error.fadeOut(5500);  

  // alert(file.name+" | "+file.size+" | "+file.type);	
  upload_name.html("<b>" + file.name + "</b>");
  upload_bar.width("0%");
  upload_container.show(0);

  var formdata = new FormData();
  formdata.append("token", _TOKEN);
  formdata.append("file1", file);
  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", function (event) {
    var percent = (event.loaded / event.total) * 100;
    upload_info.html( "<b>" + formatBytes(event.loaded) + "</b>");
    upload_bar.attr("aria-valuenow", Math.round(percent)); 
    upload_bar.width(Math.round(percent) + "%");
    if (percent >= 100) {
	   upload_container.hide(0);
	   upload_bar.width("0%");
    }
  }, false);
  
  ajax.addEventListener("load", function (event) {
    synFile();
	alert_success.show();
	alert_load.hide();
	alert_error.hide();
	alert_success.fadeOut(2500); alert_load.fadeOut(2500); alert_error.fadeOut(5500);
	if (idval != null && checkExists(".value-name-" + idval)) { 
		$(".value-name-" + idval).prop('disabled', true);
		$(".value-name-" + idval).val(infoval+file.name);
		sendsPostAutoInput($(".value-name-" + idval));
	}/*
  	if (checkExists(".src-name-" + idval)) { $(".src-name-" + idval).attr("src", infoval+file.name); } 
  	if (checkExists(".href-name-" + idval)) { $(".href-name-" + idval).attr("href", infoval+file.name); }  	
  	if (checkExists(".text-name-" + idval)) { $(".text-href-" + idval).text(infoval+file.name); }  	*/
  }, false);
  
  ajax.addEventListener("error", function (event){
    alert_error.text("Échec de l'envois");	
	alert_success.show();
	alert_load.hide();
	alert_error.hide();
	alert_success.fadeOut(2500); alert_load.fadeOut(2500); alert_error.fadeOut(5500);	
  }, false);
  
  ajax.addEventListener("abort", function (event){
    alert_error.text("Envois interrompu");	
	alert_success.show();
	alert_load.hide();
	alert_error.hide();
	alert_success.fadeOut(2500); alert_load.fadeOut(2500); alert_error.fadeOut(5500);	
  }, false);

  ajax.open("POST", _HTTP_BASE_WEB + key, true);  
  ajax.send(formdata);
}

function updateFile00(_this) {
  var file = _this.files[0];
  //console.log("file:", file);
  // alert(file.name+" | "+file.size+" | "+file.type);	
  $('#update_name').html("<b>" + file.name + "</b>");
  $("#update_progress_bar").width("0%");
  $("#update_progress_bar").parent().parent().parent().parent().parent().show(0);
  var formdata = new FormData();
  formdata.append("file1", file);

  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.addEventListener("load", completeHandler, false);
  ajax.addEventListener("error", errorHandler, false);
  ajax.addEventListener("abort", abortHandler, false);

  ajax.open("POST", _HTTP_BASE_WEB+ "update", true);  
  ajax.send(formdata);
}

function listFilesButton() {
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", "/listfiles", false);
  xmlhttp.send();
  document.getElementById("detailsheader").innerHTML = "<h3>Files<h3>";
  document.getElementById("details").innerHTML = xmlhttp.responseText;
}

function actionFile(filename, action) {
  var urltocall = _HTTP_BASE_WEB + "file?name=" + filename + "&action=" + action + "&token=" + _TOKEN;
  xmlhttp=new XMLHttpRequest();
  if (action == "delete") {
    xmlhttp.open("GET", urltocall, false);
    xmlhttp.send();
    synFile();
  }
  if (action == "download") {
    window.open(urltocall,"_blank");
  }
}


    function rescanWifi() {
    	let h;
	    $.post({ url: _HTTP_BASE_WEB + "wifi-s", timeout:500 } , { token: _TOKEN }).done(function( data ) {	       
           $.each(data, function(i, d) {
                h += '     <tr>';
                h += '         <td>' + (i+1) + '</td>';
                h += '         <td>' + d.ssid + '</td>';
                h += '         <td>' + d.channel + '</td>';				  
                h += '         <td><span class="badge bg-' + ( d.hidden ? "warning" : "success") + '">' + ( d.hidden ? "cacher" : "visible") + '</span></td>';
                h += '         <td><span class="badge bg-' + ( !d.secure ? "dark" : "warning") + '">' + ( !d.secure ? "non sécurisé" : d.crypt + " " + d.mode) + '</span></td>';
                h += '         <td><span class="badge bg-dark">' + d.mode + '</span></td>';			  
                h += '         <td><span class="bg-outline-dark"><b>' + d.etats + '</b>%</span></td>';
		        h += '		    <td>';
                h += '             <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#lg-wifi-' + (i+1) + '">Connecter</button>';
                h += '             <div class="modal fade text-left" id="lg-wifi-' + (i+1) + '" tabindex="-1" role="dialog" aria-labelledby="lg-wifi-modal-' + (i+1) + '" aria-hidden="true">';
                h += '                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">';
                h += '                    <div class="modal-content">';
                h += '                       <div class="modal-header">';
                h += '                          <h4 class="modal-title" id="lg-wifi-modal-' + (i+1) + '">Ce connecter</h4>';
                h += '                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>';
                h += '                       </div>';
                h += '                       <form>';
                h += '                          <div class="modal-body">';
                h += '                              <label>SSID </label>';
                h += '                              <div class="form-group">';
                h += '                                <input type="text" name="wifi_ssid"  value="' + d.ssid + '" class="form-control">';
                h += '                              </div>';
                h += '                              <label>Mots de passe </label>';
                h += '                              <div class="form-group">';
                h += '                                <input type="password" name="wifi_password" value="" placeholder="" class="form-control">';
                h += '                              </div>';
                h += '                          </div>';
                h += '                          <div class="modal-footer">';
                h += '                             <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal"><i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Annuler</span></button>';
                h += '                             <button type="submit" class="btn btn-primary ml-1" data-bs-dismiss="modal"><i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Connecter</span></button>';
                h += '                          </div>';
                h += '                      </form>';
                h += '                    </div>';
                h += '                </div>';
                h += '              </div>';								
                h += '		</td>';
                h += '     </tr>';  
           });
	       $("#listwifi").html(h);	   
	       new simpleDatatables.DataTable(document.querySelector('#wifitable'));
           formSave();
	    });
    }


    function synFile() {
    	let h = "";
	    $.get({ url: _HTTP_BASE_WEB + "listfiles?dir=/&token="+_TOKEN, timeout:1500 }).done(function( data ) {	       
           $.each(data, function(i, d) {
           	//console.log(i, d);
           	    if (d.size != 0) {
                    h += '     <tr>';
                    h += '         <td>' + (i+1) + '</td>';
                    h += '         <td>' + d.name + '</td>';
                    h += '         <td>' + d.sizetxt + '</td>';	
                    h += '         <td><div class="divider divider-right"><button type="button" onclick="actionFile(\'' + d.name + '\', \'download\')" class="btn btn-primary"><i data-feather="download" width="20"></i></button> <button type="button" onclick="actionFile(\'' + d.name + '\', \'delete\')" class="btn btn-danger"><i data-feather="trash" width="20"></i></button></div></td>';	                    
                    h += '     </tr>'; 
           	    }
           });
	       $("#synfilemanager").html(h);
	       feather.replace();
	       new simpleDatatables.DataTable(document.querySelector('#synfiletable'));
           formSave();
	    });
    }
    
    var __iSDeb = false;
    function enableDEBUG(enabled) {
        let nodedev = document.querySelectorAll("code");
        for (let i = 0; i < nodedev.length; i++) {
        	if (enabled === true || enabled === "true") {
        		__iSDeb = true;
        		nodedev[i].style.display = "block";
        	} else {
        		__iSDeb = false;
        		nodedev[i].style.display = "none";
        	}
        }  
        
        if (!__iSDeb) {
        	setInterval(__CLEARCONSOLE, 1000);
        }
    }    
    
    function __CLEARCONSOLE() { console.clear(); }    
    
    function __DEBUG(alert, title, message) {
        if (__iSDeb) {
			if (alert == "warning") {
                console.warn(title, message);
			} else if (res.alert == "error") {
                console.error(title, message);
			} else {
                console.log(title, message);
			}
        } else {
        	__CLEARCONSOLE();
        }
    }      
