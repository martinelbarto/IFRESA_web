@echo off
echo ==========================================
echo Subir Proyecto IFRESA a GitHub
echo ==========================================
echo.
echo Para que esto funcione, primero debes crear un REPOSITORIO VACIO en GitHub.
echo 1. Ve a https://github.com/new
echo 2. Ponle un nombre (ej: "ifresa-landing")
echo 3. NO marques "Add a README" ni .gitignore (pulsa "Create repository")
echo 4. Copia la URL que te da (ej: https://github.com/usuario/ifresa-landing.git)
echo.

set /p repo_url="Pega aqui la URL de tu repositorio y presiona Enter: "

echo.
echo Conectando con %repo_url%...
git remote add origin %repo_url%

echo.
echo Subiendo archivos...
git branch -M main
git push -u origin main

echo.
if %errorlevel% neq 0 (
    echo [ERROR] Algo salio mal. Verifica que la URL sea correcta y que tengas permisos.
    echo Si dice "remote origin already exists", ignóralo, intentaremos hacer push igual.
    git push -u origin main
) else (
    echo [EXITO] Proyecto subido correctamente a GitHub!
)
pause
