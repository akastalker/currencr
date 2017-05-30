var ci = {};

(function() {

var CHART_HEIGHT = 400;
var container;
var canvas;
var stage;
var currencyCode;
var chart;

function init(code, canvasID, containerID) {
    currencyCode = code;
    container= document.getElementById(containerID);
    canvas = document.getElementById(canvasID);
    window.context = canvas.getContext("2d");
    
    stage = new createjs.Stage(canvasID);
    stage.mouseMoveOutside = true;
    stage.enableMouseOver(10);
    createjs.Touch.enable(stage);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.on("tick", function() {
        stage.update();
    });
    
    handleResizing();
    chart = stage.addChild(createChart());
}

/**
 * 
 * 
 */
function handleResizing() {
    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();
     
    function resizeCanvas(e) {
        canvas.width = container.clientWidth;
        canvas.height = CHART_HEIGHT;
        if (chart) {
            chart.setComplexSize(container.clientWidth, CHART_HEIGHT);
            chart.redraw();
        }
    }
}

/**
 * 
 * 
 */
function createChart() {
    var chart = new cr.ComplexChart(container.clientWidth, CHART_HEIGHT, 50);
    
    var data;
    var req = new XMLHttpRequest();
    requestData();
    
    function requestData() {
        var fromUTC = (new Date()).getTime() - 86400000;
        var queryString = "?from=" +  fromUTC  + "&count=288&format=json";
        var reqURL = "./history_db/" + queryString;
        req.open("GET", reqURL, true);
        
        req.addEventListener("load", reqCompleteHandler, false);
        req.addEventListener("error", reqErrorHandler, false);
        
        req.send();
    }
    
    function reqCompleteHandler(e) {
        req.removeEventListener("load", reqCompleteHandler, false);
        req.removeEventListener("error", reqErrorHandler, false);
        
        var ch = chart;
        var t = 0;
        setInterval(function() {
            var data = [];
            data.push(
                {
                    date: t.toFixed(3),
                    price: Math.sin(t) * Math.abs(Math.sin(t)) * 1.5
                }
            );
            chart.complexAppend(data);
            t += 0.050;
        }, 50);
    }
    
    function reqErrorHandler(e) {
        alert(req.status + ": " + req.statusText);
        req.removeEventListener("load", reqCompleteHandler, false);
        req.removeEventListener("error", reqErrorHandler, false);
    }
    
    return chart;
}

ci.init = init;
})();