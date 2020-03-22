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
  const [state, setState] = useState({ content: null, component: CircularProgressSpinner });
  const { component: Component } = state;

  useEffect(() => {
    let destroyed = false;
    fetchQuery(
      { text: byUrlQuery.params.text.replace(/__typename/g, '') },
      {
        url: `.*${url === '/' ? 'website/index' : url}.*`
      }
    ).then(({ data }) => {
      if (!destroyed) {
        const model = parseDescriptor(data.content.items?.[0]);
        const posts = parseDescriptor(data.posts.items);
        setState({
          content: { model, posts },
          component: model
            ? (ContentTypeMap[model.craftercms.contentTypeId] || NotDeveloped)
            : NotFound
        });
      }
    });
    return () => {
      destroyed = true;
    };
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
  //         return 'ToDo';
  //       }
  //     })}
  //     environment={environment}
  //     query={byUrlQuery}
  //   />
  // );

  (Component === NotDeveloped) && console.error(
    `The "{contentTypeId}" content type is not mapped to any React component on the App.`
  );

  return <Component {...state.content} {...props} />;

}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/*" component={DynamicRoute} />
      </Switch>
    </BrowserRouter>
  );
}
