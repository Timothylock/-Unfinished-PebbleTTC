/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'PebbleTTC',
  icon: 'images/menu_icon.png',
  subtitle: 'Find the next TTC bus/streetcar',
  body: 'Press up to continue'
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  aboutWindow();
});

main.on('click', 'down', function(e) {
  aboutWindow();
});

function aboutWindow() {
    var wind = new UI.Window();
  var title = new UI.Text({
    position: new Vector2(0, 80),
    size: new Vector2(144, 30),
    font: 'gothic-28-bold',
    text: 'PebbleTTC',
    textAlign: 'center'
  });
  var subtitle = new UI.Text({
    position: new Vector2(0, 120),
    size: new Vector2(144, 30),
    font: 'gothic-20-bold',
    text: 'A hackathon project \n by Timothy Lock',
    textAlign: 'center'
  });
  wind.add(title);
  wind.add(subtitle);
  wind.show();              // the function returns the product of p1 and p2
}

