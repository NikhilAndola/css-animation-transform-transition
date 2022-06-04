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

      <div style={{ margin: '40px' }}>
        <h2>CSS Transitions</h2>
        <ul>
          In this chapter you will learn about the following properties:
          <li>transition</li>
          <li>transition-delay</li>
          <li>transition-duration</li>
          <li>transition-property</li>
          <li>transition-timing-function</li>
        </ul>

        <div>
          How to Use CSS Transitions? To create a transition effect, you must
          specify two things: the CSS property you want to add an effect to the
          duration of the effect Note: If the duration part is not specified,
          the transition will have no effect, because the default value is 0.
        </div>
        <div>
          <h2>Specify the Speed Curve of the Transition</h2>
          The <code>transition-timing-function</code> property specifies the
          speed curve of the transition effect.
          <h3>
            {' '}
            The transition-timing-function property can have the following
            values:
          </h3>
          <ul>
            <li>
              ease - specifies a transition effect with a slow start, then fast,
              then end slowly (this is default)
            </li>
            <li>
              linear - specifies a transition effect with the same speed from
              start to end
            </li>
            <li>ease-in - specifies a transition effect with a slow start</li>
            <li>ease-out - specifies a transition effect with a slow end</li>
            <li>
              ease-in-out - specifies a transition effect with a slow start and
              end
            </li>
            <li>
              cubic-bezier(n,n,n,n) - lets you define your own values in a
              cubic-bezier function
            </li>
          </ul>
        </div>

        {/* <button onClick={testAll}>Test</button> */}
        {/* <div
          style={{ margin: '40px' }}
          className={clsx('cssTransition', 'top-m', { rotafdsY: btn })}
        >
          Transtitions
        </div> */}
      </div>

      <div className="transitionAZ">
        <div id="div11">linear</div>
        <br />
        <div id="div7">ease</div>
        <br />
        <div id="div8">ease-in</div>
        <br />
        <div id="div9">ease-out</div>
        <br />
        <div id="div10">ease-in-out</div>
        <br />
      </div>

      <div className="div15">Transition-delay</div>
      <div className="div16">Transition + Transform</div>
      <div className="div17">transition Properties</div>
      <div className="div18">shorthand property transition:</div>
    </>
  );
};
