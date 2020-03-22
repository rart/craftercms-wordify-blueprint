import React from 'react';
import { useIntl } from 'react-intl';
import { useICE } from '@craftercms/ice/esm2015/react';
import { isAuthoring } from './utils';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

export default function (props) {
  const { formatDate } = useIntl();
  const {
    format = PORTRAIT,
    classes,
    post: model,
    parentModelId,
    post: {
      slug,
      // pageTitle_s,
      // pageDescription_s,
      // authorBio_o,
      authorBio_o: [{
        name_s: authorName,
        profilePic_s: authorAvatarUrl
      }],
      // blurb_t,
      // content_o,
      headline_s,
      mainImage_s,
      mainImageAlt_s = '',
      craftercms: {
        label,
        dateModified
      },
      tags = '',
      numOfComments = 3
    }
  } = props;
  const { props: ice } = useICE({
    label,
    model,
    parentModelId,
    isAuthoring: isAuthoring()
  });
  switch (format) {
    case PORTRAIT:
      return (
        <a href={slug} className={`blog-entry ${classes?.root}`} {...ice}>
          <img src={mainImage_s} alt={mainImageAlt_s} />
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={authorAvatarUrl} alt="" /> {authorName}
              </span>
              {' • '}<span className="mr-2">{formatDate(dateModified)}</span>
              {' • '}<span className="ml-2"><span className="fa fa-comments" /> {numOfComments}</span>
            </div>
            <h2>{headline_s}</h2>
          </div>
        </a>
      );
    case LANDSCAPE:
      return (
        <a href={slug} className={classes?.root} {...ice}>
          <div className="image" style={{ backgroundImage: `url(${mainImage_s})` }}/>
          <span className="text">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={authorAvatarUrl} alt=""/> {authorName}
              </span>
              • <span className="mr-2">{dateModified}</span>
              • <span className="ml-2"><span className="fa fa-comments"/> ${numOfComments}</span>
            </div>
            <h2>${headline_s}</h2>
          </span>
        </a>
      );
    case LANDSCAPE_COMPRESSED:
      return (
        <a href={slug} className={classes.root} {...ice}>
          <img src={mainImage_s} alt={mainImageAlt_s} className="mr-4"/>
          <div className="text">
            <h4>{headline_s}</h4>
            <div className="post-meta">
              <span className="mr-2">{dateModified}</span>
            </div>
          </div>
        </a>
      );
    case IMAGE_BACKGROUND:
      return (
        <a
          href={slug}
          className={`${classes?.root ?? ''} a-block sm d-flex align-items-center height-md`}
          style={{ backgroundImage: `url(${mainImage_s})` }}
          {...ice}
        >
          <div className="text">
            <div className="post-meta">
              <span className="category">{tags}</span>
              <span className="mr-2">{dateModified}</span>
              • <span className="ml-2"><span className="fa fa-comments"></span> {numOfComments}</span>
            </div>
            <h3>{headline_s}</h3>
          </div>
        </a>
      );
    default:
      console.error(`Unknown PostCard format "${format}" on post "${headline_s}"`);
      return (
        <a href={slug} className={classes?.root} {...ice}>
          <h2>{headline_s}</h2>
        </a>
      );
  }
}
