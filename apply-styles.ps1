
# PowerShell script to apply Page 1's header, footer, color palette, and typography to all other pages
# This reads each HTML file, replaces the <head> config, <header>, and <footer>

$basePath = "c:\Users\Deepak\Downloads\Antigravity\ACERO Website\html"

# Define the unified head content (from Page 1)
$unifiedHeadLinks = @'
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1e293b",
                        "accent": "#d4af37",
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
'@

# Define the unified header (from Page 1)
$unifiedHeader = @'
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-20 py-4 bg-white dark:bg-slate-900 sticky top-0 z-50">
<div class="flex items-center gap-4 text-primary dark:text-slate-100">
<div class="size-8 text-accent">
<span class="material-symbols-outlined text-4xl">shield_with_heart</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">ACERO Digital</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<div class="flex items-center gap-9">
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-accent" href="#">Services</a>
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-accent" href="#">Case Studies</a>
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-accent" href="#">About</a>
<a class="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-accent" href="#">Audit</a>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold hover:bg-slate-800 border border-accent/30">
<span>Free Audit</span>
</button>
</div>
</header>
'@

# Define the unified footer (from Page 1)
$unifiedFooter = @'
<footer class="bg-primary text-white py-12 px-6 md:px-20 border-t border-white/10">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div class="md:col-span-2">
<div class="flex items-center gap-3 mb-6">
<span class="material-symbols-outlined text-accent">shield_with_heart</span>
<span class="text-xl font-bold">ACERO Digital</span>
</div>
<p class="text-slate-400 max-w-sm mb-6">
                            The #1 Digital Marketing Agency for Home Service Professionals. We build the growth engines that keep your trucks rolling.
                        </p>
<div class="flex gap-4">
<a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span class="material-symbols-outlined text-sm">public</span></a>
<a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span class="material-symbols-outlined text-sm">thumb_up</span></a>
<a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors" href="#"><span class="material-symbols-outlined text-sm">alternate_email</span></a>
</div>
</div>
<div>
<h4 class="font-bold mb-6 text-accent">Quick Links</h4>
<ul class="space-y-4 text-sm text-slate-300">
<li><a class="hover:text-white" href="#">Services</a></li>
<li><a class="hover:text-white" href="#">Success Stories</a></li>
<li><a class="hover:text-white" href="#">About Us</a></li>
<li><a class="hover:text-white" href="#">Free Audit</a></li>
</ul>
</div>
<div>
<h4 class="font-bold mb-6 text-accent">Contact</h4>
<ul class="space-y-4 text-sm text-slate-300">
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">mail</span> hello@acerodigital.com</li>
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">call</span> 1-800-555-0199</li>
<li class="flex items-center gap-2"><span class="material-symbols-outlined text-xs">location_on</span> Austin, TX</li>
</ul>
</div>
</div>
<div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-slate-500">
                    &copy; 2024 ACERO Digital Marketing. All rights reserved. Built for Home Service Growth.
                </div>
</footer>
'@

$files = @(
    "2-services-hub.html",
    "3-industries-hub.html",
    "4-homepage.html",
    "5-results-case-studies.html",
    "6-resources-hub.html",
    "7-about-us.html"
)

foreach ($file in $files) {
    $filePath = Join-Path $basePath $file
    Write-Host "Processing $file..."
    
    $content = Get-Content $filePath -Raw
    
    # Replace tailwind config (everything between <script> tailwind config blocks)
    # We use regex to find and replace the tailwind.config block
    $content = $content -replace '(?s)<script[^>]*>\s*tailwind\.config\s*=\s*\{.*?\}\s*</script>', @'
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#1e293b",
                        "accent": "#d4af37",
                        "background-light": "#f8fafc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Inter", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    </script>
'@

    # Replace header
    $content = $content -replace '(?s)<header[^>]*>.*?</header>', $unifiedHeader

    # Replace footer
    $content = $content -replace '(?s)<footer[^>]*>.*?</footer>', $unifiedFooter

    # Update body class to use consistent classes
    $content = $content -replace '<body[^>]*>', '<body class="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">'
    
    # Fix color class references that used old names
    # secondary -> accent (for pages that use "secondary" instead of "accent")
    $content = $content -replace 'text-secondary', 'text-accent'
    $content = $content -replace 'bg-secondary', 'bg-accent'
    $content = $content -replace 'border-secondary', 'border-accent'
    $content = $content -replace 'shadow-secondary', 'shadow-accent'
    $content = $content -replace 'from-secondary', 'from-accent'
    $content = $content -replace 'to-secondary', 'to-accent'
    $content = $content -replace 'via-secondary', 'via-accent'
    
    # Fix color references for "navy" -> "primary"
    $content = $content -replace 'text-navy', 'text-primary'
    $content = $content -replace 'bg-navy', 'bg-primary'
    $content = $content -replace 'border-navy', 'border-primary'
    $content = $content -replace 'shadow-navy', 'shadow-primary'
    $content = $content -replace 'from-navy', 'from-primary'
    $content = $content -replace 'to-navy', 'to-primary'
    $content = $content -replace 'via-navy', 'via-primary'
    
    Set-Content $filePath $content -NoNewline
    Write-Host "  Done: $file"
}

Write-Host "`nAll pages updated with consistent header, footer, and color palette!"
