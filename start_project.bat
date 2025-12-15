@echo off
echo ==========================================
echo Iniciando Proyecto IFRESA
echo ==========================================
echo.
echo Verificando instalacion de Node.js...
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js no esta instalado o no se encuentra en el PATH.
    echo Por favor instala Node.js desde https://nodejs.org/
    pause
    exit /b
)

echo.
echo Instalando dependencias (esto puede tardar unos minutos)...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Hubo un problema instalando las dependencias.
    pause
    exit /b
)

echo.
echo Iniciando servidor de desarrollo...
echo Abre tu navegador en http://localhost:3000
echo presiona Ctrl+C para detener el servidor.
echo.
call npm run dev
