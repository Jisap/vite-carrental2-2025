import React from 'react';

const CurvedCornerIcon = ({ iconClassName, containerClassName = '', iconContainerClassName = '' }) => {
  return (
    <div className='curv'>
      <div className={`section-item-curv ${iconContainerClassName}`}>
        <i className={iconClassName}></i>
      </div>
    </div>
  );
};

export default CurvedCornerIcon;

