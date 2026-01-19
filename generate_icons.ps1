
Add-Type -AssemblyName System.Drawing

function Create-Icon {
    param(
        [int]$width,
        [int]$height,
        [string]$filename,
        [string]$text = "12K",
        [string]$bgColorHTML = "#0066FF"
    )

    $bmp = New-Object System.Drawing.Bitmap $width, $height
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml($bgColorHTML))
    
    # Use string names for enums to avoid type issues in PS invoke
    $g.SmoothingMode = "AntiAlias"
    $g.TextRenderingHint = "AntiAlias"

    # Font sizing - adjusted to fit
    $fontSize = $height * 0.35
    if ($fontSize -lt 6) { $fontSize = 6 }
    
    # Using simple constructor: Family, Size(pt), Style
    $font = New-Object System.Drawing.Font("Arial", $fontSize, [System.Drawing.FontStyle]::Bold)
    $brush = [System.Drawing.Brushes]::White
    
    $format = New-Object System.Drawing.StringFormat
    $format.Alignment = "Center"
    $format.LineAlignment = "Center"
    
    # Adjust rect based on font metrics slightly if needed, but centering works usually
    $rect = New-Object System.Drawing.RectangleF 0, 0, $width, $height
    
    $g.DrawString($text, $font, $brush, $rect, $format)

    $fullPath = Join-Path (Get-Location) $filename
    $bmp.Save($fullPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    Write-Host "Created $filename"
    
    $g.Dispose()
    $bmp.Dispose()
    $font.Dispose()
}

# Generate Icons
Create-Icon 512 512 "android-chrome-512x512.png"
Create-Icon 192 192 "android-chrome-192x192.png"
Create-Icon 180 180 "apple-touch-icon.png"
Create-Icon 32 32 "favicon-32x32.png"
Create-Icon 16 16 "favicon-16x16.png" # might be too small for text, but we try
Create-Icon 48 48 "favicon.ico" # PNG renamed
