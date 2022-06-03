import React from 'react';
import clsx from 'clsx';
import './Styles.css';

export const Transform3D = () => {
  const [btn, setBtn] = React.useState(false);
  const testAll = () => {
    setBtn(!btn);
  };
  return (
    <>
      <h2 style={{ margin: '30px 50px' }}>Transform 3d</h2>

      <em>
        <li>transform - Applies a 2D or 3D transformation to an element</li>
        <li>
          transform-origin - Allows you to change the position on transformed
          elements
        </li>
        <li>
          transform-style - Specifies how nested elements are rendered in 3D
          space
        </li>
        <li>
          perspective - Specifies the perspective on how 3D elements are viewed
        </li>
        <li>
          perspective-origin - Specifies the bottom position of 3D elements
        </li>
        <li>
          backface-visibility - Defines whether or not an element should be
          visible when not facing the screen
        </li>
      </em>
      <p>
        <strong>Definition and Usage:</strong> The perspective property is used
        to give a 3D-positioned element some perspective. The perspective
        property defines how far the object is away from the user. So, a lower
        value will result in a more intensive 3D effect than a higher value.
        When defining the perspective property for an element, it is the CHILD
        elements that get the perspective view, NOT the element itself. Tip:
        Also look at the perspective-origin property, which defines at which
        position the user is looking at the 3D object. To better understand the
        perspective property, view a demo.
      </p>

      <h4>Rotate()</h4>
      <button onClick={testAll}>Test</button>
      <div className={clsx('divs', 'top-m', { rotateX: btn })}>rotateX</div>
      <div className={clsx('divs', 'top-m', { rotateY: btn })}>rotateY</div>
      <div className={clsx('divs', 'top-m', { rotateZ: btn })}>rotateZ</div>

      <h4>Perspective()</h4>
      <button onClick={testAll}>Test</button>
      <div className={clsx('divs', 'top-m', { perspective: btn })}>
        perspective
      </div>
      <div id="div5">
        DIV5
        <div id="div6">DIV6</div>
      </div>
      {/* <div className={clsx('divs', 'top-m', { rotateY: btn })}>rotateY</div>
      <div className={clsx('divs', 'top-m', { rotateZ: btn })}>rotateZ</div> */}
    </>
  );
};
