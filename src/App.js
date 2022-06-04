import React from 'react';
import './style.css';
import { Transform2D } from './Transform2D/Transform2D';
import { Transform3D } from './Transform3D/Transform3D';
import { Animation } from './Animation/Animation';
import { Spinner } from './spinner/Spinner.js';

// let Arr = Array(5);
// let b = Arr.concat([1, 2, 3, 4, 5]);
// console.log(b, b.length);

// let a = [1, '', 2, 3, 4];
// console.log('length', a.length);
// let b = a.filter((item) => {
//   // if (item !== '') return item;
//   if (item !== '') if (item !== 2) if (item !== 3) if (item !== 4) return item;
// });
// console.log('value of b', b, b.length);
// console.log([1,2,3].includes(12));
console.log('mango'.includes('gos'));

console.log('mango//boomer//mango');

export default function App() {
  const [loading, setLoading] = React.useState(false);
  const turnLoading = () => {
    setLoading(!loading);
  };
  return (
    <div>
      <h1>Css animations complete!</h1>
      <button onClick={turnLoading}>click to show loading</button>
      {loading && <Spinner />}
      <Transform2D />
      <Transform3D />
      <Animation />
    </div>
  );
}
