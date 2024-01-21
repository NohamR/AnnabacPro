function fetchAndModifyContent(url) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Failed to fetch: ${response.statusText}`);
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const innerContentMain = doc.querySelector('.inner-content-main');
      const innerContent = innerContentMain.querySelector('.inner-content');

      if (innerContent) {
        let innerContentText = Array.from(innerContent.childNodes)
          .map(node => node.outerHTML || node.nodeValue)
          .join('');

        innerContentText = innerContentText.replace(/\/modules-assets\//g, "https://www.annabac.com/modules-assets/");

        innerContentText = innerContentText.replace(/<script[^>]*src="https:\/\/cdn\.mathjax\.org\/mathjax\/latest\/MathJax\.js\?config=TeX-AMS-MML_HTMLorMML"[^>]*><\/script>/g, '');

        innerContentText = innerContentText.replace(/<link[^>]*href="https:\/\/www\.annabac\.com\/modules-assets\/styles\/commonAnnabac2020\.css"[^>]*>/g, '');
        innerContentText = innerContentText.replace(/<link[^>]*href="https:\/\/www\.annabac\.com\/modules-assets\/styles\/9782401064171_metabase_Phy_Chim_Term\.css"[^>]*>/g, '');

        assignContent(innerContentText);
      } else {
        console.log('Inner content not found');
      }
    })
    .catch(error => console.error(error));
}

function assignContent(content) {
  const html = `
  <html lang=en><meta charset=utf-8><meta content=width name=MobileOptimized><meta content=true name=HandheldFriendly><meta content="width=device-width,initial-scale=1"name=viewport><meta content=1 name=tdm-reservation><link href=/themes/annabac/css/kits/Barlow/Barlow-Regular.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-Regular.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-Medium.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-Medium.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-SemiBold.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-SemiBold.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-Bold.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/Barlow/Barlow-Bold.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Regular.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Regular.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Medium.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Medium.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Bold.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Bold.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Black.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSansSC/NotoSansSC-Black.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/SourceSansPro/SourceSansPro-Light.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/SourceSansPro/SourceSansPro-Light.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/SourceSansPro/SourceSansPro-SemiBold.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/SourceSansPro/SourceSansPro-SemiBold.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSans/NotoSans.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSans/NotoSans.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSans/NotoSans-Bold.woff2 rel=preload type=font/woff2 as=font crossorigin=anonymous><link href=/themes/annabac/css/kits/NotoSans/NotoSans-Bold.woff rel=preload type=font/woff as=font crossorigin=anonymous><link href=/themes/annabac/favicon.ico rel=icon type=image/vnd.microsoft.icon><link href=/favicon.svg rel=icon type=image/svg+xml><link href=/apple-touch-icon.png rel=apple-touch-icon><title>Viewer</title><link href=/sites/default/files/css/css_O1tIcSpEgE7I8N4GL6RivW4rix6rdDGFZRTjON3wT10.css rel=stylesheet media=all><link href=/sites/default/files/css/css_CuKThgTGcMd_QmmbYhtoXfaZSaEc566sX6eNnljhoCc.css rel=stylesheet media=all><link href=/modules-assets/styles/commonAnnabac.css?s7cjwy rel=stylesheet media=all><div class=inner-content data-nosnippet="">${content}</div></body></html>
  `;
  console.log('page opened');

  const newWindow = window.open();
  newWindow.location.href = "about:blank";
  newWindow.document.write(html);
  newWindow.document.close();
  
}

// const currentUrl = window.location.href;
// fetchAndModifyContent(currentUrl);

function replaceLinks() {
  var links = document.querySelectorAll('.parcours-revision-inner a');

  links.forEach(link => {
      var button = document.createElement('button');
      button.textContent = link.textContent;
      
      button.addEventListener('click', function() {
          var url = link.href;
          fetchAndModifyContent(url);
      });

      link.parentNode.replaceChild(button, link);
  });
}

replaceLinks();