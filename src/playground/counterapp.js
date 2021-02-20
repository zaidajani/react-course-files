const appRoot = document.getElementById("app");
let count = 0;

const addOne = () => {
  count++;
  console.log('add one');
  renderCounterApp();
}

const substractOne = () => {
  count--;
  renderCounterApp();
}

const reset = () => {
  count = 0;
  renderCounterApp();
}

const renderCounterApp = () => {
  const templatetwo = (
    <div>
      <h1>Count: { count }</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={substractOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templatetwo, appRoot);
}

renderCounterApp();