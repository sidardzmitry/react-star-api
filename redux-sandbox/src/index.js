import { createStore } from "redux";

const reducer = (state = 0, action)  => {
  switch (action.type) {
    case 'INC':
    return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(reducer);

const dec = document.querySelector('#dec');
const inc = document.querySelector('#inc');
const counter = document.querySelector('.counter');

dec.addEventListener('click', () => {
  store.dispatch({type: 'DEC'})
})
inc.addEventListener('click', () => {
  store.dispatch({type: 'INC'})
})

const update = () => {
  counter.innerHTML = store.getState()
}

store.subscribe(update)


