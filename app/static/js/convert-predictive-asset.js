console.log("Predictive Asset > Script: Loaded");

var isPredictiveAsset = window.setInterval(function () {
        if (typeof(MktoForms2) !== "undefined") {
            console.log("Predictive Asset > Getting: Form");
            
            window.clearInterval(isPredictiveAsset);
            
            MktoForms2.whenReady(function (form) {
                var demoMailBox = "mktodemosvcs+predictive.",
                firstName = "Predictive",
                lastName = "Convert",
                submitParamName = "submit",
                submitParamVal,
                getUrlParam,
                getCookie;
                
                getUrlParam = function (param) {
                    console.log("Predictive Asset > Getting: URL Parameter: " + param);
                    
                    var paramString = window.location.href.split("?")[1];
                    
                    if (paramString) {
                        var params = paramString.split("&"),
                        paramPair,
                        paramName,
                        paramValue;
                        
                        for (var ii = 0; ii < params.length; ii++) {
                            paramPair = params[ii].split("=");
                            paramName = paramPair[0];
                            paramValue = paramPair[1];
                            
                            if (paramName == param) {
                                console.log("Predictive Asset > URL Parameter: " + paramName + " = " + paramValue);
                                return paramValue;
                            }
                        }
                    }
                    return false;
                };
                
                getCookie = function (cookieName) {
                    console.log("Predictive Asset > Getting: Cookie " + cookieName);
                    
                    var name = cookieName + '=',
                    cookies = document.cookie.split(';'),
                    currCookie;
                    
                    for (var ii = 0; ii < cookies.length; ii++) {
                        currCookie = cookies[ii].trim();
                        if (currCookie.indexOf(name) == 0) {
                            return currCookie.substring(name.length, currCookie.length);
                        }
                    }
                    console.log("Predictive Asset > Getting: Cookie " + cookieName + " not found");
                    return null;
                };
                
                submitParamVal = getUrlParam(submitParamName);
                
                if (submitParamVal == "true"
                     || submitParamVal == "test") {
                    
                    form.onSuccess(function (values, followUpUrl) {
                        if (submitParamVal == "true") {
                            window.close();
                            return false;
                        } else {
                            followUpUrl = "http://www.marketolive.com";
                            return true;
                        }
                    });
                    
                    if (typeof(form.getValues().Email) != "undefined") {
                        var email = demoMailBox + Date.now() + "@gmail.com";
                        form.vals({
                            Email: email
                        });
                    }
                    
                    if (typeof(form.getValues().FirstName) != "undefined") {
                        form.vals({
                            FirstName: firstName
                        });
                    }
                    
                    if (typeof(form.getValues().LastName) != "undefined") {
                        form.vals({
                            LastName: lastName
                        });
                    }
                    
                    //console.log(JSON.stringify(form.vals(), null, 2));
                    
                    if (submitParamVal == "true") {
                        var isMunchkinInitSubmit = window.setInterval(function () {
                                if (typeof(Munchkin.init) !== "undefined") {
                                    console.log("Predictive Asset > Munchkin is Defined");
                                    window.clearInterval(isMunchkinInitSubmit);
                                    
                                    form.submit();
                                }
                            }, 0);
                    }
                    
                } else if (submitParamVal == "false") {
                    var isMunchkinInit = window.setInterval(function () {
                            if (typeof(Munchkin.init) !== "undefined") {
                                console.log("Predictive Asset > Munchkin is Defined");
                                window.clearInterval(isMunchkinInit);
                                
                                window.close();
                            }
                        }, 0);
                }
            });
        }
    }, 0);