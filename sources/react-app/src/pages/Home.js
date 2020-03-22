import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import Bio from '../components/Bio';
import Slider from '../components/Slider';
import { defineMessages, FormattedMessage, useIntl } from 'react-intl';
// import environment from '../relayEnvironment';
// import graphql from 'babel-plugin-relay/macro';
// import { parseDescriptor } from '@craftercms/content';
// import { createRenderProp } from '../shared/QueryRenderProp';

const translations = defineMessages({
  searchFormPlaceholder: {
    id: 'home.searchFormPlaceholder',
    defaultMessage: 'Type a keyword and hit enter'
  }
});

// export default () => (
//   <QueryRenderer
//     environment={environment}
//     query={graphql`
//
//     `}
//     render={createRenderProp((props) => {
//       const content = parseDescriptor(props.main.items[0]);
//       return <HomeComponent model={content}/>;
//     })}
//   />
// );

export default function () {
  const { formatMessage } = useIntl();
  return (
    <BaseLayout>
      <section className="site-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Slider />
            </div>
          </div>
        </div>
      </section>
      <section className="site-section py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4">
                <FormattedMessage
                  id="home.latestPostSectionTitle"
                  defaultMessage="Latest Posts"
                />
              </h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                <div className="col-md-6">
                  <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                     className="blog-entry">
                    <img src="/static-assets/images/img_5.jpg" alt="" />
                    <div className="blog-content-body">
                      <div className="post-meta">
                        <span className="author mr-2">
                          <img src="/static-assets/images/person_1.jpg" alt="" /> Colorlib
                        </span>{' • '}
                        <span className="mr-2">March 15, 2018</span>{' • '}
                        <span className="ml-2"><span className="fa fa-comments" /> 3</span>
                      </div>
                      <h2>How to Find the Video Games of Your Youth</h2>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a href="/articles/2020/03/cool-new-way-for-men-to-wear-socks-and-sandals"
                     className="blog-entry element-animate" data-animate-effect="fadeIn">
                    <img src="/static-assets/images/img_6.jpg" alt="" />
                    <div className="blog-content-body">
                      <div className="post-meta">
                        <span className="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="" /> Colorlib</span>{' • '}
                        <span className="mr-2">March 15, 2018 </span> {' • '}
                        <span className="ml-2"><span className="fa fa-comments" /> 3</span>
                      </div>
                      <h2>How to Find the Video Games of Your Youth</h2>
                    </div>
                  </a>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item  active"><a className="page-link" href="/">&lt;</a></li>
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
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search" />
                    <input
                      type="text"
                      className="form-control"
                      id="s"
                      placeholder={formatMessage(translations.searchFormPlaceholder)}
                    />
                  </div>
                </form>
              </div>

              <div className="sidebar-box">
                <Bio />
              </div>

              <div className="sidebar-box">
                <h3 className="heading">
                  <FormattedMessage
                    id="home.popularPostSectionTitle"
                    defaultMessage="Popular Posts"
                  />
                </h3>
                <div className="post-entry-sidebar">
                  <ul>
                    <li>
                      <a href="/">
                        <img src="/static-assets/images/img_2.jpg" alt="" className="mr-4" />
                        <div className="text">
                          <h4>How to Find the Video Games of Your Youth</h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-box">
                <h3 className="heading">
                  <FormattedMessage
                    id="home.categoriesSectionTitle"
                    defaultMessage="Categories"
                  />
                </h3>
                <ul className="categories">
                  <li><a href="/">Food <span>(12)</span></a></li>
                  <li><a href="/">Travel <span>(22)</span></a></li>
                  <li><a href="/">Lifestyle <span>(37)</span></a></li>
                  <li><a href="/">Business <span>(42)</span></a></li>
                  <li><a href="/">Adventure <span>(14)</span></a></li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h3 className="heading">
                  <FormattedMessage
                    id="home.tagsSectionTitle"
                    defaultMessage="Tags"
                  />
                </h3>
                <ul className="tags">
                  <li><a href="/">Travel</a></li>
                  <li><a href="/">Adventure</a></li>
                  <li><a href="/">Food</a></li>
                  <li><a href="/">Lifestyle</a></li>
                  <li><a href="/">Business</a></li>
                  <li><a href="/">Freelancing</a></li>
                  <li><a href="/">Travel</a></li>
                  <li><a href="/">Adventure</a></li>
                  <li><a href="/">Food</a></li>
                  <li><a href="/">Lifestyle</a></li>
                  <li><a href="/">Business</a></li>
                  <li><a href="/">Freelancing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}
