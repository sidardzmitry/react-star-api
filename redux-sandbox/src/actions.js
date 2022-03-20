export const dec = () => {
    return ({type: 'DEC'})
  };
export const inc = () => {
    return ({type: 'INC'})
  };
export const rnd = (value) => {
    return ({type: 'RND', value})
  };