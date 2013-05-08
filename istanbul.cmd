@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\istanbul\lib\cli.js" %*
) ELSE (
  node  "%~dp0\node_modules\istanbul\lib\cli.js" %*
)