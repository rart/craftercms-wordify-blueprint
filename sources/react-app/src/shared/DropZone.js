import { useDnD } from './hooks';
import React from 'react';

export default function (props) {
  const ice = useDnD(props);
  const { component: Component = 'div' } = props;
  const cleanProps = { ...props };
  delete cleanProps.model;
  delete cleanProps.component;
  return <Component {...ice} {...cleanProps} />;
}
