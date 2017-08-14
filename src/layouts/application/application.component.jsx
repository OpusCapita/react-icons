import React from 'react';
import Icon from '../../icons/icon.component';

const Sidebar = require('react-sidebar').default;

require('./application.scss');

export default function applicationLayout(Content, Header, Menu, Footer, options = {}) {
  const MENU_BREAK_POINT = options.breakPoint || 1279;

  return class MainLayout extends React.PureComponent {
    constructor(props) {
      super(props);
      const isNarrow = window.innerWidth < MENU_BREAK_POINT;
      this.state = {
        sidebarOpen: false,
        sidebarDocked: !isNarrow,
        isNarrow,
      };
    }

    // Experimental technology: do not use in production
    // https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
    // registerMediaQueryListener = () => {
    //   const mql = window.matchMedia(`(max-width: ${MENU_BREAK_POINT}px)`);
    //   mql.addListener(this.mediaQueryChanged);
    //   this.setState({ mql, isNarrow: mql.matches });
    // }

    // mediaQueryChanged = () => {
    //   this.setState({ isNarrow: this.state.mql.matches });
    // }

    onWidthChanged = () => {
      const isNarrow = window.innerWidth < MENU_BREAK_POINT;
      if (isNarrow !== this.state.isNarrow) {
        this.setState({ isNarrow, sidebarDocked: !isNarrow });
      }
    }

    componentWillMount = () => {
      window.addEventListener('resize', this.onWidthChanged);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onWidthChanged);
    }

    onSetSideMenu = () => {
      this.setState({ sidebarDocked: !this.state.sidebarDocked });
    }

    onSetSidebarOpen = (open) => {
      this.setState({ sidebarOpen: open });
    }

    onOutSideMenuClick = () => {
      const isNarrow = window.innerWidth < MENU_BREAK_POINT;

      if (options.closeMenuOutside && isNarrow && this.state.sidebarDocked) {
        this.setState({ sidebarDocked: false });
      }
    }

    getHeader = () => {
      const burgerClassNames = [
        'oc-burger', ...options.burgerClasses || [],
      ];

      const burger = (
        <button className={burgerClassNames.join(' ')} onClick={this.onSetSideMenu}>
          <Icon type="indicator" name="burger" width={25} height={25} />
        </button>
      );

      if (this.state.isNarrow || options.showHeader) {
        return (
          <header className="oc-layout-application-header">
            <div className="oc-layout-application-header-content">
              { (Menu && this.state.isNarrow) ? burger : null }
              { Header ? <Header /> : null }
            </div>
          </header>
        );
      }

      return null;
    }

    getFooter = () => {
      if (!Footer) {
        return null;
      }

      return (
        <footer className="oc-layout-application-footer">
          <Footer />
        </footer>
      );
    }

    getMain = () => {
      const content = (
        <main className="oc-layout-application-main">
          <Content {...this.props} />
        </main>
      );

      return content;
    }

    getAside = () => {
      const content = (
        <aside className="oc-layout-application-aside">
          <Menu />
        </aside>
      );

      return content;
    }

    render() {
      const content = (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <div className="oc-layout-application" onClick={this.onOutSideMenuClick}>
          { this.getHeader() }
          { this.getMain() }
          { this.getFooter() }
        </div>
      );

      return (
        Menu ?
          <Sidebar
            sidebar={this.getAside()}
            touch={false}
            open={this.state.sidebarOpen}
            docked={this.state.sidebarDocked}
            onSetOpen={this.onSetSidebarOpen}
          >
            { content }
          </Sidebar> : content
      );
    }
  };
}
