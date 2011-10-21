Dependencies
===========
This library requires jquery and jquery-ui (dialog) to be loaded before this plugin.

Example
=======
```html
<html>
  <head>
    <link type="text/css" rel="stylesheet" href="css/custom-theme/jquery-ui-1.8.16.custom.css" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" ></script>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.16/jquery-ui.min.js" ></script>
    <script type="text/javascript" src="jquery-iframedialog.js"></script>
    <script type="text/javascript">
      $(document).ready(function(){
        $("a#default").iframeDialogLink();
        $("a#url-override").iframeDialogLink({
          url: "example2.html"
        });
        $("a#sized").iframeDialogLink({
          width: 300,
          height: 300
        });
      });
    </script>
  </head>
  <body>
    <a id="default" href="example2.html" >Default</a><br/>
    <a id="url-override" href="#" >URL Override</a><br/>
    <a id="sized" href="example2.html" >Sized</a><br/>
  </body>
</html>
```

