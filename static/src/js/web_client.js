   /** @odoo-module **/

    let title = "Maven Technology";

    function setTitle(params) {
      document.title = title;
      setInterval(function () {
        document.title = document.title.replace('Odoo', title);
      }, 0);
    }
    setTitle();