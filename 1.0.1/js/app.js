const _avatarImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAALXGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0xMC0xNFQxODozMjoxOCswNTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMC0yMVQxMjoyMDoxNyswNTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMTAtMjFUMTI6MjA6MTcrMDU6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YWY5MTJlN2EtMmY4My1mMTRiLWE2NzQtMDhjNGNiMDk4MDY0IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YjllZGM4YWEtNzdmMS1hMzQ5LTg0YWItMGY5MzRjZWQ3YmIzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWQ4M2U5YTMtMWUxMS01ZjQwLTgzN2MtOTI4Nzg2MjA2Yzc5IiBwaG90b3Nob3A6TGVnYWN5SVBUQ0RpZ2VzdD0iMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmVkODNlOWEzLTFlMTEtNWY0MC04MzdjLTkyODc4NjIwNmM3OSIgc3RFdnQ6d2hlbj0iMjAyMi0xMC0xNFQxODozMjoxOCswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjOWEzMDgyOC01YjI4LTM2NDktYjUwYy0yMGVlMDA2ODQ3NWMiIHN0RXZ0OndoZW49IjIwMjItMTAtMTRUMTg6MzI6MTgrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YzMyODRmYWMtMzRhYy1lMjQyLWFiOGItZmEzZWM4OGU2NGExIiBzdEV2dDp3aGVuPSIyMDIyLTEwLTIxVDExOjQ2OjMzKzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI4MTZkYmExLWUwMWUtYmM0Yy05MTQyLTc5ODI3MzNiMjFkYiIgc3RFdnQ6d2hlbj0iMjAyMi0xMC0yMVQxMTo0NjozMyswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphZjkxMmU3YS0yZjgzLWYxNGItYTY3NC0wOGM0Y2IwOTgwNjQiIHN0RXZ0OndoZW49IjIwMjItMTAtMjFUMTI6MjA6MTcrMDU6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzMyODRmYWMtMzRhYy1lMjQyLWFiOGItZmEzZWM4OGU2NGExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NGQ1Mzg3OTItYTE0YS1mMzQxLTkxYmQtZWQyNTE4MTRhMzcwIiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZWQ4M2U5YTMtMWUxMS01ZjQwLTgzN2MtOTI4Nzg2MjA2Yzc5Ii8+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxy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";

/*
TOKEN = "0000";
HTTP_BASE_WEB = "http://192.168.0.241/";
*/

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

window.addEventListener("load", function() {	
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
		    $.post({ url: HTTP_BASE_WEB + data_action, timeout:500 }, { cmd: data_cmd, token: TOKEN }).done(function( ers ) {	
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
});


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
	
    $.post({ url: HTTP_BASE_WEB + "stats", timeout:500 }, { opt: optget, token: TOKEN }).done(function( cfg ) {
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
    arr["token"] = TOKEN;
    $.post({ url: HTTP_BASE_WEB + "save", timeout:500 } , arr).done(function( res ) {			   
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
			arr["token"] = TOKEN;
			arr[event.target.attributes.name.nodeValue] = event.target.value;// > div > span:nth-child(0)
			iskeypad = event.target.value;
					
            $.post({ url: HTTP_BASE_WEB + "save", timeout:500 } , arr).done(function( res ) {
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
		$.post({ url: HTTP_BASE_WEB + "notifications", timeout:500 }, { erase: id, token: TOKEN }).done(function( ers  ) {	
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

  ajax.open("POST", HTTP_BASE_WEB+ "update", true);  
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



	$.post({ url: HTTP_BASE_WEB + "wifi-s", timeout:500 } , { token: TOKEN }).done(function( data ) {	
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


