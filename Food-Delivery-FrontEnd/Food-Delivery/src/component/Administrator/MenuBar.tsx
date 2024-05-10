import React from 'react';

export function MenuBar() {
  return (
    <div className="row" style={{ position: 'sticky', top: '79px', left: '0px', right: '0px', marginRight: '0px', paddingRight: '0px', zIndex: '8', background: 'white' }}>
      <div id="menu-bar-12" className="col-md-12 menu-nav-tabs mw-100">
        <ul className="nav nav-tabs item-categories-tab">
          <section className="menu-categories-slider slider slick-initialized slick-slider">
            <button type="button" className="slick-prev pull-left slick-arrow slick-disabled" aria-disabled="true" style={{ display: 'inline-block' }}>
              <img src="src/assets/arrow-left.png" alt="Previous" />
            </button>
            <div className="slick-list draggable">
              <div className="slick-track" style={{ opacity: '1', width: '45000px', transform: 'translate3d(0px, 0px, 0px)' }}>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide slick-current slick-active" style={{ margin: 'auto 0px' }} data-slick-index="0" aria-hidden="false" tabIndex={0}>
                <a href="#menu-196" data-menu-category-id="196" className="menu-categories-nav activeMenuCategory" tabIndex={0}>NEW</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide slick-active" style={{ margin: 'auto 0px' }} data-slick-index="1" aria-hidden="false" tabIndex={0}>
                  <a href="#menu-2304" data-menu-category-id="2304" className="menu-categories-nav" tabIndex={0}>Buckets Menu</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide slick-active" style={{ margin: 'auto 0px' }} data-slick-index="2" aria-hidden="false" tabIndex={0}>
                  <a href="#menu-1122" data-menu-category-id="1122" className="menu-categories-nav" tabIndex={0}>Buckets</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide slick-active" style={{ margin: 'auto 0px' }} data-slick-index="3" aria-hidden="false" tabIndex={0}>
                  <a href="#menu-745" data-menu-category-id="745" className="menu-categories-nav" tabIndex={0}>Snackbox</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide slick-active" style={{ margin: 'auto 0px' }} data-slick-index="4" aria-hidden="false" tabIndex={0}>
                  <a href="#menu-1834" data-menu-category-id="1834" className="menu-categories-nav" tabIndex={0}>Burgers &amp; Wraps</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide slick-active" style={{ margin: 'auto 0px' }} data-slick-index="5" aria-hidden="false" tabIndex={0}>
                  <a href="#menu-1839" data-menu-category-id="1839" className="menu-categories-nav" tabIndex={0}>Burgers &amp; Wraps Menu</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide" style={{ margin: 'auto 0px' }} data-slick-index="6" aria-hidden="true" tabIndex={-1}>
                  <a href="#menu-2305" data-menu-category-id="2305" className="menu-categories-nav" tabIndex={-1}>Sides &amp; Salads</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide" style={{ margin: 'auto 0px' }} data-slick-index="7" aria-hidden="true" tabIndex={-1}>
                  <a href="#menu-1837" data-menu-category-id="1837" className="menu-categories-nav" tabIndex={-1}>Beverages</a>
                </figcaption>
                <figcaption className="figure-caption single-order-detail-title text-center slick-slide" style={{ margin: 'auto 0px' }} data-slick-index="8" aria-hidden="true" tabIndex={-1}>
                  <a href="#menu-96" data-menu-category-id="96" className="menu-categories-nav" tabIndex={-1}>Kids Menu</a>
                </figcaption>
              </div>
            </div>
            <button type="button" className="slick-next pull-right slick-arrow" aria-disabled="false">
              <img src="src/assets/arrow-right.png" alt="Next" />
            </button>
          </section>
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
