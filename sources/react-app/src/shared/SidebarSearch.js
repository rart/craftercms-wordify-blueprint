import React from 'react';
import { defineMessages, useIntl } from 'react-intl';

const translations = defineMessages({
  searchFormPlaceholder: {
    id: 'home.searchFormPlaceholder',
    defaultMessage: 'Type a keyword and hit enter'
  }
});

export default function () {
  const { formatMessage } = useIntl();
  return (
    <>
      <div className="sidebar-box search-form-wrap">
        <form action="#" className="search-form">
          <div className="form-group">
            <span className="icon fa fa-search"/>
            <input
              id="s"
              type="text"
              className="form-control"
              placeholder={formatMessage(translations.searchFormPlaceholder)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
