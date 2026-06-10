@echo off
setlocal
cd /d "%~dp0"
echo.
echo ==========================================
echo   TeLoAdivino - Prueba local
Echo ==========================================
echo.
echo Se abrira la app en el navegador.
echo Para cerrar la prueba, cierra esta ventana.
echo.

where py >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:5173"
  py -m http.server 5173
  goto :eof
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "" "http://localhost:5173"
  python -m http.server 5173
  goto :eof
)

echo No se encontro Python. Se abrira index.html directamente.
start "" "%~dp0index.html"
pause
