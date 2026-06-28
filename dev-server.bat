@echo off
REM Wedding Invitation Site - Development Server Launcher
REM This script starts a local development server

echo.
echo ========================================
echo Kabir and Diksha's Wedding Invitation
echo Development Server
echo ========================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Starting Python development server...
    echo.
    echo Open your browser and go to: http://localhost:8000
    echo Press Ctrl+C to stop the server
    echo.
    python -m http.server 8000
) else (
    REM Try Python 3
    py -3 --version >nul 2>&1
    if %errorlevel% equ 0 (
        echo Starting Python 3 development server...
        echo.
        echo Open your browser and go to: http://localhost:8000
        echo Press Ctrl+C to stop the server
        echo.
        py -3 -m http.server 8000
    ) else (
        REM Try Node.js http-server
        where npx >nul 2>&1
        if %errorlevel% equ 0 (
            echo Starting Node.js development server...
            echo.
            echo Open your browser and go to: http://localhost:8000
            echo Press Ctrl+C to stop the server
            echo.
            npx http-server -p 8000 -c-1
        ) else (
            echo.
            echo Error: No suitable server found!
            echo Please install one of the following:
            echo   - Python 3 (https://www.python.org/)
            echo   - Node.js (https://nodejs.org/)
            echo.
            pause
        )
    )
)
