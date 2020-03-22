import React from 'react';
import BaseLayout from '../shared/BaseLayout';

export default function (props) {
  const contentModel = {};
  return (
    <BaseLayout>
      <section class="site-section py-lg">
        <div class="container">

          <div class="row blog-entries element-animate">

            <div class="col-md-12 col-lg-8 main-content">
              <img src={contentModel.mainImage_s} alt="" class="img-fluid mb-5"/>
                <div class="post-meta">
                  <span class="author mr-2"><img src="/static-assets/images/person_1.jpg" alt="Colorlib" class="mr-2"/> Colorlib</span>&bullet;
                  <span class="mr-2">{contentModel.createdDate_dt}</span> &bullet;
                  <span class="ml-2"><span class="fa fa-comments"/> 3</span>
                </div>
                <h1 class="mb-4">{contentModel.headline_s}</h1>
                <a class="category mb-5" href="/">Food</a> <a class="category mb-5" href="/">Travel</a>

                <div class="post-content-body">
                  contentModel.content_o.item
          </div>


          <div class="pt-5">
            <p>Categories:  <a href="/">Food</a>, <a href="/">Travel</a>  Tags: <a href="/">#manila</a>, <a href="/">#asia</a></p>
          </div>


          <div class="pt-5">
            <h3 class="mb-5">6 Comments</h3>
            <ul class="comment-list">
              <li class="comment">
                <div class="vcard">
                  <img src="/static-assets/images/person_1.jpg" alt="Image placeholder"/>
                </div>
                <div class="comment-body">
                  <h3>Jean Doe</h3>
                  <div class="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="/" class="reply rounded">Reply</a></p>
                </div>
              </li>

              <li class="comment">
                <div class="vcard">
                  <img src="/static-assets/images/person_1.jpg" alt="Image placeholder"/>
                </div>
                <div class="comment-body">
                  <h3>Jean Doe</h3>
                  <div class="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="/" class="reply rounded">Reply</a></p>
                </div>

                <ul class="children">
                  <li class="comment">
                    <div class="vcard">
                      <img src="/static-assets/images/person_1.jpg" alt="Image placeholder"/>
                    </div>
                    <div class="comment-body">
                      <h3>Jean Doe</h3>
                      <div class="meta">January 9, 2018 at 2:21pm</div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                      <p><a href="/" class="reply rounded">Reply</a></p>
                    </div>


                    <ul class="children">
                      <li class="comment">
                        <div class="vcard">
                          <img src="/static-assets/images/person_1.jpg" alt="Image placeholder"/>
                        </div>
                        <div class="comment-body">
                          <h3>Jean Doe</h3>
                          <div class="meta">January 9, 2018 at 2:21pm</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                          <p><a href="/" class="reply rounded">Reply</a></p>
                        </div>

                        <ul class="children">
                          <li class="comment">
                            <div class="vcard">
                              <img src="/static-assets/images/person_1.jpg" alt="Image placeholder"/>
                            </div>
                            <div class="comment-body">
                              <h3>Jean Doe</h3>
                              <div class="meta">January 9, 2018 at 2:21pm</div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                              <p><a href="/" class="reply rounded">Reply</a></p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="comment">
                <div class="vcard">
                  <img src="/static-assets/images/person_1.jpg" alt="Image placeholder"/>
                </div>
                <div class="comment-body">
                  <h3>Jean Doe</h3>
                  <div class="meta">January 9, 2018 at 2:21pm</div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                  <p><a href="/" class="reply rounded">Reply</a></p>
                </div>
              </li>
            </ul>
            

            <div class="comment-form-wrap pt-5">
              <h3 class="mb-5">Leave a comment</h3>
              <form action="#" class="p-5 bg-light">
                <div class="form-group">
                  <label for="name">Name *</label>
                  <input type="text" class="form-control" id="name"/>
                </div>
                <div class="form-group">
                  <label for="email">Email *</label>
                  <input type="email" class="form-control" id="email"/>
                </div>
                <div class="form-group">
                  <label for="website">Website</label>
                  <input type="url" class="form-control" id="website"/>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" value="Post Comment" class="btn btn-primary"/>
                </div>

              </form>
            </div>
          </div>

        </div>

        

        <div class="col-md-12 col-lg-4 sidebar">
          <div class="sidebar-box search-form-wrap">
            <form action="#" class="search-form">
              <div class="form-group">
                <span class="icon fa fa-search"/>
                <input type="text" class="form-control" id="s" placeholder="Type a keyword and hit enter"/>
              </div>
            </form>
          </div>
          
          <div class="sidebar-box">
            contentModel.authorBio_o.item
        </div>
        
        <div class="sidebar-box">
          <h3 class="heading">Popular Posts</h3>
          <div class="post-entry-sidebar">
            <ul>
              <li>
                <a href="/">
                  <img src="/static-assets/images/img_1.jpg" alt="Image placeholder" class="mr-4"/>
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/static-assets/images/img_1.jpg" alt="Image placeholder" class="mr-4"/>
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <img src="/static-assets/images/img_1.jpg" alt="Image placeholder" class="mr-4"/>
                    <div class="text">
                      <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                      <div class="post-meta">
                        <span class="mr-2">March 15, 2018 </span>
                      </div>
                    </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        

        <div class="sidebar-box">
          <h3 class="heading">Categories</h3>
          <ul class="categories">
            <li><a href="/">Food <span>(12)</span></a></li>
            <li><a href="/">Travel <span>(22)</span></a></li>
            <li><a href="/">Lifestyle <span>(37)</span></a></li>
            <li><a href="/">Business <span>(42)</span></a></li>
            <li><a href="/">Adventure <span>(14)</span></a></li>
          </ul>
        </div>
        

        <div class="sidebar-box">
          <h3 class="heading">Tags</h3>
          <ul class="tags">
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

  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 class="mb-3 ">Related Post</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <a href="/" class="a-block sm d-flex align-items-center height-md" style="background-image: url('/static-assets/images/img_2.jpg'); ">
            <div class="text">
              <div class="post-meta">
                <span class="category">Lifestyle</span>
                <span class="mr-2">March 15, 2018 </span> &bullet;
                <span class="ml-2"><span class="fa fa-comments"/> 3</span>
              </div>
              <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4">
          <a href="/" class="a-block sm d-flex align-items-center height-md" style="background-image: url('/static-assets/images/img_3.jpg'); ">
            <div class="text">
              <div class="post-meta">
                <span class="category">Travel</span>
                <span class="mr-2">March 15, 2018 </span> &bullet;
                <span class="ml-2"><span class="fa fa-comments"/> 3</span>
              </div>
              <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
            </div>
          </a>
        </div>
        <div class="col-md-6 col-lg-4">
          <a href="/" class="a-block sm d-flex align-items-center height-md" style="background-image: url('/static-assets/images/img_4.jpg'); ">
            <div class="text">
              <div class="post-meta">
                <span class="category">Food</span>
                <span class="mr-2">March 15, 2018 </span> &bullet;
                <span class="ml-2"><span class="fa fa-comments"/> 3</span>
              </div>
              <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
            </div>
          </a>
        </div>
      </div>
    </div>


  </section>
    </BaseLayout>
  );
}
