const clock = document.getElementById("clock");
// let date = new Date();
// clock.innerHTML = `${date.toLocaleTimeString()}`;

// 🔺 this will show time but we need to refresh every time and we get time changes

// but we need every second time show be change and to show us for this we use a simple and short method which should control events of [js] let see how it work 🔻

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

// 🔺 this will want that you should give me a method and tell me interval that in which time I can contineu run this fn().
