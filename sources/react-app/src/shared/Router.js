import React, { lazy, useEffect, useState } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CircularProgressSpinner from './CircularProgressSpinner';
import NotFound, { NotDeveloped } from '../pages/NotFound';
import { fetchQuery } from '../relayEnvironment';
import byUrlQuery from './byUrlQuery';
import { parseDescriptor } from '@craftercms/content';

const ContentTypeMap = {
  '/page/entry': lazy(() => import('../pages/Home')),
  '/page/about': lazy(() => import('../pages/About')),
  '/page/contact': lazy(() => import('../pages/Contact')),
  '/page/category': lazy(() => import('../pages/Category')),
  '/page/post': lazy(() => import('../pages/Post')),
  '/component/header': lazy(() => import('../components/Header')),
  '/component/footer': lazy(() => import('../components/Footer')),
  '/component/bio': lazy(() => import('../components/Bio')),
  '/component/image': lazy(() => import('../components/Image')),
  '/component/responsive_columns': lazy(() => import('../components/ResponsiveColumns')),
  '/component/rich_text': lazy(() => import('../components/RichText')),
  '/component/slider': lazy(() => import('../components/Slider'))
};

function DynamicRoute(props) {

  const { match } = props;
  const url = match.url;
  const [Component, setComponent] = useState(() => CircularProgressSpinner);

  useEffect(() => {
      let destroyed = false;
      fetchQuery(
        byUrlQuery.params,
        { url: `.*${url === '/' ? 'website/index' : url}.*` }
      ).then(({ data }) => {
        if (!destroyed) {
          const content = parseDescriptor(data.content.items?.[0]);
          if (!content) {
            setComponent(NotFound);
          } else {
            setComponent(() => (ContentTypeMap[content.craftercms.contentTypeId] || NotDeveloped));
          }
        }
      });
      return () => {
        destroyed = true;
      }
  }, [url]);

  // return (
  //   <QueryRenderer
  //     variables={{ url: `.*${url === '/' ? 'website/index' : url}.*` }}
  //     render={createRenderProp((props) => {
  //       const content = props.content.items?.[0];
  //       if (!content) {
  //         return <NotFound />;
  //       } else {
  //         // console.log(content, props.content);
  //         return 'Hello';
  //       }
  //     })}
  //     environment={environment}
  //     query={byUrlQuery}
  //   />
  // );

  // (Component === NotDeveloped) && console.error(
  //   `The "{contentTypeId}" content type is not mapped to any React component on the App.`
  // );

  return <Component {...props} />;

}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ContentTypeMap['/page/entry']} />
        <Route path="/*" component={DynamicRoute} />
      </Switch>
    </BrowserRouter>
  );
}
