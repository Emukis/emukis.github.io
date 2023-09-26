let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: #eda7df;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #eda7df;">Me gustan las matemáticas, el liderazgo, el arte y el diseño web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
