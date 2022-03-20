import { bindActionCreators, createStore } from "redux";
import * as actions from './actions';
import reducer from './reducer';

const counter = document.querySelector('.counter');
const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);


document.querySelector('#inc')
.addEventListener('click', inc);

document
.querySelector('#dec')
.addEventListener('click', dec);

document
.querySelector('#rnd')
.addEventListener('click', () => {
  const value = Math.floor(Math.random() * 20);
  rnd(value)
});

const update = () => {
  counter.innerHTML = store.getState()
};

store.subscribe(update)


