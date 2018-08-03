import React from 'react';
import { render } from 'react-dom';
import { HashRouter, Link } from 'react-router-dom';

import './style.scss';
import Routes from './Routes';
import { Provider, createStore } from './context';
import reactLogo from './assets/React-icon.png';

// 新建一个全局 store
const store = createStore();

class App extends React.Component {
  componentDidMount() {
    // 父组件触发状态更新
    setInterval(() => {
      store.setState({ date: new Date().toString() });
    }, 1e3);
  }

  render() {
    return (
      <Provider>
        <HashRouter>
          <main className="container">
            <div>
              <h1>hello world!</h1>
              <img className="container__image" alt="react logo" src={reactLogo} />
              <p>准备就绪!!!</p>
            </div>
            <ul className="left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <Routes />
          </main>
        </HashRouter>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
