cd /d "%~dp0"
set ANDROID_SDK_ROOT=C:\Android\sdk
REM set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\platform-tools
REM set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\emulator

set PATH=%PATH%;%ANDROID_SDK_ROOT%\platform-tools
set PATH=%PATH%;%ANDROID_SDK_ROOT%\emulator


emulator -list-avds
pause
