import graphql from 'babel-plugin-relay/macro';

graphql`
  fragment byUrlQueryHomepage on page_entry  {
    pageTitle_s
    pageDescription_s
    bios_o {
      item {
        key
        component {
          ...byUrlQueryBioFragment
        }
      }
    }
    slider_o {
      item {
        key
        component {
          ...byUrlQueryContentItemFields
          ...on component_slider {
            posts_o {
              item {
                key
                # component {
                #   ...PostPage
                # }
              }
            }
          }
        }
      }
    }
  }`;

graphql`
  fragment byUrlQueryAboutPage on page_about {
    pageTitle_s
    pageDescription_s

  }
`;

graphql`
  fragment byUrlQueryContactPage on page_contact {
    pageTitle_s
    pageDescription_s

  }
`;

graphql`
  fragment byUrlQueryCategoryPage on page_category {
    pageTitle_s
    pageDescription_s

  }
`;

graphql`
  fragment byUrlQueryPostPage on page_post {
    ...byUrlQueryContentItemFields
    slug: localId(transform: "storeUrlToRenderUrl")
    pageTitle_s
    pageDescription_s
    authorBio_o {
      item {
        key
        component {
          name_s
          profilePic_s
        }
      }
    }
    blurb_t
    content_o {
      item {
        key
        component {
          content__type
        }
      }
    }
    headline_s
    mainImage_s
  }
`;

graphql`
  fragment byUrlQueryContentItemFields on ContentItem {
    guid: objectId
    path: localId
    contentTypeId: content__type
    dateCreated: createdDate_dt
    dateModified: lastModifiedDate_dt
    label: internal__name
  }
`;

graphql`
  fragment byUrlQueryBioFragment on component_bio {
    guid: objectId
    contentTypeId: content__type
    label: internal__name
    path: localId
    bio_t
    name_s
    profilePic_s
    linkButtonText_s
    linkButtonUrl_s
    showLinkButton_b
  }
`;

const byUrlQuery = graphql`
  query byUrlQuery($url: String, $skipContentType: Boolean = true, $includePosts: Boolean = true) {
    content: contentItems {
      total
      items {
        ...byUrlQueryContentItemFields
        url: localId(
          transform: "storeUrlToRenderUrl",
          filter:{ regex: $url }
        )
        content__type(
          filter:{
            regex: ".*(bio|post|entry|category|contact|about).*"
          }
        ) @skip (if: $skipContentType)
        ...on page_entry {
          ...byUrlQueryHomepage
        }
        ...on page_about {
          ...byUrlQueryAboutPage
        }
        ...on page_contact {
          ...byUrlQueryContactPage
        }
        ...on page_category {
          ...byUrlQueryCategoryPage
        }
        ...on page_post {
          ...byUrlQueryPostPage
        }
      }
    }
    posts: page_post(limit: 8) @include(if: $includePosts) {
      total
      items {
        ...byUrlQueryPostPage
      }
    }
  }
`;

export default byUrlQuery;
