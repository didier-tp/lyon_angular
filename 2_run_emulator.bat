cd /d "%~dp0"

REM set ANDROID_SDK_ROOT=C:\Android\sdk
set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\platform-tools
set PATH=%PATH%;C:\Users\Probook 4530 S\AppData\Local\Android\sdk\emulator

REM set PATH=%PATH%;%ANDROID_SDK_ROOT%\platform-tools
REM set PATH=%PATH%;%ANDROID_SDK_ROOT%\emulator

emulator -avd Nexus_5X_API_25 -port 5556
pause
