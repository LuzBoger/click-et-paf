const GoogleTagManager = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-58K4RNLW";
      document.head.appendChild(script);
  
      const noscript = document.createElement("noscript");
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58K4RNLW"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertAdjacentElement("afterbegin", noscript);
  
      return () => {
        document.head.removeChild(script);
        document.body.removeChild(noscript);
      };
    }, []);
  
    return null;
  };
  