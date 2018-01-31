cd /d "%~dp0"
set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\platform-tools
set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\emulator
adb start-server
adb -s emulator-5556 emu kill
pause
