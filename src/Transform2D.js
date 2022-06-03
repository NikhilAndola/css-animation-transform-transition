import React from 'react';
import './translate.css';
import clsx from 'clsx';

export const Transform2D = () => {
  const [btn, setBtn] = React.useState(false);
  const testAll = () => {
    setBtn(!btn);
  };

  console.log(btn);

  return (
    <>
      <div>
        <h2>CSS 2D Transforms Methods</h2>
        CSS 2D Transforms Methods With the CSS transform property you can use:
        the following 2D transformation methods:
        <ul>
          <li>translate()</li>
          <li>rotate()</li>
          <li>scaleX()</li>
          <li>scaleY()</li>
          <li>scale()</li>
          <li>skewX()</li>
          <li> skewY()</li>
          <li> skew()</li>
          <li> matrix()</li>
        </ul>
      </div>
      <div className="parent-box">
        <button onClick={testAll}>Test all</button>
        <div>
          <h4>translate()</h4>
          <div
            className={clsx('translate', { clr: btn }, { ['trans']: btn })}
          ></div>
        </div>
        <div>
          <h4>rotate()</h4>
          <div className={clsx('translate', { rotate: btn })}></div>
          <div
            className={clsx('translate', 'top-m', { rotateNegative: btn })}
          ></div>
        </div>

        <div>
          <h4>scale()</h4>
          <button onClick={testAll}>Test</button>
          <div className={clsx('translate', { scale: btn })}></div>
          <div className={clsx('translate', 'top-m', { scaleX: btn })}></div>
          <div className={clsx('translate', 'top-m', { scaleY: btn })}></div>
        </div>

        <div style={{ marginTop: '100px' }}>
          <h4>skew()</h4>
          <button onClick={testAll}>Test</button>
          <div className={clsx('translate', 'top-m', { skew: btn })}></div>
          <div className={clsx('translate', 'top-m', { skewX: btn })}>
            skewX
          </div>
          <div className={clsx('translate', 'top-m', { skewY: btn })}>
            skewY
          </div>
        </div>

        <div>
          <h4>matrix()</h4>
          <em>
            The matrix() method combines all the 2D transform methods into one.
            The matrix() method take six parameters, containing mathematic
            functions, which allows you to rotate, scale, move (translate), and
            skew elements. The parameters are as follow:
            <u>
              matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY())
            </u>
          </em>
          <button onClick={testAll}>Test</button>
          <div className={clsx('translate', { scale: btn })}></div>
          {/* <div className={clsx('translate', 'top-m', { scaleX: btn })}></div> */}
          {/* <div className={clsx('translate', 'top-m', { scaleY: btn })}></div> */}
        </div>
      </div>
    </>
  );
};
