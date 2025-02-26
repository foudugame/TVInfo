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
var prm1, prm2, prm3, prm4, optget="setting", issetting=false;

// window.addEventListener("load", function() {
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
		var data_id = $(this).parent().children(".gadgetOpen").data("id");		
		var data_title = $(this).parent().children(".gadgetOpen").data("title");
		var data_info = $(this).parent().children(".gadgetOpen").data("info");

		$(".sidebar-item.active").removeClass( "active" );
		$(".sidebar-" + data_openID).addClass( "active" );
		
	    $.each($(".gadgetMenu"), function(i, d) {
			var data_category = $(this).data("category");
            $(".page-title").html('<h3>' + data_title.toUpperCase() + '</h3><p class="text-subtitle text-muted">' + data_info + '</p>');			
			if (data_category == data_openID) {
				
				
				/*	*/
				if (data_id) {
					//$(this).animate({opacity: "1"}); 
				    if (data_id != $(d).attr("id")) { 
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
        sensPostAutoInput(this, event);
    });

    $( ".formSendChange" ).on( "change", function(event) {
        sensPostAutoInput(this, event);
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
  
    setInterval(infostats, 1000);  
	infostats();
	feather.replace();
    $("li.sidebar-wifi.sidebar-item.has-sub > ul > li:nth-child(3) > a").click();
}
//});


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
			
                if (checkExists("#username") && checkExists("#avatar")) {
                    $("#avatar").attr("src", (cfg.avatar ? cfg.avatar : _avatarImage));
	                $("#username").text(cfg.username);
                }	   
	   
	            if (checkExists("#nameApp")){
		            $("#nameApp").attr("placeholder", cfg.nameApp);
	            }
	   
	            if (checkExists("#tft_bl")) {
		            $("#tft_bl").attr("placeholder", cfg.tft_bl);
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
			        if (checkExists(".textWidth_" + i)) {//d+"%"
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
		            prm3.data.datasets[0].data.push(cfg.flash_free);
		            $("#canvas3-title").text("STOCKAGE Libre");
		            $("#canvas3-text").text(formatBytes(cfg.flash_free, 2));		  
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
	} else {
		colorBG = "bg-danger";
		colorTITLE = "white";
		colorBTN1 = "light-secondary";
		colorBTN2 = "danger"; 
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
if (!+bytes) return '0 Bytes'

const k = 1024
const dm = decimals < 0 ? 0 : decimals
const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']

const i = Math.floor(Math.log(bytes) / Math.log(k))

return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

function formSend(arr) {
    arr["token"] = _TOKEN;
    $.post({ url: _HTTP_BASE_WEB + "save", timeout:500 } , arr).done(function( res ) {			   
		var colorBG, colorTITLE, colorBTN1, colorBTN2;

			  if (res.alert == "success") {
			     colorBG = "bg-success";
			     colorTITLE = "white";
			     colorBTN1 = "light-secondary";
			     colorBTN2 = "success";
			  } else if (res.alert == "info") {
			     colorBG = "bg-info";
			     colorTITLE = "white";
			     colorBTN1 = "light-secondary";
			     colorBTN2 = "primary"; 
			  } else if (res.alert == "warning") {
			     colorBG = "bg-warning";
			     colorTITLE = "white";
			     colorBTN1 = "light-secondary";
			     colorBTN2 = "warning"; 
			  } else if (res.alert == "dark") {
			     colorBG = "bg-dark";
			     colorTITLE = "white";
			     colorBTN1 = "light-secondary";
			     colorBTN2 = "dark"; 
			  } else {
			     colorBG = "bg-danger";
			     colorTITLE = "white";
			     colorBTN1 = "light-secondary";
			     colorBTN2 = "danger"; 
			  }
			   
			  if (checkExists("#alert-modal")) {
				 $("#alert-modal").remove();
			  } 
			  
			  var al = '<button type="button" id="alert-modal-click" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#alert-modal" style="display:none"></button>';
              al += '             <div class="modal fade text-left" id="alert-modal" tabindex="-1" role="dialog" aria-labelledby="alert-modal-1" aria-hidden="true">';
              al += '                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">';
              al += '                    <div class="modal-content">';
              al += '                       <div class="modal-header ' + colorBG + '">';
              al += '                          <h5 class="modal-title ' + colorTITLE + '" id="alert-modal-1">' + res.title + '</h5>';
              al += '                          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><i data-feather="x"></i></button>';
              al += '                       </div>';
              al += '                       <form>';
              al += '                          <div class="modal-body">' + res.message;
              al += '                          </div>';
              al += '                          <div class="modal-footer">';
              al += '                             <button type="button" class="btn btn-' + colorBTN1 + '" data-bs-dismiss="modal"><i class="bx bx-x d-block d-sm-none"></i><span class="d-none d-sm-block">Fermer</span></button>';
              al += '                             <button href="' + ( res.link == "" ? res.link : "") + '" type="submit" class="btn btn-' + colorBTN2 + ' ml-1" data-bs-dismiss="modal"><i class="bx bx-check d-block d-sm-none"></i><span class="d-none d-sm-block">Accepter</span></button>';
              al += '                          </div>';
              al += '                      </form>';
              al += '                    </div>';
              al += '                </div>';
              al += '              </div>';
			  $("body").append(al);
			  $("#alert-modal-click").click();
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
        formSend(arr);
    });
}	

var timp, time, iskeypad;
function sensPostAutoInput(_this, event) {
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
		
        if (timeDiff >= 1000 && iskeypad != event.target.value) {
			clearTimeout(timp);
	    	var arr = {};
			arr["token"] = _TOKEN;
			arr[event.target.attributes.name.nodeValue] = event.target.value;// > div > span:nth-child(0)
			iskeypad = event.target.value;
					
            $.post({ url: _HTTP_BASE_WEB + "save", timeout:500 } , arr).done(function( res ) {
			    if (res.alert == "success") {
					//this_success.text(res.message);
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
		//console.log(data);
        $.each(data, function(i, dt) {
			//console.log(dt);
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

function updateFile(_this) {
	
	
  var file = _this.files[0];
  console.log("file:", file);
  // alert(file.name+" | "+file.size+" | "+file.type);	
  $('#update_name').html("<b>" + file.name + "</b>");
  $("#update_progress_bar").width("0%");
  $("#update_progress_bar").parent().parent().parent().parent().parent().show(0);
  var formdata = new FormData();
  formdata.append("file1", file);

  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.addEventListener("load", completeHandler, false); // doesnt appear to ever get called even upon success
  ajax.addEventListener("error", errorHandler, false);
  ajax.addEventListener("abort", abortHandler, false);

  ajax.open("POST", _HTTP_BASE_WEB+ "update", true);  
  ajax.send(formdata);
}

function progressHandler(event) {
    var percent = (event.loaded / event.total) * 100;

    $('#update_info').html( "<b>" + formatBytes(event.loaded) + "</b>");
    $("#update_progress_bar").attr("aria-valuenow", Math.round(percent)); 
    $("#update_progress_bar").width(Math.round(percent) + "%");
 
    if (percent >= 100) {
	   $("#update_progress_bar").parent().parent().parent().parent().parent().hide(0);
	   $("#update_progress_bar").width("0%");
    }
}

function completeHandler(event) {
	var this_success = $("#update_badges").children("span:nth-child(1)");
	var this_load = $("#update_badges").children("span:nth-child(2)");
	var this_error = $("#update_badges").children("span:nth-child(3)");

	this_success.show();
	this_load.hide();
	this_error.hide();
	
	this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);	
}
function errorHandler(event) {
	var this_success = $("#update_badges").children("span:nth-child(1)");
	var this_load = $("#update_badges").children("span:nth-child(2)");
	var this_error = $("#update_badges").children("span:nth-child(3)");

    this_error.text("Échec de l'envois");	

	this_success.show();
	this_load.hide();
	this_error.hide();
	
	this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);	
}
function abortHandler(event) {
	var this_success = $("#update_badges").children("span:nth-child(1)");
	var this_load = $("#update_badges").children("span:nth-child(2)");
	var this_error = $("#update_badges").children("span:nth-child(3)");

    this_error.text("Envois interrompu");	

	this_success.show();
	this_load.hide();
	this_error.hide();
	
	this_success.fadeOut(2500); this_load.fadeOut(2500); this_error.fadeOut(5500);	  
}	


function logoutButton() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/logout", true);
  xhr.send();
  setTimeout(function(){ window.open("/logged-out","_self"); }, 1000);
}
function rebootButton() {
  document.getElementById("statusdetails").innerHTML = "Invoking Reboot ...";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/reboot", true);
  xhr.send();
  window.open("/reboot","_self");
}
function listFilesButton() {
  xmlhttp=new XMLHttpRequest();
  xmlhttp.open("GET", "/listfiles", false);
  xmlhttp.send();
  document.getElementById("detailsheader").innerHTML = "<h3>Files<h3>";
  document.getElementById("details").innerHTML = xmlhttp.responseText;
}
function downloadDeleteButton(filename, action) {
  var urltocall = "/file?name=" + filename + "&action=" + action;
  xmlhttp=new XMLHttpRequest();
  if (action == "delete") {
    xmlhttp.open("GET", urltocall, false);
    xmlhttp.send();
    document.getElementById("status").innerHTML = xmlhttp.responseText;
    xmlhttp.open("GET", "/listfiles", false);
    xmlhttp.send();
    document.getElementById("details").innerHTML = xmlhttp.responseText;
  }
  if (action == "download") {
    document.getElementById("status").innerHTML = "";
    window.open(urltocall,"_blank");
  }
}
function showUploadButtonFancy() {
  document.getElementById("detailsheader").innerHTML = "<h3>Upload File<h3>"
  document.getElementById("status").innerHTML = "";
  var uploadform = "<form method = \"POST\" action = \"/\" enctype=\"multipart/form-data\"><input type=\"file\" name=\"data\"/><input type=\"submit\" name=\"upload\" value=\"Upload\" title = \"Upload File\"></form>"
  document.getElementById("details").innerHTML = uploadform;
  var uploadform =
  "<form id=\"upload_form\" enctype=\"multipart/form-data\" method=\"post\">" +
  "<input type=\"file\" name=\"file1\" id=\"file1\" onchange=\"uploadFile()\"><br>" +
  "<progress id=\"progressBar\" value=\"0\" max=\"100\" style=\"width:300px;\"></progress>" +
  "<h3 id=\"status\"></h3>" +
  "<p id=\"loaded_n_total\"></p>" +
  "</form>";
  document.getElementById("details").innerHTML = uploadform;
}
function _(el) {
  return document.getElementById(el);
}
function uploadFile() {
  var file = _("file1").files[0];
  // alert(file.name+" | "+file.size+" | "+file.type);
  var formdata = new FormData();
  formdata.append("file1", file);
  var ajax = new XMLHttpRequest();
  ajax.upload.addEventListener("progress", progressHandler, false);
  ajax.addEventListener("load", completeHandler, false); // doesnt appear to ever get called even upon success
  ajax.addEventListener("error", errorHandler, false);
  ajax.addEventListener("abort", abortHandler, false);
  ajax.open("POST", "/upload");
  ajax.send(formdata);
}



	$.post({ url: _HTTP_BASE_WEB + "wifi-s", timeout:500 } , { token: _TOKEN }).done(function( data ) {	
	   // Simple Datatable

 	   var h = '';
       $.each(data, function(i, d) {
              h += '     <tr>';
              h += '         <td>' + (i+1) + '</td>';
              h += '         <td>' + d.ssid + '</td>';
              h += '         <td>' + d.channel + '</td>';				  
              h += '         <td><span class="badge bg-' + ( d.hidden ? "warning" : "success") + '">' + ( d.hidden ? "cacher" : "visible") + '</span></td>';
              h += '         <td><span class="badge bg-' + ( d.secure ? "dark" : "warning") + '">' + ( d.secure ? "non sécurisé" : d.crypt + " " + d.mode) + '</span></td>';
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
	   
       let wifitable = document.querySelector('#wifitable');
       let dataTable = new simpleDatatables.DataTable(wifitable);	
       formSave();
	});


