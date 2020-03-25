import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function () {
  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="sidebarTags.tagsSectionTitle"
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
  );
}
