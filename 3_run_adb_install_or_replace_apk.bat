cd /d "%~dp0"
set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\platform-tools
set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\emulator
set APP-PATH=.\hello\platforms\android\app\build\outputs\apk\debug\app-debug.apk

adb start-server
adb devices
adb -s emulator-5556 install -r %APP-PATH%
pause
