@ECHO OFF

REM ==============================================
REM ============== Repertoire courant ============
REM ==============================================
SET CURRENT_DIR=%~dp0

REM ===========================================
REM == Repertoire de base de Python portable ==
REM ===========================================
SET PORTABLE_PYTHON_DIR=%CURRENT_DIR%..\Python_2.7.5.1\




REM ===========================================================================
REM == !!!!!!!!!!!!! Ne rien modifier a partir de cette ligne !!!!!!!!!!!!!  ==
REM ===========================================================================

	REM =====================
	REM == Edition du PATH ==
	REM =====================
	SET PATH=%PORTABLE_PYTHON_DIR%App;%PATH%
