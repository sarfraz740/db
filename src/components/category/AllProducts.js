import React, {useState, useEffect} from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

import banner1 from '../../images/shop/banner1.jpg';

function AllProducts() {

    const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("http://globlix.com/admin/api/brands")
      .then((res) => setBrands(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
  
  <div className="page-wrapper">
    <h1 className="d-none">Wolmart - Responsive Marketplace HTML Template</h1>
    {/* Start of Header */}
    <Header />
    {/* End of Header */}
    {/* Start of Main */}
    <main className="main">
      {/* Start of Breadcrumb */}
      <nav className="breadcrumb-nav">
        <div className="container">
          <ul className="breadcrumb bb-no">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>Shop</li>
          </ul>
        </div>
      </nav>
      {/* End of Breadcrumb */}
      {/* Start of Page Content */}
      <div className="page-content">
        <div className="container">
          {/* Start of Shop Banner */}
          <div
            className="shop-default-banner banner d-flex align-items-center mb-5 br-xs"
            style={{
              backgroundImage: `url('${banner1}')`,
              backgroundColor: "#FFC74E"
            }}
          >
            <div className="banner-content">
              <h4 className="banner-subtitle font-weight-bold">
                Accessories Collection
              </h4>
              <h3 className="banner-title text-white text-uppercase font-weight-bolder ls-normal">
                Smart Wrist Watches
              </h3>
              <a
                href="shop-banner-sidebar.html"
                className="btn btn-dark btn-rounded btn-icon-right"
              >
                Discover Now
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
          {/* End of Shop Banner */}
          <div className="shop-default-brands mb-5">
            <div
              className="brands-swiper swiper-container swiper-theme "
              data-swiper-options="{
                          'slidesPerView': 2,
                          'breakpoints': {
                              '576': {
                                  'slidesPerView': 3
                              },
                              '768': {
                                  'slidesPerView': 4
                              },
                              '992': {
                                  'slidesPerView': 6
                              },
                              '1200': {
                                  'slidesPerView': 7
                              }
                          },
                          'autoplay': {
                              'delay': 4000,
                              'disableOnInteraction': false
                          }
                      }"
            >
              <div className="swiper-wrapper row ">
              <Swiper
                  spaceBetween={30}
                  slidesPerView={6}
                  navigation={false}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  {
                      brands.map((brand) => (
                          <SwiperSlide>
                        <div className="swiper-slide">
                        <figure>
                          <img
                            src={brand.image}
                            alt="Brand"
                            width={160}
                            height={90}
                            style={{
                                width:'120px'
                            }}
                          />
                        </figure>
                      </div>
                      </SwiperSlide>
                      ))
                  }
                  </Swiper>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* End of Shop Brands*/}
          {/* Start of Shop Category */}
          <div className="shop-default-category category-ellipse-section mb-6">
            <div
              className="swiper-container swiper-theme shadow-swiper"
              data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '480': {
                              'slidesPerView': 3
                          },
                          '576': {
                              'slidesPerView': 4
                          },
                          '768': {
                              'slidesPerView': 6
                          },
                          '992': {
                              'slidesPerView': 7
                          },
                          '1200': {
                              'slidesPerView': 8,
                              'spaceBetween': 30
                          }
                      }
                  }"
            >
              <div className="swiper-wrapper row gutter-lg cols-xl-8 cols-lg-7 cols-md-6 cols-sm-4 cols-xs-3 cols-2">
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-4.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#5C92C0", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Sports</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-5.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#B8BDC1", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Babies</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-6.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#99C4CA", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Sneakers</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-7.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#4E5B63", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Cameras</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-8.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#D3E5EF", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Games</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-9.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#65737C", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Kitchen</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-20.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#E4E4E4", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Watches</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide category-wrap">
                  <div className="category category-ellipse">
                    <figure className="category-media">
                      <a href="shop-banner-sidebar.html">
                        <img
                          src={require('../../images/categories/category-21.jpg')}
                          alt="Categroy"
                          width={190}
                          height={190}
                          style={{ backgroundColor: "#D3D8DE", width:'100%' }}
                        />
                      </a>
                    </figure>
                    <div className="category-content">
                      <h4 className="category-name">
                        <a href="shop-banner-sidebar.html">Clothes</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
          {/* End of Shop Category */}
          {/* Start of Shop Content */}
          <div className="shop-content row gutter-lg mb-10">
            {/* Start of Sidebar, Shop Sidebar */}
            <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
              {/* Start of Sidebar Overlay */}
              <div className="sidebar-overlay" />
              <a className="sidebar-close" href="#">
                <i className="close-icon" />
              </a>
              {/* Start of Sidebar Content */}
              <div className="sidebar-content scrollable">
                {/* Start of Sticky Sidebar */}
                <div className="sticky-sidebar">
                  <div className="filter-actions">
                    <label>Filter :</label>
                    <a href="#" className="btn btn-dark btn-link filter-clean">
                      Clean All
                    </a>
                  </div>
                  {/* Start of Collapsible widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>All Categories</label>
                    </h3>
                    <ul className="widget-body filter-items search-ul">
                      <li>
                        <a href="#">Accessories</a>
                      </li>
                      <li>
                        <a href="#">Babies</a>
                      </li>
                      <li>
                        <a href="#">Beauty</a>
                      </li>
                      <li>
                        <a href="#">Decoration</a>
                      </li>
                      <li>
                        <a href="#">Electronics</a>
                      </li>
                      <li>
                        <a href="#">Fashion</a>
                      </li>
                      <li>
                        <a href="#">Food</a>
                      </li>
                      <li>
                        <a href="#">Furniture</a>
                      </li>
                      <li>
                        <a href="#">Kitchen</a>
                      </li>
                      <li>
                        <a href="#">Medical</a>
                      </li>
                      <li>
                        <a href="#">Sports</a>
                      </li>
                      <li>
                        <a href="#">Watches</a>
                      </li>
                    </ul>
                  </div>
                  {/* End of Collapsible Widget */}
                  {/* Start of Collapsible Widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>Price</label>
                    </h3>
                    <div className="widget-body">
                      <ul className="filter-items search-ul">
                        <li>
                          <a href="#">$0.00 - $100.00</a>
                        </li>
                        <li>
                          <a href="#">$100.00 - $200.00</a>
                        </li>
                        <li>
                          <a href="#">$200.00 - $300.00</a>
                        </li>
                        <li>
                          <a href="#">$300.00 - $500.00</a>
                        </li>
                        <li>
                          <a href="#">$500.00+</a>
                        </li>
                      </ul>
                      <form className="price-range">
                        <input
                          type="number"
                          name="min_price"
                          className="min_price text-center"
                          placeholder="$min"
                        />
                        <span className="delimiter">-</span>
                        <input
                          type="number"
                          name="max_price"
                          className="max_price text-center"
                          placeholder="$max"
                        />
                        <a href="#" className="btn btn-primary btn-rounded">
                          Go
                        </a>
                      </form>
                    </div>
                  </div>
                  {/* End of Collapsible Widget */}
                  {/* Start of Collapsible Widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>Size</label>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">Extra Large</a>
                      </li>
                      <li>
                        <a href="#">Large</a>
                      </li>
                      <li>
                        <a href="#">Medium</a>
                      </li>
                      <li>
                        <a href="#">Small</a>
                      </li>
                    </ul>
                  </div>
                  {/* End of Collapsible Widget */}
                  {/* Start of Collapsible Widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>Brand</label>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">Elegant Auto Group</a>
                      </li>
                      <li>
                        <a href="#">Green Grass</a>
                      </li>
                      <li>
                        <a href="#">Node Js</a>
                      </li>
                      <li>
                        <a href="#">NS8</a>
                      </li>
                      <li>
                        <a href="#">Red</a>
                      </li>
                      <li>
                        <a href="#">Skysuite Tech</a>
                      </li>
                      <li>
                        <a href="#">Sterling</a>
                      </li>
                    </ul>
                  </div>
                  {/* End of Collapsible Widget */}
                  {/* Start of Collapsible Widget */}
                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <label>Color</label>
                    </h3>
                    <ul className="widget-body filter-items item-check mt-1">
                      <li>
                        <a href="#">Black</a>
                      </li>
                      <li>
                        <a href="#">Blue</a>
                      </li>
                      <li>
                        <a href="#">Brown</a>
                      </li>
                      <li>
                        <a href="#">Green</a>
                      </li>
                      <li>
                        <a href="#">Grey</a>
                      </li>
                      <li>
                        <a href="#">Orange</a>
                      </li>
                      <li>
                        <a href="#">Yellow</a>
                      </li>
                    </ul>
                  </div>
                  {/* End of Collapsible Widget */}
                </div>
                {/* End of Sidebar Content */}
              </div>
              {/* End of Sidebar Content */}
            </aside>
            {/* End of Shop Sidebar */}
            {/* Start of Shop Main Content */}
            <div className="main-content">
              <nav className="toolbox sticky-toolbox sticky-content fix-top">
                <div className="toolbox-left">
                  <a
                    href="#"
                    className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                  btn-icon-left d-block d-lg-none"
                  >
                    <i className="w-icon-category" />
                    <span>Filters</span>
                  </a>
                  <div className="toolbox-item toolbox-sort select-box text-dark">
                    <label>Sort By :</label>
                    <select name="orderby" className="form-control">
                      <option value="default" selected="selected">
                        Default sorting
                      </option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price-low">
                        Sort by pric: low to high
                      </option>
                      <option value="price-high">
                        Sort by price: high to low
                      </option>
                    </select>
                  </div>
                </div>
              </nav>
              <div className="product-wrapper row cols-md-3 cols-sm-2 cols-2">
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/1.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">3D Television</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (3 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$220.00 - $230.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/2-1.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                        <img
                          src={require('../../images/shop/2-2.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      <div className="product-countdown-container">
                        <div
                          className="product-countdown countdown-compact"
                          data-until="2021, 9, 9"
                          data-format="DHMS"
                          data-compact="false"
                          data-labels-short="Days, Hours, Mins, Secs"
                        >
                          00:00:00:00
                        </div>
                      </div>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Alarm Clock With Lamp</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (10 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">
                          <ins className="new-price">$30.00</ins>
                          <del className="old-price">$60.00</del>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/3.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Apple Laptop</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (5 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$1,000.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/4.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">
                          Attachable Charge Alarm
                        </a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (7 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$15.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/5.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Fashion</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Best Travel Bag</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (4 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$83.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/6.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Sports</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Black Stunt Motor</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (12 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$374.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/7-1.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                        <img
                          src={require('../../images/shop/7-2.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Fashion</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Blue Sky Trunk</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$85.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/8.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Beauty</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">
                          Bodycare Smooth Powder
                        </a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (4 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$25.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/9.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Bright Green IPhone</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (4 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$950.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/10.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Fashion</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">
                          Cavin Fashion Suede Handbag
                        </a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (4 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$163.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/11-1.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                        <img
                          src={require('../../images/shop/11-2.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Electronics</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">Charming Design Watch</a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (10 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$30.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-wrap">
                  <div className="product text-center">
                    <figure className="product-media">
                      <a href="product-default.html">
                        <img
                          src={require('../../images/shop/12.jpg')}
                          alt="Product"
                          width={300}
                          height={338}
                        />
                      </a>
                      
                    </figure>
                    <div className="product-details">
                      <div className="product-cat">
                        <a href="shop-banner-sidebar.html">Fashion</a>
                      </div>
                      <h3 className="product-name">
                        <a href="product-default.html">
                          Classic Simple Backpack
                        </a>
                      </h3>
                      <div className="ratings-container">
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                      <i class="fa-solid fa-star" style={{ color : 'gold'}}></i>
                        <a
                          href="product-default.html"
                          className="rating-reviews"
                        >
                          (9 reviews)
                        </a>
                      </div>
                      <div className="product-pa-wrapper">
                        <div className="product-price">$85.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="toolbox toolbox-pagination justify-content-between">
                <p className="showing-info mb-2 mb-sm-0">
                  Showing<span>1-12 of 60</span>Products
                </p>
                <ul className="pagination">
                  <li className="prev disabled">
                    <a
                      href="#"
                      aria-label="Previous"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      <i className="w-icon-long-arrow-left" />
                      Prev
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="next">
                    <a href="#" aria-label="Next">
                      Next
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* End of Shop Main Content */}
          </div>
          {/* End of Shop Content */}
        </div>
      </div>
      {/* End of Page Content */}
    </main>
    {/* End of Main */}
    <Footer />
    {/* End of Footer */}
  </div>
  {/* End of Page Wrapper */}
  {/* Start of Sticky Footer */}
  <div className="sticky-footer sticky-content fix-bottom">
    <a href="demo1.html" className="sticky-link active">
      <i className="w-icon-home" />
      <p>Home</p>
    </a>
    <a href="shop-banner-sidebar.html" className="sticky-link">
      <i className="w-icon-category" />
      <p>Shop</p>
    </a>
    <a href="my-account.html" className="sticky-link">
      <i className="w-icon-account" />
      <p>Account</p>
    </a>
    <div className="cart-dropdown dir-up">
      <a href="cart.html" className="sticky-link">
        <i className="w-icon-cart" />
        <p>Cart</p>
      </a>
      <div className="dropdown-box">
        <div className="products">
          <div className="product product-cart">
            <div className="product-detail">
              <h3 className="product-name">
                <a href="product-default.html">
                  Beige knitted elas
                  <br />
                  tic runner shoes
                </a>
              </h3>
              <div className="price-box">
                <span className="product-quantity">1</span>
                <span className="product-price">$25.68</span>
              </div>
            </div>
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/cart/product-1.jpg"
                  alt="product"
                  height={84}
                  width={94}
                />
              </a>
            </figure>
            <button className="btn btn-link btn-close" aria-label="button">
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="product product-cart">
            <div className="product-detail">
              <h3 className="product-name">
                <a href="https://www.portotheme.com/html/wolmart/product.html">
                  Blue utility pina
                  <br />
                  fore denim dress
                </a>
              </h3>
              <div className="price-box">
                <span className="product-quantity">1</span>
                <span className="product-price">$32.99</span>
              </div>
            </div>
            <figure className="product-media">
              <a href="#">
                <img
                  src="assets/images/cart/product-2.jpg"
                  alt="product"
                  width={84}
                  height={94}
                />
              </a>
            </figure>
            <button className="btn btn-link btn-close" aria-label="button">
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        <div className="cart-total">
          <label>Subtotal:</label>
          <span className="price">$58.67</span>
        </div>
        <div className="cart-action">
          <a href="cart.html" className="btn btn-dark btn-outline btn-rounded">
            View Cart
          </a>
          <a href="checkout.html" className="btn btn-primary  btn-rounded">
            Checkout
          </a>
        </div>
      </div>
      {/* End of Dropdown Box */}
    </div>
    <div className="header-search hs-toggle dir-up">
      <a href="#" className="search-toggle sticky-link">
        <i className="w-icon-search" />
        <p>Search</p>
      </a>
      <form action="#" className="input-wrapper">
        <input
          type="text"
          className="form-control"
          name="search"
          autoComplete="off"
          placeholder="Search"
          required=""
        />
        <button className="btn btn-search" type="submit">
          <i className="w-icon-search" />
        </button>
      </form>
    </div>
  </div>
  {/* End of Sticky Footer */}
  {/* Start of Scroll Top */}
  <a
    id="scroll-top"
    className="scroll-top"
    href="#top"
    title="Top"
    role="button"
  >
    {" "}
    <i className="w-icon-angle-up" />{" "}
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">
      {" "}
      <circle
        id="progress-indicator"
        fill="transparent"
        stroke="#000000"
        strokeMiterlimit={10}
        cx={35}
        cy={35}
        r={34}
        style={{ strokeDasharray: "16.4198, 400" }}
      />{" "}
    </svg>{" "}
  </a>
  {/* End of Scroll Top */}
  {/* Start of Mobile Menu */}
  <div className="mobile-menu-wrapper">
    <div className="mobile-menu-overlay" />
    {/* End of .mobile-menu-overlay */}
    <a href="#" className="mobile-menu-close">
      <i className="close-icon" />
    </a>
    {/* End of .mobile-menu-close */}
    <div className="mobile-menu-container scrollable">
      <form action="#" method="get" className="input-wrapper">
        <input
          type="text"
          className="form-control"
          name="search"
          autoComplete="off"
          placeholder="Search"
          required=""
        />
        <button className="btn btn-search" type="submit">
          <i className="w-icon-search" />
        </button>
      </form>
      {/* End of Search Form */}
      <div className="tab">
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a href="#main-menu" className="nav-link active">
              Main Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#categories" className="nav-link">
              Categories
            </a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="main-menu">
          <ul className="mobile-menu">
            <li>
              <a href="demo1.html">Home</a>
            </li>
            <li>
              <a href="shop-banner-sidebar.html">Shop</a>
              <ul>
                <li>
                  <a href="#">Shop Pages</a>
                  <ul>
                    <li>
                      <a href="shop-banner-sidebar.html">Banner With Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-boxed-banner.html">Boxed Banner</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Full Width Banner</a>
                    </li>
                    <li>
                      <a href="shop-horizontal-filter.html">
                        Horizontal Filter
                        <span className="tip tip-hot">Hot</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-off-canvas.html">
                        Off Canvas Sidebar
                        <span className="tip tip-new">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="shop-infinite-scroll.html">
                        Infinite Ajax Scroll
                      </a>
                    </li>
                    <li>
                      <a href="shop-right-sidebar.html">Right Sidebar</a>
                    </li>
                    <li>
                      <a href="shop-both-sidebar.html">Both Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Shop Layouts</a>
                  <ul>
                    <li>
                      <a href="shop-grid-3cols.html">3 Columns Mode</a>
                    </li>
                    <li>
                      <a href="shop-grid-4cols.html">4 Columns Mode</a>
                    </li>
                    <li>
                      <a href="shop-grid-5cols.html">5 Columns Mode</a>
                    </li>
                    <li>
                      <a href="shop-grid-6cols.html">6 Columns Mode</a>
                    </li>
                    <li>
                      <a href="shop-grid-7cols.html">7 Columns Mode</a>
                    </li>
                    <li>
                      <a href="shop-grid-8cols.html">8 Columns Mode</a>
                    </li>
                    <li>
                      <a href="shop-list.html">List Mode</a>
                    </li>
                    <li>
                      <a href="shop-list-sidebar.html">
                        List Mode With Sidebar
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Product Pages</a>
                  <ul>
                    <li>
                      <a href="product-variable.html">Variable Product</a>
                    </li>
                    <li>
                      <a href="product-featured.html">Featured &amp; Sale</a>
                    </li>
                    <li>
                      <a href="product-accordion.html">Data In Accordion</a>
                    </li>
                    <li>
                      <a href="product-section.html">Data In Sections</a>
                    </li>
                    <li>
                      <a href="product-swatch.html">Image Swatch</a>
                    </li>
                    <li>
                      <a href="product-extended.html">Extended Info</a>
                    </li>
                    <li>
                      <a href="product-without-sidebar.html">Without Sidebar</a>
                    </li>
                    <li>
                      <a href="product-video.html">
                        360<sup>o</sup> &amp; Video
                        <span className="tip tip-new">New</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Product Layouts</a>
                  <ul>
                    <li>
                      <a href="product-default.html">
                        Default<span className="tip tip-hot">Hot</span>
                      </a>
                    </li>
                    <li>
                      <a href="product-vertical.html">Vertical Thumbs</a>
                    </li>
                    <li>
                      <a href="product-grid.html">Grid Images</a>
                    </li>
                    <li>
                      <a href="product-masonry.html">Masonry</a>
                    </li>
                    <li>
                      <a href="product-gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="product-sticky-info.html">Sticky Info</a>
                    </li>
                    <li>
                      <a href="product-sticky-thumb.html">Sticky Thumbs</a>
                    </li>
                    <li>
                      <a href="product-sticky-both.html">Sticky Both</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="vendor-dokan-store.html">Vendor</a>
              <ul>
                <li>
                  <a href="#">Store Listing</a>
                  <ul>
                    <li>
                      <a href="vendor-dokan-store-list.html">Store listing 1</a>
                    </li>
                    <li>
                      <a href="vendor-wcfm-store-list.html">Store listing 2</a>
                    </li>
                    <li>
                      <a href="vendor-wcmp-store-list.html">Store listing 3</a>
                    </li>
                    <li>
                      <a href="vendor-wc-store-list.html">Store listing 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Vendor Store</a>
                  <ul>
                    <li>
                      <a href="vendor-dokan-store.html">Vendor Store 1</a>
                    </li>
                    <li>
                      <a href="vendor-wcfm-store-product-grid.html">
                        Vendor Store 2
                      </a>
                    </li>
                    <li>
                      <a href="vendor-wcmp-store-product-grid.html">
                        Vendor Store 3
                      </a>
                    </li>
                    <li>
                      <a href="vendor-wc-store-product-grid.html">
                        Vendor Store 4
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog.html">Blog</a>
              <ul>
                <li>
                  <a href="blog.html">Classic</a>
                </li>
                <li>
                  <a href="blog-listing.html">Listing</a>
                </li>
                <li>
                  <a href="https://www.portotheme.com/html/wolmart/blog-grid.html">
                    Grid
                  </a>
                  <ul>
                    <li>
                      <a href="blog-grid-2cols.html">Grid 2 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-3cols.html">Grid 3 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-4cols.html">Grid 4 columns</a>
                    </li>
                    <li>
                      <a href="blog-grid-sidebar.html">Grid sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Masonry</a>
                  <ul>
                    <li>
                      <a href="blog-masonry-2cols.html">Masonry 2 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-3cols.html">Masonry 3 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-4cols.html">Masonry 4 columns</a>
                    </li>
                    <li>
                      <a href="blog-masonry-sidebar.html">Masonry sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Mask</a>
                  <ul>
                    <li>
                      <a href="blog-mask-grid.html">Blog mask grid</a>
                    </li>
                    <li>
                      <a href="blog-mask-masonry.html">Blog mask masonry</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="post-single.html">Single Post</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about-us.html">Pages</a>
              <ul>
                <li>
                  <a href="about-us.html">About Us</a>
                </li>
                <li>
                  <a href="become-a-vendor.html">Become A Vendor</a>
                </li>
                <li>
                  <a href="contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li>
                  <a href="faq.html">FAQs</a>
                </li>
                <li>
                  <a href="error-404.html">Error 404</a>
                </li>
                <li>
                  <a href="coming-soon.html">Coming Soon</a>
                </li>
                <li>
                  <a href="wishlist.html">Wishlist</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="my-account.html">My Account</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="elements.html">Elements</a>
              <ul>
                <li>
                  <a href="element-products.html">Products</a>
                </li>
                <li>
                  <a href="element-titles.html">Titles</a>
                </li>
                <li>
                  <a href="element-typography.html">Typography</a>
                </li>
                <li>
                  <a href="element-categories.html">Product Category</a>
                </li>
                <li>
                  <a href="element-buttons.html">Buttons</a>
                </li>
                <li>
                  <a href="element-accordions.html">Accordions</a>
                </li>
                <li>
                  <a href="element-alerts.html">Alert &amp; Notification</a>
                </li>
                <li>
                  <a href="element-tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="element-testimonials.html">Testimonials</a>
                </li>
                <li>
                  <a href="element-blog-posts.html">Blog Posts</a>
                </li>
                <li>
                  <a href="element-instagrams.html">Instagrams</a>
                </li>
                <li>
                  <a href="element-cta.html">Call to Action</a>
                </li>
                <li>
                  <a href="element-vendors.html">Vendors</a>
                </li>
                <li>
                  <a href="element-icon-boxes.html">Icon Boxes</a>
                </li>
                <li>
                  <a href="element-icons.html">Icons</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="tab-pane" id="categories">
          <ul className="mobile-menu">
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-tshirt2" />
                Fashion
              </a>
              <ul>
                <li>
                  <a href="#">Women</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">New Arrivals</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Best Sellers</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Trending</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Clothing</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Shoes</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bags</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Accessories</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Jewlery &amp; Watches
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Sale</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Men</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">New Arrivals</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Best Sellers</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Trending</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Clothing</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Shoes</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bags</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Accessories</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Jewlery &amp; Watches
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-home" />
                Home &amp; Garden
              </a>
              <ul>
                <li>
                  <a href="#">Bedroom</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Beds, Frames &amp; Bases
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Dressers</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Nightstands</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Kid's Beds &amp; Headboards
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Armoires</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Living Room</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Coffee Tables</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Chairs</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Tables</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Futons &amp; Sofa Beds
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Cabinets &amp; Chests
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Office</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Office Chairs</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Desks</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bookcases</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">File Cabinets</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Breakroom Tables</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Kitchen &amp; Dining</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Dining Sets</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Kitchen Storage Cabinets
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bashers Racks</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Dining Chairs</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Dining Room Tables
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bar Stools</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-electronics" />
                Electronics
              </a>
              <ul>
                <li>
                  <a href="#">Laptops &amp; Computers</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Desktop Computers</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Monitors</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Laptops</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Hard Drives &amp; Storage
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Computer Accessories
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">TV &amp; Video</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">TVs</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Home Audio Speakers
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Projectors</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Media Streaming Devices
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Digital Cameras</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Digital SLR Cameras
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Sports &amp; Action Cameras
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Camera Lenses</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Photo Printer</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Digital Memory Cards
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Cell Phones</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Carrier Phones</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Unlocked Phones</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Phone &amp; Cellphone Cases
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Cellphone Chargers
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-furniture" />
                Furniture
              </a>
              <ul>
                <li>
                  <a href="#">Furniture</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Sofas &amp; Couches
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Armchairs</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bed Frames</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Beside Tables</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Dressing Tables</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Lighting</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Light Bulbs</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Lamps</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Celling Lights</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Wall Lights</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Bathroom Lighting</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Home Accessories</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Decorative Accessories
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">
                        Candals &amp; Holders
                      </a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Home Fragrance</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Mirrors</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Clocks</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Garden &amp; Outdoors</a>
                  <ul>
                    <li>
                      <a href="shop-fullwidth-banner.html">Garden Furniture</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Pressure Washers</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">All Garden Tools</a>
                    </li>
                    <li>
                      <a href="shop-fullwidth-banner.html">Outdoor Dining</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-heartbeat" />
                Healthy &amp; Beauty
              </a>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-gift" />
                Gift Ideas
              </a>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-gamepad" />
                Toy &amp; Games
              </a>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-ice-cream" />
                Cooking
              </a>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-ios" />
                Smart Phones
              </a>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-camera" />
                Cameras &amp; Photo
              </a>
            </li>
            <li>
              <a href="shop-fullwidth-banner.html">
                <i className="w-icon-ruby" />
                Accessories
              </a>
            </li>
            <li>
              <a
                href="shop-banner-sidebar.html"
                className="font-weight-bold text-primary text-uppercase ls-25"
              >
                View All Categories
                <i className="w-icon-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* End of Mobile Menu */}
  {/* Start of Quick View */}
  <div className="product product-single product-popup">
    <div className="row gutter-lg">
      <div className="col-md-6 mb-4 mb-md-0">
        <div className="product-gallery product-gallery-sticky">
          <div className="swiper-container product-single-swiper swiper-theme nav-inner">
            <div className="swiper-wrapper row cols-1 gutter-no">
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src="assets/images/products/popup/1-440x494.jpg"
                    data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src="assets/images/products/popup/2-440x494.jpg"
                    data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src="assets/images/products/popup/3-440x494.jpg"
                    data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
              </div>
              <div className="swiper-slide">
                <figure className="product-image">
                  <img
                    src="assets/images/products/popup/4-440x494.jpg"
                    data-zoom-image="assets/images/products/popup/4-800x900.jpg"
                    alt="Water Boil Black Utensil"
                    width={800}
                    height={900}
                  />
                </figure>
              </div>
            </div>
            <button className="swiper-button-next" />
            <button className="swiper-button-prev" />
          </div>
          <div
            className="product-thumbs-wrap swiper-container"
            data-swiper-options="{
                  'navigation': {
                      'nextEl': '.swiper-button-next',
                      'prevEl': '.swiper-button-prev'
                  }
              }"
          >
            <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
              <div className="product-thumb swiper-slide">
                <img
                  src="assets/images/products/popup/1-103x116.jpg"
                  alt="Product Thumb"
                  width={103}
                  height={116}
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src="assets/images/products/popup/2-103x116.jpg"
                  alt="Product Thumb"
                  width={103}
                  height={116}
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src="assets/images/products/popup/3-103x116.jpg"
                  alt="Product Thumb"
                  width={103}
                  height={116}
                />
              </div>
              <div className="product-thumb swiper-slide">
                <img
                  src="assets/images/products/popup/4-103x116.jpg"
                  alt="Product Thumb"
                  width={103}
                  height={116}
                />
              </div>
            </div>
            <button className="swiper-button-next" />
            <button className="swiper-button-prev" />
          </div>
        </div>
      </div>
      <div className="col-md-6 overflow-hidden p-relative">
        <div className="product-details scrollable pl-0">
          <h2 className="product-title">Electronics Black Wrist Watch</h2>
          <div className="product-bm-wrapper">
            <figure className="brand">
              <img
                src="assets/images/products/brand/brand-1.jpg"
                alt="Brand"
                width={102}
                height={48}
              />
            </figure>
            <div className="product-meta">
              <div className="product-categories">
                Category:
                <span className="product-category">
                  <a href="#">Electronics</a>
                </span>
              </div>
              <div className="product-sku">
                SKU: <span>MS46891340</span>
              </div>
            </div>
          </div>
          <hr className="product-divider" />
          <div className="product-price">$40.00</div>
          <div className="ratings-container">
            <div className="ratings-full">
              <span className="ratings" style={{ width: "80%" }} />
              <span className="tooltiptext tooltip-top" />
            </div>
            <a href="#" className="rating-reviews">
              (3 Reviews)
            </a>
          </div>
          <div className="product-short-desc">
            <ul className="list-type-check list-style-none">
              <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
              <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
              <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
            </ul>
          </div>
          <hr className="product-divider" />
          <div className="product-form product-variation-form product-color-swatch">
            <label>Color:</label>
            <div className="d-flex align-items-center product-variations">
              <a
                href="#"
                className="color"
                style={{ backgroundColor: "#ffcc01" }}
              />
              <a
                href="#"
                className="color"
                style={{ backgroundColor: "#ca6d00" }}
              />
              <a
                href="#"
                className="color"
                style={{ backgroundColor: "#1c93cb" }}
              />
              <a
                href="#"
                className="color"
                style={{ backgroundColor: "#ccc" }}
              />
              <a
                href="#"
                className="color"
                style={{ backgroundColor: "#333" }}
              />
            </div>
          </div>
          <div className="product-form product-variation-form product-size-swatch">
            <label className="mb-1">Size:</label>
            <div className="flex-wrap d-flex align-items-center product-variations">
              <a href="#" className="size">
                Small
              </a>
              <a href="#" className="size">
                Medium
              </a>
              <a href="#" className="size">
                Large
              </a>
              <a href="#" className="size">
                Extra Large
              </a>
            </div>
            <a href="#" className="product-variation-clean">
              Clean All
            </a>
          </div>
          <div className="product-variation-price">
            <span />
          </div>
          <div className="product-form">
            <div className="product-qty-form">
              <div className="input-group">
                <input
                  className="quantity form-control"
                  type="number"
                  min={1}
                  max={10000000}
                />
                <button className="quantity-plus w-icon-plus" />
                <button className="quantity-minus w-icon-minus" />
              </div>
            </div>
            <button className="btn btn-primary btn-cart">
              <i className="w-icon-cart" />
              <span>Add to Cart</span>
            </button>
          </div>
          <div className="social-links-wrapper">
            <div className="social-links">
              <div className="social-icons social-no-color border-thin">
                <a
                  href="#"
                  className="social-icon social-facebook w-icon-facebook"
                />
                <a
                  href="#"
                  className="social-icon social-twitter w-icon-twitter"
                />
                <a
                  href="#"
                  className="social-icon social-pinterest fab fa-pinterest-p"
                />
                <a
                  href="#"
                  className="social-icon social-whatsapp fab fa-whatsapp"
                />
                <a
                  href="#"
                  className="social-icon social-youtube fab fa-linkedin-in"
                />
              </div>
            </div>
            <span className="divider d-xs-show" />
            <div className="product-link-wrapper d-flex">
              <a
                href="#"
                className="btn-product-icon btn-wishlist w-icon-heart"
              >
                <span />
              </a>
              <a
                href="#"
                className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
              >
                <span />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End of Quick view */}
  {/* Plugin JS File */}
  {/* Main JS */}
  {/* Mirrored from portotheme.com/html/wolmart/shop-banner-sidebar.html by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 28 Mar 2022 10:00:56 GMT */}
</>

  )
}

export default AllProducts