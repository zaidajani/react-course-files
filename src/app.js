const appRoot = document.getElementById('app');

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecition';
    const subtitle = 'Never Put your life in hands of a Computer.';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={ title } subtitle={ subtitle } />
        <Action /> 
        <Options options={ options }/>
        <AddMore />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.subtitle }</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.options.map((option) => {
            return <Option key={ option } optionText={ option } />
          })
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        { this.props.optionText }
      </div>
    );
  }
}

class AddMore extends React.Component {
  render() {
    return (
      <div>
        Add Option Component Here
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, appRoot);