@echo off
IF EXIST staging-winforms\ (
RMDIR /S /Q .\staging-winforms
)

MD staging-winforms

SET TOOLS=.\tools
SET STAGINGZIP=ReactDesktopMacTest-winforms.7z
SET OUTPUTNAME=ReactDesktopMacTest-winforms.exe
SET RELEASE=..\..\ReactDesktopMacTest.AppWinForms\bin\x86\Release
COPY %RELEASE%\ReactDesktopMacTest.AppWinForms.exe .\staging-winforms
COPY %RELEASE%\ReactDesktopMacTest.AppWinForms.exe.config .\staging-winforms
COPY %RELEASE%\CefSharp.BrowserSubprocess.exe .\staging-winforms
ROBOCOPY "%RELEASE%" ".\staging-winforms" *.dll *.pak *.dat /E

IF NOT EXIST apps (
MD apps
)

IF EXIST %STAGINGZIP% (
DEL %STAGINGZIP%
)

IF EXIST %OUTPUTNAME% (
DEL %OUTPUTNAME%
)

cd tools && 7za a ..\%STAGINGZIP% ..\staging-winforms\* && cd..
COPY /b .\tools\7zsd_All.sfx + config-winforms.txt + %STAGINGZIP% .\apps\%OUTPUTNAME%

IF EXIST %STAGINGZIP% (
DEL %STAGINGZIP%
)

echo ------------- && echo  deployed to: .\wwwroot_build\apps\%OUTPUTNAME% && echo -------------