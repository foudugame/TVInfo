 
    <script> 	
	    let _CSS = ' body { margin: 0 !important; display: flex; }';
        _CSS += ' .loader_body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ';
        _CSS += ' "Segoe UI Symbol"; font-weight: 400; line-height: 1.5; color: #b3b3b3; -webkit-text-size-adjust: -webkit-fill-available; -webkit-tap-highlight-color: #fff0; height: -webkit-fill-available; width: -webkit-fill-available; position: fixed;}';
        _CSS += ' .loader_container { background: #f3f3f3; margin-top: auto; margin-bottom: auto; position: relative; height: -webkit-fill-available; display: flex; align-items: center; justify-content: center; flex-direction: column; }';
        _CSS += ' div.loader_container>p:nth-child(2) { color: #ff1100a8; font-weight: 600; display: none; }';
        _CSS += ' .loader.is-loading { margin-left: auto; margin-right: auto; width: 80px; height: 80px; margin: 2em auto }';
        _CSS += ' .is-loading::after, .is-loading::after, .loader, .is-loading::after { -webkit-animation: spinloader .5s infinite linear; animation: spinloader .5s infinite linear;';
        _CSS += ' border: 4px solid #dbdbdb; border-radius: 290486px; border-right-color: #fff0; border-top-color: #fff0; display: block; height: 1em; position: relative; width: 1em }';
        _CSS += ' @-webkit-keyframes spinloader { from { transform: rotate(0); } to { transform: rotate(359deg); } }';
        _CSS += ' @keyframes spinloader { from { transform: rotate(0); } to { transform: rotate(359deg); } }';
        
	    let _HTML = '<div id="loader" class="loader_body"><style>{style}</style><div class="loader_container"><span class="loader is-loading"></span>';
	    _HTML += '<p id="loaderErr"></p><p id="loaderInfo"></p><p id="loaderPercent"></p></div></div>';
	    let iSinfoLoader = false;

	    function _is(sel) {
	        var status = !1;
	        if (sel != null) status = !0;
	        return status
	    }

	    function infoLoader(percent = 0, info = "", er = "") {
	        if (percent == 0) {
	            iSinfoLoader = !1
	        }
	        if (iSinfoLoader) {
	            return
	        }
	        let loader = document.getElementById("loader");
	        let loaderErr = document.getElementById("loaderErr");
	        let loaderInfo = document.getElementById("loaderInfo");
	        let loaderPercent = document.getElementById("loaderPercent");
	        if (!_is(loader) && !_is(loaderErr) && !_is(loaderInfo) && !_is(loaderPercent)) {
	            document.body.innerHTML += _HTML.replace(/{style}/i, _CSS)
	        } else {
	            if (percent <= 100) {
	                loaderPercent.style.display = 'none';
	                loaderErr.style.display = 'none';
	                loaderInfo.style.display = 'none';
	                if (percent.length != 0) {
	                    loaderPercent.innerHTML = percent + "%";
	                    loaderPercent.style.display = 'block'
	                }
	                if (er.length != 0) {
	                    loaderErr.innerHTML = er;
	                    loaderErr.style.display = 'block'
	                }
	                if (info.length != 0) {
	                    loaderInfo.innerHTML = info;
	                    loaderInfo.style.display = 'block'
	                }
	            } else {
	                if (_is(loader)) {
	                    loader.remove();
	                    iSinfoLoader = !0
	                }
	            }
	        }
	    }

	    function include(url, position, type, callback, cn, ce = -1) {
	        if (ce == -1) {
	            ce = cn
	        }
	        let p1 = 100 / ce + 1;
	        let p2 = Math.round(p1 * (ce + 1 - cn));
	        var xhr = new XMLHttpRequest();
	        let urlbase = url.split("?")[0];
	        var filename = "...";
	        if (urlbase) {
	            var startIndex = (urlbase.indexOf('\\') >= 0 ? urlbase.lastIndexOf('\\') : urlbase.lastIndexOf('/'));
	            filename = urlbase.substring(startIndex);
	            if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
	                filename = filename.substring(1)
	            }
	        }
	        
	        if (position == "png") {
	           xhr.responseType = 'arraybuffer';
	        } else {
	           xhr.responseType = 'texte';
	        }
	        
	        xhr.onloadend = (event) => {
	            if (xhr.status == 200) {
                    infoLoader(p2, filename);
	                cn--;
	                callback(cn, ce);
	                var blob = xhr.response;
	                if (position == "head") {
	                    if (type == "css") {
	                        let style = document.createElement("style");
	                        style.innerHTML = xhr.response;
	                        document.head.appendChild(style)
	                    } else if (type == "js") {
	                        let script = document.createElement("script");
	                        script.innerHTML = xhr.response;
	                        document.head.appendChild(script)
	                    }
	                } else if (position == "body") {
	                    if (type == "css") {
	                        let style = document.createElement("style");
	                        style.innerHTML = xhr.response;
	                        document.body.appendChild(style)
	                    } else if (type == "js") {
	                        let script = document.createElement("script");
	                        script.innerHTML = xhr.response;
	                        document.body.appendChild(script)
	                    }
	                } else if (position == "svg") {
	                    let decoded = unescape(encodeURIComponent(xhr.response));
                        let base64 = btoa(decoded);
                        let imgSource = `data:image/svg+xml;base64,${base64}`;
                        const nodeList = document.querySelectorAll(type);
                        for (let i = 0; i < nodeList.length; i++) {
                           nodeList[i].src = imgSource;
                           nodeList[i].href = imgSource;
                        }
	                } else if (position == "png") {     
                        const base64 = btoa( new Uint8Array(xhr.response).reduce((data, byte) =>  data + String.fromCharCode(byte), '') );	                
	                    document.getElementById(type).src = `data:image/png;base64,${base64}`;
                        for (let i = 0; i < nodeList.length; i++) {
                           nodeList[i].src = `data:image/png;base64,${base64}`;
                           nodeList[i].href = `data:image/png;base64,${base64}`;
                        }	                    
	                }
	            }
	        };
	        xhr.onreadystatechange = () => {
	            if ((xhr.status === 404) || (xhr.status === 400) || (xhr.status === 503)) {
	                infoLoader(0, "", "error: " + xhr.status + " :: " + filename)
	            }
	        };
	        xhr.error = function(event) {
	            infoLoader(0, url, "error")
	        };
	        xhr.abort = function(event) {
	            infoLoader(0, url, "abort")
	        };
	        xhr.open('GET', url);
	        xhr.send()
	    }
	    
        function __start() {
        if (navigator.onLine) {
            include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/jquery.min.3.7.1.js?t=" + _CODE_RELOAD , "head", "js", function(k0, v0){
                include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/css/style.css?t=" + _CODE_RELOAD , "head", "css", function(k1, v1){
                    include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/css/bootstrap.css?t=" + _CODE_RELOAD , "head", "css", function(k2, v2){
                        include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/css/Chart.min.css?t=" + _CODE_RELOAD , "head", "css", function(k3, v3){
                            include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/css/perfect-scrollbar.css?t=" + _CODE_RELOAD , "head", "css", function(k4, v4){
                                include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/css/app.css?t=" + _CODE_RELOAD , "head", "css", function(k5, v5){
                                    include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/feather.min.js?t=" + _CODE_RELOAD, "body", "js", function(k6, v6){
                                        include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/perfect-scrollbar.min.js?t=" + _CODE_RELOAD, "body", "js", function(k7, v7){
                                            include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/app.js?t=" + _CODE_RELOAD, "body", "js", function(k8, v8){
                                                include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/Chart.min.js?t=" + _CODE_RELOAD, "body", "js", function(k9, v9){
                                                    include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/apexcharts.min.js?t=" + _CODE_RELOAD, "body", "js", function(k10, v10){
                                                        include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/simple-datatables.js?t=" + _CODE_RELOAD, "body", "js", function(k11, v11){
                                                            include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/dashboard.js?t=" + _CODE_RELOAD, "body", "js", function(k12, v12){
                                                                include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/js/main.js?t=" + _CODE_RELOAD, "body", "js", function(k13, v13){
                                                                    include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/user.svg?t=" + _CODE_RELOAD, "svg", ".user_svg", function(k14, v14){
                                                                        include(_SOURCE_GITHUB + _FIRMWARE_VERSION + "/favicon.svg?t=" + _CODE_RELOAD, "svg", ".favicon_svg", function(k15, v15){
                                                                            __reload();
                                                                            
                                                                            let nodeList1 = document.querySelectorAll(".loader_body");
                                                                            for (let i = 0; i < nodeList1.length; i++) {
                                                                                nodeList1[i].style.display = ""; 
                                                                            } 
                                                                            
                                                                            let nodeList2 = document.querySelectorAll(".end_display_loader");
                                                                            for (let i = 0; i < nodeList2.length; i++) {
                                                                                nodeList2[i].style.display = ""; 
                                                                            }
                                                                        }, k14, v14);             
                                                                    }, k13, v13);           
                                                                }, k12, v12);               
                                                            }, k11, v11);               
                                                        }, k10, v10);            
                                                    }, k9, v9);            
                                                }, k8, v8);            
                                            }, k7, v7);
                                        }, k6, v6);
                                    }, k5, v5);                           
                                }, k4, v4);
                            }, k3, v3);
                        }, k2, v2);
                    }, k1, v1);
                }, k0, v0);
		    }, 13);		
		} else {
		   alert("La connexion Internet a été perdue. Le site Web est temporairement indisponible.");
		}
        }
        
        if (window.addEventListener)
        window.addEventListener("load", __start, false);
        else if (window.attachEvent)
        window.attachEvent("onload", __start);
        else window.onload = __start;
    </script>
