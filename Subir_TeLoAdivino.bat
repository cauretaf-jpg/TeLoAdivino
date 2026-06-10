@echo off
setlocal
cd /d "%~dp0"
echo.
echo ==========================================
echo   Subir TeLoAdivino a GitHub
Echo ==========================================
echo.
set /p COMMIT_MSG=Escribe el mensaje de la actualizacion: 
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Agregar Descubre tu vibra

git status
git add .
git commit -m "%COMMIT_MSG%"
git push

echo.
echo Listo. Si Vercel esta conectado, se actualizara automaticamente.
pause
