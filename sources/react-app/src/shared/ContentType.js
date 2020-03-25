import NotFound, { NotDeveloped } from '../pages/NotFound';
import contentTypeMap from './contentTypeMap';
import React from 'react';
import { usePencil } from './hooks';

export default function (props) {
  const ice = usePencil(props);
  return <ContentType ice={ice} {...props} />;
}

export function ContentType(props) {
  const { model } = props;
  const Component = (model === null) ? NotFound : (contentTypeMap[model.craftercms.contentTypeId] || NotDeveloped);
  return <Component {...props} />;
}

export function WrappedContentType(props) {

  const { wrapper, wrapper: { component: Wrapper = 'div' } } = props;

  const ice = usePencil(props);

  // Props that get passed down to the wrapper element
  // these could be things like className or any other
  // HTML attributes or props
  const cleanWrapperProps = { ...wrapper };
  delete cleanWrapperProps.component;

  // Props that get passed down to the ContentType
  const cleanPassDownProps = { ...props };
  delete cleanPassDownProps.wrapper;

  return (
    <Wrapper {...ice} {...cleanWrapperProps}>
      <ContentType {...cleanPassDownProps} />
    </Wrapper>
  );
}
