(function () {

  const { React, ReactDOM } = CrafterCMSNext;

  CStudioAuthoring.Module.moduleLoaded('react-sample', {
    initialize(config) {
      console.log(config);
      ReactDOM.render(
        React.createElement(
          'div',
          { style: { margin: '10px 5px' } },
          'Hello, this is a custom react plugin on the sidebar.'
        ),
        config.containerEl
      );
    }
  });

})();
