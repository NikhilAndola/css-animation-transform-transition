import React from 'react';
import './animation.css';
import clsx from 'clsx';

export const Animation = () => {
  const [btn, setBtn] = React.useState(false);
  const testAll = () => {
    setBtn(!btn);
  };

  console.log(btn);

  return (
    <>
      <div>
        <h2>CSS Animation Methods</h2>
        <div>
          <ul>
            <li>@keyframes</li>
            <li>animation-name</li>
            <li>animation-duration</li>
            <li>animation-delay</li>
            <li>animation-iteration-count</li>
            <li>animation-direction</li>
            <li>animation-timing-function</li>
            <li>animation-fill-mode</li>
            <li>animation</li>
          </ul>
        </div>
        <div>
          <pre>
            What are CSS Animations?
            <br /> An animation lets an element gradually change from one style
            to another.
            <br /> You can change as many CSS properties you want, as many times
            as you want.
            <br />
            To use CSS animation, you must first specify some keyframes for the
            animation.
            <br /> Keyframes hold what styles the element will have at certain
            times.
          </pre>
        </div>
        <div>
          The @keyframes Rule When you specify CSS styles inside the @keyframes
          rule, the animation will gradually change from the current style to
          the new style at certain times. To get an animation to work, you must
          bind the animation to an element. The following example binds the
          "example" animation to the div element. The animation will last for 4
          seconds, and it will gradually change the background-color of the div
          element from "red" to "yellow".
        </div>
        <div className="animate"></div>
        <div>
          Note:The animation-duration property defines how long an animation
          should take to complete. If the animation-duration property is not
          specified, no animation will occur, because the default value is 0s (0
          seconds).In the example above we have specified when the style will
          change by using the keywords "from" and "to" (which represents 0%
          (start) and 100% (complete)).It is also possible to use percent. By
          using percent, you can add as many style changes as you like.The
          following example will change the background-color of the{' '}
          <div>
            {' '}
            element when the animation is 25% complete, 50% complete, and again
            when the animation is 100% complete:`
          </div>
        </div>
        <div className="mt-5">
          <h2>Delay an Animation</h2>
          The animation-delay property specifies a delay for the start of an
          animation. The following example has a 2 seconds delay before starting
          the animation:
        </div>
        <div className="mt-5 div20"></div>
        <div className="mt-5">
          <h2>Set How Many Times an Animation Should Run</h2>
          The animation-iteration-count property specifies the number of times
          an animation should run. The following example will run the animation
          3 times before it stops:
        </div>
        <div className="mt-5 div21"></div>
        <h3>Run Animation in Reverse Direction or Alternate Cycles</h3>
        The animation-direction property specifies whether an animation should
        be played forwards, backwards or in alternate cycles.
        <strong>
          The animation-direction property can have the following values:
        </strong>
        <ul>
          <li>
            normal - The animation is played as normal (forwards). This is
            default
          </li>
          <li>
            reverse - The animation is played in reverse direction (backwards)
          </li>
          <li>
            alternate - The animation is played forwards first, then backwards
          </li>
          <li>
            alternate-reverse - The animation is played backwards first, then
            forwards
          </li>
        </ul>
        The following example will run the animation in reverse direction
        (backwards):
      </div>
      <div className="mt-5 div22"></div>
      <div className="mt-5">
        <h2>Specify the Speed Curve of the Animation</h2>
        <strong>
          The animation-timing-function property specifies the speed curve of
          the animation. The animation-timing-function property can have the
          following values:
        </strong>

        <ul>
          <li>
            ease - Specifies an animation with a slow start, then fast, then end
            slowly (this is default)
          </li>
          <li>
            linear - Specifies an animation with the same speed from start to
            end
          </li>
          <li>ease-in - Specifies an animation with a slow start</li>
          <li>ease-out - Specifies an animation with a slow end</li>
          <li>
            ease-in-out - Specifies an animation with a slow start and end
          </li>
          <li>
            cubic-bezier(n,n,n,n) - Lets you define your own values in a
            cubic-bezier function
          </li>
        </ul>
        <div className="mt-5 timingfunction">
          <div id="div23">linear</div>
          <div id="div24">ease</div>
          <div id="div25">ease-in</div>
          <div id="div26">ease-out</div>
          <div id="div27">ease-in-out</div>
        </div>
      </div>
      <div>
        <h2>Specify the fill-mode For an Animation</h2>
        CSS animations do not affect an element before the first keyframe is
        played or after the last keyframe is played. The animation-fill-mode
        property can override this behavior. The animation-fill-mode property
        specifies a style for the target element when the animation is not
        playing (before it starts, after it ends, or both). The
        animation-fill-mode property can have the following values:
        <ul>
          <li>
            none - Default value. Animation will not apply any styles to the
            element before or after it is executing
          </li>
          <li>
            forwards - The element will retain the style values that is set by
            the last keyframe (depends on animation-direction and
            animation-iteration-count){' '}
          </li>
          <li>
            backwards - The element will get the style values that is set by the
            first keyframe (depends on animation-direction), and retain this
            during the animation-delay period.
          </li>
          <li>
            both - The animation will follow the rules for both forwards and
            backwards, extending the animation properties in both directions
          </li>
        </ul>
        <strong>
          The following example lets the (div) element retain the style values
          from the last keyframe when the animation ends:
        </strong>
        <div className="div28"></div>
      </div>
      <div className="mt-6">
        <h2>Animation Shorthand Property</h2>
        <div className="div29"></div>
      </div>
    </>
  );
};
