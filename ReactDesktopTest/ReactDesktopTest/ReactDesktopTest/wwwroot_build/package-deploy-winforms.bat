@echo off
SET STAGING=staging-winforms

IF EXIST %STAGING%\ (
RMDIR /S /Q .\%STAGING%
) ELSE IF EXIST %STAGING% (
DEL /s %STAGING%
)

MD %STAGING%

SET TOOLS=.\tools
SET STAGINGZIP=ReactDesktopTest-winforms.7z
SET OUTPUTNAME=ReactDesktopTest-winforms.exe
SET RELEASE=..\..\ReactDesktopTest.AppWinForms\bin\x86\Release
COPY %RELEASE%\ReactDesktopTest.AppWinForms.exe .\%STAGING%
COPY %RELEASE%\ReactDesktopTest.AppWinForms.exe.config .\%STAGING%
COPY %RELEASE%\CefSharp.BrowserSubprocess.exe .\%STAGING%
ROBOCOPY "%RELEASE%" ".\%STAGING%" *.dll *.pak *.dat *.bin /E

IF NOT EXIST apps (
MD apps
)

IF EXIST %STAGINGZIP% (
DEL %STAGINGZIP%
)

IF EXIST %OUTPUTNAME% (
DEL %OUTPUTNAME%
)

cd tools && 7za a ..\%STAGINGZIP% ..\%STAGING%\* && cd..
COPY /b .\tools\7zsd_All.sfx + config-winforms.txt + %STAGINGZIP% .\apps\%OUTPUTNAME%

IF EXIST %STAGINGZIP% (
DEL %STAGINGZIP%
)

echo ------------- && echo  deployed to: .\wwwroot_build\apps\%OUTPUTNAME% && echo -------------