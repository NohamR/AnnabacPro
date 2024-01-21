import requests
from bs4 import BeautifulSoup

url = 'https://www.annabac.com/annales-bac/acidification-de-l-ocean'
response = requests.get(url, verify=False)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')

    inner_content = soup.find('div', class_='inner-content')

    if inner_content:
        inner_content_text = ''.join(map(str, inner_content.contents))
        inner_content_text = inner_content_text.replace("/modules-assets/", "https://www.annabac.com/modules-assets/")
        model = f"""
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="description" content="Préparez et révisez les examens du Brevet au Bac avec Annabac. Consultez les annales, fiches de cours, corrigés, cours audio et vidéo de la 3e à la Terminale.">
        <meta name="MobileOptimized" content="width">
        <meta name="HandheldFriendly" content="true">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="tdm-reservation" content="1">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-Regular.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-Regular.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-Medium.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-Medium.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-SemiBold.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-Bold.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/Barlow/Barlow-Bold.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Regular.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Regular.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Medium.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Medium.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Bold.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Bold.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Black.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Black.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/SourceSansPro/SourceSansPro-Light.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/SourceSansPro/SourceSansPro-Light.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/SourceSansPro/SourceSansPro-SemiBold.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/SourceSansPro/SourceSansPro-SemiBold.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSans/NotoSans.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSans/NotoSans.woff" type="font/woff" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSans/NotoSans-Bold.woff2" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" as="font" href="/themes/annabac/css/kits/NotoSans/NotoSans-Bold.woff" type="font/woff" crossorigin="anonymous">
        <link rel="icon" href="/themes/annabac/favicon.ico" type="image/vnd.microsoft.icon">
        <link type="image/svg+xml" rel="icon" href="/favicon.svg">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <title>Sens d’évolution d’un système acide-base - Constitution et transformations de la matière - Physique | Annabac</title>
        <link rel="stylesheet" media="all" href="/sites/default/files/css/css_O1tIcSpEgE7I8N4GL6RivW4rix6rdDGFZRTjON3wT10.css">
        <link rel="stylesheet" media="all" href="/sites/default/files/css/css_CuKThgTGcMd_QmmbYhtoXfaZSaEc566sX6eNnljhoCc.css">
        <link rel="stylesheet" media="all" href="/modules-assets/styles/commonAnnabac.css?s7cjwy" />
    <head> 
<body>
    <div class="inner-content" data-nosnippet="">
        {inner_content_text}
    </div>
</body>
</html>
"""
        with open('filefiletest.html', 'w') as f:
            f.write(model)
    else:
        print("Balise 'inner-content' non trouvée sur la page.")
else:
    print(f"La requête a échoué avec le code d'état {response.status_code}.")