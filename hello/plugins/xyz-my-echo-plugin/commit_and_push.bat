cd /d "%~dp0"
git add *
git commit -a -m "nouvelle version"
REM git remote add gitHubOriginCordovaPlugin https://didier-mycontrib:gh14.....sm..x@github.com/didier-mycontrib/cordova_plugin.git
git push -u gitHubOriginCordovaPlugin master
pause

REM open with text editor
REM opne with system editor