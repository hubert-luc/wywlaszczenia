const navCont = document.querySelector('.nav_wrapper');

const navbar = `<nav class="navbar navbar-default">
<!-- Brand and toggle get grouped for better mobile display -->
<div class="navbar-header">
    <a class="navbar-brand" href="index.html">
     <h2 class='logo'>wywlaszczenia.com</h2>
   </a>
  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
    <span class="sr-only">Toggle navigation</span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
</div>
<!-- Collect the nav links, forms, and other content for toggling -->
<div class="collapse navbar-collapse" id="navbar-collapse-1">
  <ul class="nav navbar-nav">
     <li><a href="index.html">Strona główna</a></li>
    
  <li><a href="practise-area.html">Usługi</a></li>
   <!-- <li><a href="blog.html">BLOG</a></li> -->
    <li class="dropdown_menu"><a href="#" class="transition-ease">FEATURES</a>
            <ul class="sub_menu">
             <li><a href="faq.html" class="transition3s">faq page</a></li>
             <li><a href="404.html" class="transition3s">Error Page</a></li>
             <li><a href="gallery.html" class="transition3s">Gallery One</a></li>
             <li><a href="gallery-2.html" class="transition3s">gallery two</a></li>
         </ul>
    </li>
    <li><a href="kontakt.html" class="transition-ease">Kontakt</a></li>
  </ul>
</div>
<!-- /.navbar-collapse -->
</nav>`

navCont.insertAdjacentHTML('afterbegin', navbar)