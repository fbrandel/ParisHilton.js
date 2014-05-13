var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "*",
  contentScript: 'document.head.innerHTML = ""'
});