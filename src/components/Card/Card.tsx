import React, { FunctionComponent, HTMLAttributes } from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import { HasRootRef } from '../../types';

export interface CardProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
  size?: 's' | 'm' | 'l';
  mode?: 'tint' | 'shadow' | 'outline';
}

const Card: FunctionComponent<CardProps> = ({ size, mode, children, style, className, getRootRef, ...restProps }: CardProps) => {
  const platform = usePlatform();

  return (
    <div
      {...restProps}
      style={style}
      ref={getRootRef}
      className={classNames(className, getClassname('Card', platform), `Card--sz-${size}`, `Card--md-${mode}`)}
    >
      <div className="Card__in">
        {children}
      </div>
    </div>
  );
};

Card.defaultProps = {
  size: 'm',
  mode: 'tint',
};

export default Card;
