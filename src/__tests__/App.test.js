import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import App from '../App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('testing the app', () => {
  it('testing HomePage UI', () => {
    act(() => {
      render(
        <React.StrictMode>
          <BrowserRouter>
            <Provider store={store}>
              <App />
            </Provider>
          </BrowserRouter>
        </React.StrictMode>, container,
      );
    });

    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
