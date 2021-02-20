console.log("app.js is running");

// JSX javascript XML
const templateEx = (
  <div>
    <h1>It changed!</h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);



function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  } else {
    return undefined;
  }
}

const user = {
  name: 'zaid',
  age: 12,
  location: 'navimumbai'
}

const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const article = {
  title: "Indecision apps",
  subtitle: "Never put your lives in hands of your computer: or else matrix will come true ",
  options: ['One', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
