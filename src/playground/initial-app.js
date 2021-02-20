const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in hands of computers',
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }

  reRender();
}

const removeAll = () => {
  app.options = [];
  reRender();
}

const onMakeDescision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

const reRender = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button onClick={removeAll}>Remove all</button>
      <button disabled={app.options.length === 0} onClick={onMakeDescision}>What should I do</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })  
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );
  
  ReactDOM.render(template, appRoot); 
}

reRender();