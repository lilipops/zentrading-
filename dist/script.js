var contentArr = [
  {title: 'Nuestra WEB', href: 'http://titanglobaltech.net/'},
  {title: 'github', href: 'https://github.com/b1tn3r'},
  {title: 'codepen', href: 'https://codepen.io/b1tn3r/'},
  {title: 'facebook', href: 'https://www.facebook.com/TitanGlobalTech'},
  {title: 'google+', href: 'https://plus.google.com/u/1/b/101737025633422868987/101737025633422868987'},
  {title: 'twitter', href: 'https://twitter.com/TitanGlobalTech'},
  {title: 'instagram', href: 'https://www.instagram.com/?hl=en'}
];

var items = $('.social-item');
var title = $(".social-title");
var link = $('.link');

items.hover(function(e) {
  var data = contentArr[$(e.currentTarget).attr('id')];
  var getTitle = data.title;
  title.text(getTitle);
  $('.link').attr('href', data.href).addClass('link--visibility');
  
  items.removeClass('current');
  $(this).addClass('current');
});

// Estilo del fondo fijo de Instagram
$('.social-container').css({
  'background': 'radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)'
});
