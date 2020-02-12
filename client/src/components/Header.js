import React from "react";

const Header = () => {
  return (
     
      <header className="page-topbar" id="header">
      <div className="navbar navbar-fixed"> 
        <nav className="navbar-main navbar-color nav-collapsible sideNav-lock navbar-dark gradient-45deg-indigo-purple no-shadow">
          <div className="nav-wrapper">
            <div className="header-search-wrapper hide-on-med-and-down"><i className="material-icons">search</i>
              <input className="header-search-input z-depth-2" type="text" name="Search" placeholder="Explore Materialize" />
            </div>
            <ul className="navbar-list right">
              <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light translation-button" href="/#" data-target="translation-dropdown"><span className="flag-icon flag-icon-gb"></span></a></li>
              <li className="hide-on-med-and-down"><a className="waves-effect waves-block waves-light toggle-fullscreen" href="/#"><i className="material-icons">settings_overscan</i></a></li>
              <li className="hide-on-large-only"><a className="waves-effect waves-block waves-light search-button" href="/#"><i className="material-icons">search</i></a></li>
              <li><a className="waves-effect waves-block waves-light notification-button" href="/#" data-target="notifications-dropdown"><i className="material-icons">notifications_none<small className="notification-badge">5</small></i></a></li>
              <li><a className="waves-effect waves-block waves-light profile-button" href="javascript:void(0);" data-target="profile-dropdown"><span className="avatar-status avatar-online"><img src="../../../app-assets/images/avatar/avatar-7.png" alt="avatar" /><i></i></span></a></li>
              <li><a className="waves-effect waves-block waves-light sidenav-trigger" href="/#" data-target="slide-out-right"><i className="material-icons">format_indent_increase</i></a></li>
            </ul>
            {/* <!-- translation-button--> */}
            <ul className="dropdown-content" id="translation-dropdown">
              <li><a className="grey-text text-darken-1" href="/#!"><i className="flag-icon flag-icon-gb"></i> English</a></li>
              <li><a className="grey-text text-darken-1" href="/#!"><i className="flag-icon flag-icon-fr"></i> French</a></li>
              <li><a className="grey-text text-darken-1" href="/#!"><i className="flag-icon flag-icon-cn"></i> Chinese</a></li>
              <li><a className="grey-text text-darken-1" href="/#!"><i className="flag-icon flag-icon-de"></i> German</a></li>
            </ul>
            {/* <!-- notifications-dropdown--> */}
            <ul className="dropdown-content" id="notifications-dropdown">
              <li>
                <h6>NOTIFICATIONS<span className="new badge">5</span></h6>
              </li>
              <li className="divider"></li>
              <li><a className="grey-text text-darken-2" href="/#!"><span className="material-icons icon-bg-circle cyan small">add_shopping_cart</span> A new order has been placed!</a>
                <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">2 hours ago</time>
              </li>
              <li><a className="grey-text text-darken-2" href="/#!"><span className="material-icons icon-bg-circle red small">stars</span> Completed the task</a>
                <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">3 days ago</time>
              </li>
              <li><a className="grey-text text-darken-2" href="/#!"><span className="material-icons icon-bg-circle teal small">settings</span> Settings updated</a>
                <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">4 days ago</time>
              </li>
              <li><a className="grey-text text-darken-2" href="/#!"><span className="material-icons icon-bg-circle deep-orange small">today</span> Director meeting started</a>
                <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">6 days ago</time>
              </li>
              <li><a className="grey-text text-darken-2" href="/#!"><span className="material-icons icon-bg-circle amber small">trending_up</span> Generate monthly report</a>
                <time className="media-meta" dateTime="2015-06-12T20:50:48+08:00">1 week ago</time>
              </li>
            </ul>
            {/* <!-- profile-dropdown--> */}
            <ul className="dropdown-content" id="profile-dropdown">
              <li><a className="grey-text text-darken-1" href="/user-profile-page.html"><i className="material-icons">person_outline</i> Profile</a></li>
              <li><a className="grey-text text-darken-1" href="/app-chat.html"><i className="material-icons">chat_bubble_outline</i> Chat</a></li>
              <li><a className="grey-text text-darken-1" href="/page-faq.html"><i className="material-icons">help_outline</i> Help</a></li>
              <li className="divider"></li>
              <li><a className="grey-text text-darken-1" href="/user-lock-screen.html"><i className="material-icons">lock_outline</i> Lock</a></li>
              <li><a className="grey-text text-darken-1" href="/user-login.html"><i className="material-icons">keyboard_tab</i> Logout</a></li>
            </ul>
          </div>
          <nav className="display-none search-sm">
            <div className="nav-wrapper">
              <form>
                <div className="input-field">
                  <input className="search-box-sm" type="search" required="" />
                  <label className="label-icon" for="search"><i className="material-icons search-sm-icon">search</i></label><i className="material-icons search-sm-close">close</i>
                </div>
              </form>
            </div>
          </nav>
        </nav>
      </div>
    </header>
      
  )

}

export default Header;