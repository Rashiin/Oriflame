var version = '1.2.1';
var targetScriptUrl = 'https://clientapp-cdn.oriflame.com/outdated-browser-info/';
var containerName = 'outdated-browser-info';
var currentScriptUrl =
  document.currentScript && document.currentScript.src
    ? document.currentScript.src
    : null;

if (currentScriptUrl) {
  var URL_REGEXP = /http(s?):\/\/([\w-]+\.){1}([\w-]+\.?)+/gi;
  var result = URL_REGEXP.exec(currentScriptUrl);

  if (result && result[0]) {
    targetScriptUrl = targetScriptUrl.replace(URL_REGEXP, result[0]);
  }
}

if (typeof URLSearchParams !== 'undefined') {
  var urlParams = new URLSearchParams(window.location.search);

  if (urlParams.get(containerName)) {
    version = urlParams.get(containerName);
  }
}

var bodyElement = document.getElementsByTagName('body')[0];
var scriptElement = document.createElement('script');

if (!false) {
  var rootElementId = containerName + '-root';
  var rootElement = document.getElementById(rootElementId);

  if (!rootElement) {
    throw new Error('Element #' + rootElementId + ' was not found!');
  }

  rootElement.setAttribute('data-app-url', rootElement.getAttribute('data-app-url') + version + '/');
}

scriptElement.type = 'text/javascript';
scriptElement.src = targetScriptUrl + version + '/index.js';
scriptElement.defer = true;
scriptElement.crossOrigin = 'anonymous';

bodyElement.appendChild(scriptElement);