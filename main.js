const worldArray = [];

// module aliases
let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Mouse = Matter.Mouse,
  MouseConstraint = Matter.MouseConstraint;

// create an engine
let engine = Engine.create();

// create a renderer
let render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 1920,
    height: 1080,
  },
});
const width = render.canvas.width;
const height = render.canvas.height;

//Mouse
let mouse = Mouse.create(render.canvas),
  mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.4,
      render: {
        visible: true,
      },
    },
  });
worldArray.push(mouseConstraint);
render.mouse = mouse;

//Floor
worldArray.push(Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }));

for (let i = 0; i < 22; i++) {
  worldArray.push(Bodies.rectangle(width / 2, height / 2, 20, 20));
}

World.add(engine.world, worldArray);
Engine.run(engine);
Render.run(render);
