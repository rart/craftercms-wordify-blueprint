import React from 'react';
import BaseLayout from '../shared/BaseLayout';
import PopularPostsAside from '../shared/PopularPostsAside';
import SidebarBios from '../shared/SidebarBios';
import SidebarCategories from '../shared/SidebarCategories';
import SidebarTags from '../shared/SidebarTags';

export default function (props) {
  const {
    bios_o,
    posts
  } = props;
  return (
    <BaseLayout>
      <section className="site-section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-6">
              <h1>Contact Me</h1>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">

              <form action="#" method="post">
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control "/>
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" className="form-control "/>
                  </div>
                  <div className="col-md-12 form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control "/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 form-group">
                    <label htmlFor="message">Write Message</label>
                    <textarea name="message" id="message" className="form-control " cols="30" rows="8"/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary"/>
                  </div>
                </div>
              </form>


            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <div className="sidebar-box search-form-wrap">
                <form action="#" className="search-form">
                  <div className="form-group">
                    <span className="icon fa fa-search"/>
                    <input type="text" className="form-control" id="s" placeholder="Type a keyword and hit enter"/>
                  </div>
                </form>
              </div>

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
