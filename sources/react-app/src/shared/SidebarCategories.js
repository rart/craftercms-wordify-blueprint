import React from 'react';
import { FormattedMessage } from 'react-intl';

export default function () {
  return (
    <div className="sidebar-box">
      <h3 className="heading">
        <FormattedMessage
          id="sidebarCategories.categoriesSectionTitle"
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
  );
}
