@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

set "SOURCE=\\10.10.10.10\common\Админ передач\Реклама\2026\ЗАЯВКИ 2026"
set "DEST=D:\BackUpReklamaReport"

set N=1
:loop
if exist "%DEST%\%N%" (
    set /a N+=1
    goto loop
)

mkdir "%DEST%\%N%"

robocopy "%SOURCE%" "%DEST%\%N%" /E /R:3 /W:5

echo Копирование завершено в папку %DEST%\%N%
pause