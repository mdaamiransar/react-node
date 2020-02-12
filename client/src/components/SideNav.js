import React, { useContext } from "react";
import logo from '../img/logo/materialize-logo-color.png'
// import { ProductContext } from "../contexts/ProductContext";

const SideNav = () => {

  // const { products } = useContext(ProductContext);

  return (
    <>
      <aside className="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-light sidenav-active-square">
        <div className="brand-sidebar">
          <h1 className="logo-wrapper">
            <a className="brand-logo darken-1" href="index.html">
              <img src={logo} alt="" />
              {/* <img src={require("../img/logo/materialize-logo-big.png")} alt=" logo"/> */}

              <span className="logo-text hide-on-med-and-down">Materialize</span>
            </a>
            <a className="navbar-toggler" href="#"><i className="material-icons">radio_button_checked</i></a>
          </h1>
        </div>
        <ul className="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="menu-accordion">
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">settings_input_svideo</i><span className="menu-title" data-i18n="">Dashboard</span><span className="badge badge pill orange float-right mr-10">products.length</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="dashboard-modern.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Modern</span></a>
                </li>
                <li><a className="collapsible-body" href="dashboard-ecommerce.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>eCommerce</span></a>
                </li>
                <li><a className="collapsible-body" href="dashboard-analytics.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Analytics</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">dvr</i><span className="menu-title" data-i18n="">Templates</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body collapsible-header waves-effect waves-cyan" href="#" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Vertical</span></a>
                  <div className="collapsible-body">
                    <ul className="collapsible" data-collapsible="accordion">
                      <li><a className="collapsible-body" href="index-2.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Modern  Menu</span></a>
                      </li>
                      <li><a className="collapsible-body" href="https://pixinvent.com/materialize-material-design-admin-template/html/ltr/vertical-menu-nav-dark-template/" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Navbar Dark</span></a>
                      </li>
                      <li><a className="collapsible-body" href="https://pixinvent.com/materialize-material-design-admin-template/html/ltr/vertical-gradient-menu-template/" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Gradient Menu</span></a>
                      </li>
                      <li><a className="collapsible-body" href="https://pixinvent.com/materialize-material-design-admin-template/html/ltr/vertical-dark-menu-template/" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Dark Menu</span></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><a className="collapsible-body collapsible-header waves-effect waves-cyan" href="#" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Horizontal</span></a>
                  <div className="collapsible-body">
                    <ul className="collapsible" data-collapsible="accordion">
                      <li><a className="collapsible-body" href="https://pixinvent.com/materialize-material-design-admin-template/html/ltr/horizontal-menu-template/" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Horizontal Menu</span></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigation-header"><a className="navigation-header-text">Applications</a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="app-email.html"><i className="material-icons">mail_outline</i><span className="menu-title" data-i18n="">Mail</span><span className="badge new badge pill pink accent-2 float-right mr-10">5</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="app-chat.html"><i className="material-icons">chat_bubble_outline</i><span className="menu-title" data-i18n="">Chat</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="app-todo.html"><i className="material-icons">check</i><span className="menu-title" data-i18n="">ToDo</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="app-contacts.html"><i className="material-icons">import_contacts</i><span className="menu-title" data-i18n="">Contacts</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="app-calendar.html"><i className="material-icons">today</i><span className="menu-title" data-i18n="">Calendar</span></a>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">add_shopping_cart</i><span className="menu-title" data-i18n="">eCommerce</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="eCommerce-products-page.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Products Page</span></a>
                </li>
                <li><a className="collapsible-body" href="eCommerce-pricing.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Pricing</span></a>
                </li>
                <li><a className="collapsible-body" href="eCommerce-invoice.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Invoice</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigation-header"><a className="navigation-header-text">Pages </a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">content_paste</i><span className="menu-title" data-i18n="">Pages</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="page-contact.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Contact</span></a>
                </li>
                <li><a className="collapsible-body" href="page-blog-list.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Blog</span></a>
                </li>
                <li><a className="collapsible-body" href="page-search.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Search</span></a>
                </li>
                <li><a className="collapsible-body" href="page-knowledge.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Knowledge</span></a>
                </li>
                <li><a className="collapsible-body" href="page-faq.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>FAQs</span></a>
                </li>
                <li><a className="collapsible-body" href="page-blank.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Page Blank</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">crop_original</i><span className="menu-title" data-i18n="">Medias</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="media-gallery-page.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Gallery Page</span></a>
                </li>
                <li><a className="collapsible-body" href="media-hover-effects.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Media Hover Effects</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">face</i><span className="menu-title" data-i18n="">User</span><span className="badge badge pill purple float-right mr-10">10</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="user-profile-page.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>User Profile</span></a>
                </li>
                <li><a className="collapsible-body" href="user-login.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Login</span></a>
                </li>
                <li><a className="collapsible-body" href="user-register.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Register</span></a>
                </li>
                <li><a className="collapsible-body" href="user-forgot-password.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Forgot Password</span></a>
                </li>
                <li><a className="collapsible-body" href="user-lock-screen.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Lock Screen</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">filter_tilt_shift</i><span className="menu-title" data-i18n="">Misc</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="page-404.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>404</span></a>
                </li>
                <li><a className="collapsible-body" href="page-maintenance.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Page Maintenanace</span></a>
                </li>
                <li><a className="collapsible-body" href="page-500.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>500</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigation-header"><a className="navigation-header-text">User Interface </a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">cast</i><span className="menu-title" data-i18n="">Cards</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="cards-basic.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Cards</span></a>
                </li>
                <li><a className="collapsible-body" href="cards-advance.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Cards Advance</span></a>
                </li>
                <li><a className="collapsible-body" href="cards-extended.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Cards Extended</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">invert_colors</i><span className="menu-title" data-i18n="">CSS</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="css-typography.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Typograpy</span></a>
                </li>
                <li><a className="collapsible-body" href="css-color.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Color</span></a>
                </li>
                <li><a className="collapsible-body" href="css-grid.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Grid</span></a>
                </li>
                <li><a className="collapsible-body" href="css-helpers.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Helpers</span></a>
                </li>
                <li><a className="collapsible-body" href="css-media.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Media</span></a>
                </li>
                <li><a className="collapsible-body" href="css-pulse.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Pulse</span></a>
                </li>
                <li><a className="collapsible-body" href="css-sass.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Sass</span></a>
                </li>
                <li><a className="collapsible-body" href="css-shadow.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Shadow</span></a>
                </li>
                <li><a className="collapsible-body" href="css-animations.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Animations</span></a>
                </li>
                <li><a className="collapsible-body" href="css-transitions.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Transitions</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">photo_filter</i><span className="menu-title" data-i18n="">Basic UI</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body collapsible-header waves-effect waves-cyan" href="#" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Buttons</span></a>
                  <div className="collapsible-body">
                    <ul className="collapsible" data-collapsible="accordion">
                      <li><a className="collapsible-body" href="ui-basic-buttons.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Basic</span></a>
                      </li>
                      <li><a className="collapsible-body" href="ui-extended-buttons.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Extended</span></a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li><a className="collapsible-body" href="ui-icons.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Icons</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-alerts.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Alerts</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-badges.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Badges</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-breadcrumbs.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Breadcrumbs</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-chips.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Chips</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-collections.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Collections</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-navbar.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Navbar</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-pagination.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Pagination</span></a>
                </li>
                <li><a className="collapsible-body" href="ui-preloader.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Preloader</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">settings_brightness</i><span className="menu-title" data-i18n="">Advanced UI</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="advance-ui-carousel.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Carousel</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-collapsibles.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Collapsibles</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-toasts.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Toasts</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-tooltip.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Tooltip</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-dropdown.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Dropdown</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-feature-discovery.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Discovery</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-media.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Media</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-modals.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Modals</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-scrollspy.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Scrollspy</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-tabs.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Tabs</span></a>
                </li>
                <li><a className="collapsible-body" href="advance-ui-waves.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Waves</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">add_to_queue</i><span className="menu-title" data-i18n="">Extra Components</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="extra-components-range-slider.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Range Slider</span></a>
                </li>
                <li><a className="collapsible-body" href="extra-components-sweetalert.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Sweetalert</span></a>
                </li>
                <li><a className="collapsible-body" href="extra-components-nestable.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Nestable</span></a>
                </li>
                <li><a className="collapsible-body" href="extra-components-translation.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Translation</span></a>
                </li>
                <li><a className="collapsible-body" href="extra-components-highlight.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Highlight</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigation-header"><a className="navigation-header-text">Tables &amp; Forms </a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="table-basic.html"><i className="material-icons">border_all</i><span className="menu-title" data-i18n="">Basic Tables</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="table-data-table.html"><i className="material-icons">grid_on</i><span className="menu-title" data-i18n="">Data Tables</span></a>
          </li>
          <li className="active bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">chrome_reader_mode</i><span className="menu-title" data-i18n="">Forms</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="form-elements.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Form Elements</span></a>
                </li>
                <li className="active"><a className="collapsible-body active" href="form-validation.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Form Validation</span></a>
                </li>
                <li><a className="collapsible-body" href="form-masks.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Form Masks</span></a>
                </li>
                <li><a className="collapsible-body" href="form-file-uploads.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>File Uploads</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="form-layouts.html"><i className="material-icons">image_aspect_ratio</i><span className="menu-title" data-i18n="">Form Layouts</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="form-wizard.html"><i className="material-icons">settings_ethernet</i><span className="menu-title" data-i18n="">Form Wizard</span></a>
          </li>
          <li className="navigation-header"><a className="navigation-header-text">Charts &amp; Maps </a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">pie_chart_outlined</i><span className="menu-title" data-i18n="">Chart</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="charts-chartjs.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>ChartJS</span></a>
                </li>
                <li><a className="collapsible-body" href="charts-chartist.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Chartist</span></a>
                </li>
                <li><a className="collapsible-body" href="charts-sparklines.html" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Sparkline Charts</span></a>
                </li>
              </ul>
            </div>
          </li>
          <li className="navigation-header"><a className="navigation-header-text">Misc </a><i className="navigation-header-icon material-icons">more_horiz</i>
          </li>
          <li className="bold"><a className="collapsible-header waves-effect waves-cyan " href="#"><i className="material-icons">photo_filter</i><span className="menu-title" data-i18n="">Menu levels</span></a>
            <div className="collapsible-body">
              <ul className="collapsible collapsible-sub" data-collapsible="accordion">
                <li><a className="collapsible-body" href="#" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Second level</span></a>
                </li>
                <li><a className="collapsible-body collapsible-header waves-effect waves-cyan" href="#" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Second level child</span></a>
                  <div className="collapsible-body">
                    <ul className="collapsible" data-collapsible="accordion">
                      <li><a className="collapsible-body" href="#" data-i18n=""><i className="material-icons">radio_button_unchecked</i><span>Third level</span></a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="changelog.html"><i className="material-icons">track_changes</i><span className="menu-title" data-i18n="">Changelog</span><span className="badge badge pill light-blue float-right mr-10">5.1</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.com/materialize-material-design-admin-template/documentation/index.html"><i className="material-icons">import_contacts</i><span className="menu-title" data-i18n="">Documentation</span></a>
          </li>
          <li className="bold"><a className="waves-effect waves-cyan " href="https://pixinvent.ticksy.com/"><i className="material-icons">help_outline</i><span className="menu-title" data-i18n="">Support</span></a>
          </li>
        </ul>
        <div className="navigation-background"></div><a className="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i className="material-icons">menu</i></a>
      </aside>
    </>
  )
}

export default SideNav;