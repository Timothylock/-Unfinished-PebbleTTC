/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

// Variables
var UI = require('ui');
var Vector2 = require('vector2');
var route_stop = [];
var eta = [];
//var i;

//App Test
route_stop[0] = 'N 129A @ Hwy 7';
route_stop[1] = 'S 129 @ Steeles';
route_stop[2] = "W 34 @ McCowan";
eta[0] = '1 min';
eta[1] = '5 min';
eta[2] = '3 min';

// Recieving network messages
Pebble.addEventListener("appmessage",
  function(e) {
    console.log("Received message: " + e.payload);
    console.log(e);
  }
);



// UI of Program
var main = new UI.Card({
  title: 'PebbleTTC',
  icon: 'images/iconProg.png',
  subtitle: 'Find when the next TTC bus arrives',
  body: 'Press up to continue'
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: route_stop[0],
        subtitle: eta[0]
      }, {
        title: route_stop[1],
        subtitle: eta[1]
      }, {
        title: route_stop[2],
        subtitle: eta[2]
      }, {
        title: route_stop[3],
        subtitle: eta[3]
      }, {
        title: route_stop[4],
        subtitle: eta[4]
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

function aboutWindow(){
  var wind = new UI.Window();
  var title = new UI.Text({
    position: new Vector2(0, 40),
    size: new Vector2(144, 30),
    font: 'gothic-28-bold',
    text: 'PebbleTTC',
    textAlign: 'center'
  });
  
  var subtitle = new UI.Text({
    position: new Vector2(0, 76),
    size: new Vector2(144, 30),
    font: 'gothic-18-bold',
    text: 'A hackathon project Timothy Lock',
    textAlign: 'center'
  });
  
  var name2 = new UI.Text({
    position: new Vector2(0, 110),
    size: new Vector2(144, 30),
    font: 'gothic-18-bold',
    text: 'Jason Leung',
    textAlign: 'center'
  });
  
  var name3 = new UI.Text({
    position: new Vector2(0, 127),
    size: new Vector2(144, 30),
    font: 'gothic-18-bold',
    text: 'Jessica Ip',
    textAlign: 'center'
  });
  wind.add(title);
  wind.add(subtitle);
  wind.add(name2);
  wind.add(name3);
  wind.show();
}
