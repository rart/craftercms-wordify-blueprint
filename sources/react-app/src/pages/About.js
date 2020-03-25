import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import { WrappedContentType } from '../shared/ContentType';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import { FormattedMessage } from 'react-intl';
import PopularPostsAside from '../shared/PopularPostsAside';
import DropZone from '../shared/DropZone';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import SidebarTags from '../shared/SidebarTags';
import SidebarCategories from '../shared/SidebarCategories';

export default function (props) {
  const {
    model,
    posts,
    model: {
      headline_s,
      // pageTitle_s,
      // pageDescription_s,
      bios_o,
      content_o
    }
  } = props;
  const modelPath = model.craftercms.path;
  return (
    <BaseLayout>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">

              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-4">{headline_s}</h2>
                  <DropZone component="div" model={model}>
                  {
                    content_o?.map(component =>
                      <WrappedContentType
                        model={component}
                        parentModelId={modelPath}
                        key={component.craftercms.id}
                        wrapper={{
                          component: 'div',
                          className: 'mb-5'
                        }}
                      />
                    )
                  }
                  </DropZone>
                </div>
              </div>

              <div className="row mb-5 mt-5">
                <div className="col-md-12 mb-5">
                  <h2>
                    <FormattedMessage
                      id="common.latestPostSectionTitle"
                      defaultMessage="Latest Posts"
                    />
                  </h2>
                </div>
                <div className="col-md-12">
                  {
                    posts?.map((post) =>
                      <PostCard model={post} format={LANDSCAPE} key={post.craftercms.id} />
                    )
                  }
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item active"><a className="page-link" href="/">&lt;</a></li>
                      <li className="page-item"><a className="page-link" href="/">1</a></li>
                      <li className="page-item"><a className="page-link" href="/">2</a></li>
                      <li className="page-item"><a className="page-link" href="/">3</a></li>
                      <li className="page-item"><a className="page-link" href="/">4</a></li>
                      <li className="page-item"><a className="page-link" href="/">5</a></li>
                      <li className="page-item"><a className="page-link" href="/">&gt;</a></li>
                    </ul>
                  </nav>
                </div>
              </div>

            </div>
            <div className="col-md-12 col-lg-4 sidebar">

              <SidebarSearch />

              <SidebarBios bios={bios_o} />

              <PopularPostsAside posts={posts} />

              <SidebarCategories/>

              <SidebarTags/>

            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

