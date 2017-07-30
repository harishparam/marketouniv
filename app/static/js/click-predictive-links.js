function getUrlParam(param) {
    console.log("Click Predictive Links > Getting: URL Parameter: " + param);
    
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
                console.log("Click Predictive Links > URL Parameter: " + paramName + " = " + paramValue);
                return paramValue;
            }
        }
    }
    return false;
}

if (getUrlParam("click") == "true") {
    var startTime = new Date(),
    itemClassName = "rtp_rcmd2_item",
    linkClassName = "rtp_rcmd2_link",
    predictiveContentIsReady;
    
    predictiveContentIsReady = window.setInterval(function () {
            var currTime = new Date();
            
            if (document.getElementsByClassName(itemClassName).length == 3
                 && document.getElementsByClassName(itemClassName)[0].getElementsByClassName(linkClassName)[0]
                 && document.getElementsByClassName(itemClassName)[0].getElementsByClassName(linkClassName)[0].href
                 && document.getElementsByClassName(itemClassName)[1].getElementsByClassName(linkClassName)[0]
                 && document.getElementsByClassName(itemClassName)[1].getElementsByClassName(linkClassName)[0].href
                 && document.getElementsByClassName(itemClassName)[2].getElementsByClassName(linkClassName)[0]
                 && document.getElementsByClassName(itemClassName)[2].getElementsByClassName(linkClassName)[0].href) {
                console.log("Click Predictive Links > Content Is Ready");
                window.clearInterval(predictiveContentIsReady);
                
                var linkIndex = Math.floor(Math.random() * 3),
                submitParam;
                
                if (Math.random() >= 0.5) {
                    submitParam = "submit=true";
                } else {
                    submitParam = "submit=false";
                }
                
                if (document.getElementsByClassName(itemClassName)[linkIndex].getElementsByClassName(linkClassName)[0].href.search(/\?/) != -1) {
                    document.getElementsByClassName(itemClassName)[linkIndex].getElementsByClassName(linkClassName)[0].href += '&' + submitParam;
                } else {
                    document.getElementsByClassName(itemClassName)[linkIndex].getElementsByClassName(linkClassName)[0].href += '?' + submitParam;
                }
                
                console.log("Click Predictive Links > Updated Link (" + linkIndex + "): " + document.getElementsByClassName(itemClassName)[linkIndex].getElementsByClassName(linkClassName)[0].href);
                document.getElementsByClassName(itemClassName)[linkIndex].getElementsByClassName(linkClassName)[0].click();
            } else if (parseInt((currTime - startTime) / 1000) > 3) {
                console.log("Click Predictive Links > Content IS NOT Available");
                window.clearInterval(predictiveContentIsReady);
                window.close();
            }
        }, 0);
} else {
    console.log("Click Predictive Links > NOT Clicking > click parameter IS NOT true");
}