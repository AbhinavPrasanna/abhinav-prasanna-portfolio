# Run dev server (works even when Node is not in PATH)
$nodeDir = "C:\Program Files\nodejs"
if (Test-Path "$nodeDir\node.exe") {
    $env:Path = "$nodeDir;$env:Path"
    npm run dev
} else {
    Write-Error "Node.js not found at $nodeDir. Install from https://nodejs.org"
}
