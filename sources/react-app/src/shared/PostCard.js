import React from 'react';

export const
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape',
  LANDSCAPE_COMPRESSED = 'landscapeCompressed',
  IMAGE_BACKGROUND = 'imageBackground';

export default function (props) {
  const {
    format = PORTRAIT,
    linkUrl,
    classes,
    imgUrl,
    imgAlt,
    authorName,
    authorAvatarUrl,
    title,
    date,
    tags,
    numOfComments
  } = props;
  switch (format) {
    case PORTRAIT:
      return (
        <a href={linkUrl} className={`blog-entry ${classes?.root}`}>
          <img src={imgUrl} alt={imgAlt} />
          <div className="blog-content-body">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={authorAvatarUrl} alt="" /> {authorName}
              </span>
              &bullet; <span className="mr-2">{date}</span>
              &bullet; <span className="ml-2"><span className="fa fa-comments" /> {numOfComments}</span>
            </div>
            <h2>{title}</h2>
          </div>
        </a>
      );
    case LANDSCAPE:
      return (
        <a href={linkUrl} className={classes?.root}>
          <div className="image" style={{ backgroundImage: `url(${imgUrl})` }}/>
          <span className="text">
            <div className="post-meta">
              <span className="author mr-2">
                <img src={authorAvatarUrl} alt=""/> {authorName}
              </span>
              • <span className="mr-2">{date}</span>
              • <span className="ml-2"><span className="fa fa-comments"/> ${numOfComments}</span>
            </div>
            <h2>${title}</h2>
          </span>
        </a>
      );
    case LANDSCAPE_COMPRESSED:
      return (
        <a href={linkUrl} className={classes.root}>
          <img src={imgUrl} alt={imgAlt} className="mr-4"/>
          <div className="text">
            <h4>{title}</h4>
            <div className="post-meta">
              <span className="mr-2">{date}</span>
            </div>
          </div>
        </a>
      );
    case IMAGE_BACKGROUND:
      return (
        <a
          href={linkUrl}
          className={`${classes?.root ?? ''} a-block sm d-flex align-items-center height-md`}
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="text">
            <div className="post-meta">
              <span className="category">{tags}</span>
              <span className="mr-2">{date}</span>
              • <span className="ml-2"><span className="fa fa-comments"></span> {numOfComments}</span>
            </div>
            <h3>{title}</h3>
          </div>
        </a>
      );
    default:
      console.error(`Unknown PostCard format "${format}" on post "${title}"`);
      return (
        <a href={linkUrl} className={classes?.root}>
          <h2>{title}</h2>
        </a>
      );
  }
}
