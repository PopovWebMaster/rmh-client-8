del C:\OpenServer\domains\rmh-server-8\public\assets\css\*.* /q
del C:\OpenServer\domains\rmh-server-8\public\assets\js\*.* /q
del C:\OpenServer\domains\rmh-server-8\public\assets\fonts\*.* /q
del C:\OpenServer\domains\rmh-server-8\public\assets\img\*.* /q
xcopy C:\OpenServer\domains\rmh-client-8\dist\assets\css C:\OpenServer\domains\rmh-server-8\public\assets\css /f /i /y /s
xcopy C:\OpenServer\domains\rmh-client-8\dist\assets\js C:\OpenServer\domains\rmh-server-8\public\assets\js /f /i /y /s
xcopy C:\OpenServer\domains\rmh-client-8\dist\assets\fonts C:\OpenServer\domains\rmh-server-8\public\assets\fonts /f /i /y /s
xcopy C:\OpenServer\domains\rmh-client-8\dist\assets\img C:\OpenServer\domains\rmh-server-8\public\assets\img /f /i /y /s


