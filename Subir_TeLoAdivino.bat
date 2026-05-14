@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ========================================
echo        Subir TeLoAdivino a GitHub
echo ========================================
echo.
git status
echo.
set /p MENSAJE=Escribe el mensaje de la actualizacion: 
if "%MENSAJE%"=="" set MENSAJE=Actualizar TeLoAdivino

echo.
echo Agregando archivos...
git add .

echo.
echo Creando commit...
git commit -m "%MENSAJE%"

echo.
echo Subiendo a GitHub...
git push

echo.
echo Proceso terminado. Si Vercel esta conectado, se actualizara automaticamente.
pause
