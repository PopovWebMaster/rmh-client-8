@echo off
setlocal enabledelayedexpansion

REM Путь к папке на сервере
set SOURCE="\\10.10.10.10\common\Админ передач\Реклама\2026\ЗАЯВКИ 2026"

REM Путь к папке на жестком диске
set DEST=D:\BackUpReklamaReport

REM Поиск следующего номера папки
set N=1
:loop
if exist "%DEST%\%N%" (
    set /a N+=1
    goto loop
)

REM Создание новой папки
mkdir "%DEST%\%N%"

REM Копирование файлов
xcopy "%SOURCE%\*" "%DEST%\%N%\" /E /I /Y

echo Файлы скопированы в папку %DEST%\%N%
pause