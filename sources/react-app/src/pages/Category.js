import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import PopularPostsAside from '../shared/PopularPostsAside';
import PostCard, { LANDSCAPE } from '../shared/PostCard';
import SidebarBios from '../shared/SidebarBios';
import SidebarSearch from '../shared/SidebarSearch';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';

export default function (props) {
  const { bios_o, posts } = props;
  return (
    <BaseLayout>
      <section className="site-section pt-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h2 className="mb-4">Category: Food</h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row mb-5 mt-5">
                <div className="col-md-12">
                  {
                    posts?.map((post) =>
                      <PostCard key={post.craftercms.id} model={post} format={LANDSCAPE} />
                    )
                  }
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
