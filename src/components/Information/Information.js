import React from 'react';
import './Information.css';

const information = ({ data }) => {
  if (data) {
    const age = data.outputs[0].data.regions[0].data.concepts[0].name;
    const gender = data.outputs[0].data.regions[0].data.concepts[20].name;
    const multiculturalAppearance =
      data.outputs[0].data.regions[0].data.concepts[22].name;
    return (
      <div className="prop f3 center">
        <h4>
          The magic brain has predicted that the subject in the image is {age}{' '}
          years of age.
          {gender === 'feminine'
            ? ' The magic brain also thinks that the subject is a female. '
            : ' The magic brain also thinks that the subject is a male. '}
          At last, the magic brain also thinks that the subject's Multicultural
          Appearance is {multiculturalAppearance}.
        </h4>
        <h2 className="gray">
          {' '}
          Note: These predictions are not completely accurate. These are merely
          predictions made by using a software and the creator does not have any
          intent to hurt any user's feelings.
        </h2>
      </div>
    );
  } else {
    return null;
  }
};

export default information;
