//time to load
var timing = performance.timing;
var loadTime = timing.loadEventEnd - timing.navigationStart;
console.log("Page load time: " + loadTime + "ms");
//time to render
var firstRender = timing.responseEnd - timing.navigationStart;
console.log("First Render time: " + firstRender + "ms");
