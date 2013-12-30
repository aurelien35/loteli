@ECHO OFF

REM Environnement
CALL %~p0\Win32_Environment.bat

REM Lancement du serveur
python server/loteli.py

PAUSE
