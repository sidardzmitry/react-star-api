export const dec = () => {
    return ({type: 'DEC'})
  };
export const inc = () => {
    return ({type: 'INC'})
  };
export const rnd = () => {
    return {
      type: 'RND', 
      value: Math.floor(Math.random() * 20)
    };
  };