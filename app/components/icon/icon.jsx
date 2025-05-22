import { classes } from '~/utils/style';
import styles from './icon.module.css';
import { forwardRef, isValidElement } from 'react';
import sprites from './icons.svg';
import React from 'react';

export const Icon = forwardRef(({ icon, className, size = 24, ...rest }, ref) => {
  // icon が React component（react-iconsなど）だったらそのまま使う
  if (typeof icon === 'function' || isValidElement(icon)) {
    const IconComponent = icon;
    return <IconComponent className={classes(styles.icon, className)} size={size} ref={ref} {...rest} />;
  }

  // 通常のSVGスプライトを使う場合
  return (
    <svg
      aria-hidden
      ref={ref}
      className={classes(styles.icon, className)}
      width={size}
      height={size}
      {...rest}
    >
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
});
