import cheerio from "cheerio";
import axios from "axios";

export const resolveUrl = async (link: string) => {
 let price: string = "";
 if (link === "") return { price, lastScraped: new Date().toISOString() };
 const { data } = await axios.get(link);
 const $ = cheerio.load(data);
 if (link.includes("rolfis")) {
  price =
   $(
    "body > div.wrapper > main > div.wrapperCenter.contentMainPage > div.js_shop_id.js_shop.shop_id > div.shop_id_main.clearfix > div.shopIdRight > div > form.js_shop_form.shop_form.shopItem__formBuy.ajax > div.shop_id_buyInfo.clearfix > div.shop_id_details > div.js_shop_param_price.shop_param_price.shop-item-price > span.shop_id_price > span.js_shop_price.shop_id_curr_price"
   ).text() ||
   $(
    "body > div.wrapper > main > div.wrapperCenter.contentMainPage > div.js_shop_id.js_shop.shop_id > div.shop_id_main.clearfix > div.shopIdRight > div > form.js_shop_form.shop_form.shopItem__formBuy.ajax > div.shop_id_buyInfo.clearfix > div.shop_id_details > div.js_shop_param_price.shop_param_price.shop-item-price > span.shop_id_old_price > span.js_shop_price.shop_price_value"
   ).text();
 }
 if (link.includes("profimann")) {
  price = $(
   "#tygh_main_container > section.content > div > div:nth-child(2) > section > div:nth-child(1) > div > div.product-block-features.product-block-left.col-lg-4.col-sm-6.col-xs-12 > form > div.prices-container.price-wrap.clearfix > div > div.product-block-price-actual > span > span.price.red > span > span.price-num"
  ).text();
 }
 if (link.includes("edobro")) {
  price =
   $(
    "#product > div > div.container > div.row.product-image-summary-wrap > div > div > div.col-sm-6.summary.entry-summary > div > p > ins > span"
   ).text() ||
   $(
    "#product > div > div.container > div.row.product-image-summary-wrap > div > div > div.col-sm-6.summary.entry-summary > div > p > span"
   ).text() ||
   $(
    "#product > div > div.container > div.row.product-image-summary-wrap > div > div > div.col-sm-6.summary.entry-summary > div > p > del > span"
   ).text();
 }
 if (link.includes("aquapure")) {
  price = $(
   "#product > div.product-page__actions.product-page__actions--bordered.products-qty-info > div.products-full-list__price > span.catalogue__price.catalogue__price--lg"
  ).text();
 }
 if (link.includes("vodavdom")) {
  price = $(
   "body > main > div > section > div > div > div.col-md-7 > div.product__cost > div.cost__act"
  ).text();
 }
 if (link.includes("ukrakvateh")) {
  price = $(
   "body > div.cs-page > div.cs-page__main-content > div > div > div:nth-child(2) > div.cs-product.js-productad > div > div.cs-product__info-holder > div.cs-product__info-line.cs-online-edit > div > p > span:nth-child(1)"
  ).text();
 }
 if (link.includes("pershavoda")) {
  price =
   $("#product > div.col-sm-7.prod_wrap > ul > li > span.price_show").text() ||
   "1";
 }
 if (link.includes("komfort-voda")) {
  price = $(
   "body > main > article > div.cs-page__main-content > div.cs-product.js-productad > div.cs-product__info-row > div.cs-product__wholesale-price.cs-online-edit > div > p > span:nth-child(1)"
  ).text();
 }
 if (link.includes("akvo.com.ua")) {
  price = $(
   "#datatab_main > div > div.product-about.flex > div.product-data > div.product-top.flex > div.product-top_items > div.product-action.product-top_item.flex > div.product-hit > div.product-hit__wrapper > div.product-hit_price > div"
  ).text();
 }
 if (link.includes("fons.com.ua")) {
  price = $("#main-product-price").text();
 }
 if (link.includes("filterpoint")) {
  price = $(
   "#fm_product_right > div > div.fm-price-block.fm-product-right-block > div > span"
  ).text();
 }
 if (link.includes("nemofilter")) {
  price =
   $(
    "#content > div > div.tovar_LCR > div.tovar_C > div:nth-child(3) > div.tovar_tsena > div.tovar_main_RH"
   ).text() ||
   $(
    "#content > div > div.tovar_LCR > div.tovar_C > div:nth-child(4) > div.tovar_tsena > div.tovar_main_RH"
   ).text();
 }
 if (link.includes("aqua-life")) {
  price = $(
   "#main > div.wrapper > section > div.product__grid > div.product__column.product__column--right.product__column--sticky > div > div:nth-child(1) > div > div:nth-child(2) > div > div > div > div.product__block.product__block--wide > div > div > div"
  ).text();
 }
 if (link.includes("smartfilter")) {
  price =
   $(
    "#product_addtocart_form > div.product-view-detail > div.em-product-view.row > div.em-product-view-secondary.em-product-shop.col-sm-10 > div > div:nth-child(2) > div > p.special-price"
   ).text() ||
   $(
    "#product_addtocart_form > div.product-view-detail > div.em-product-view.row > div.em-product-view-secondary.em-product-shop.col-sm-10 > div > div:nth-child(2) > div > p.old-price"
   ).text();
 }
 if (link.includes("a-filter")) {
  price = $(
   "body > main > article > div.cs-page__main-content > div.cs-product.js-productad > div.cs-product__info-row > div.cs-product__wholesale-price.cs-online-edit > div > p > span:nth-child(1)"
  ).text();
 }
 if (link.includes("hydroeco")) {
  price = $(
   "body > div.cs-page > div:nth-child(2) > div > div.js-productad > div > div > div.cs-product__info > div > div:nth-child(2) > div > div > p > span:nth-child(1)"
  ).text();
 }
 if (link.includes("filter.ua")) {
  price = $("#ecomm_price").text();
 }
 if (link.includes("softis")) {
  price = $(
   "#panel > div > div > div.row.categories-products-row > div > div.row.product-row.product-with-image > div.product-details-block.product-container.max-6.desktop-6.tablet-6.mobile-3.min-3 > div.product-price-buy-block > div.product-price-block > price > div > span"
  ).text();
 }
 if (link.includes("yvk.com")) {
  price = $("#center_column").text();
 }
 if (link.includes("waterboss")) {
  price = $(
   "#content > div.row > div.col-sm-7.block-2 > ul:nth-child(5) > li > span"
  ).text();
 }
 if (link.includes("aqua-room")) {
  price = $("#product > ul.list-unstyled.price > li").text();
 }
 if (link.includes("viqua.")) {
  price = $(
   "body > main > article > div.cs-page__main-content > div.cs-product.js-productad > div.cs-product__info-row > div.cs-product__wholesale-price.cs-online-edit > div > p > span:nth-child(1)"
  ).text();
 }
 if (link.includes("aqua-mart")) {
  price = $("#totalPrice").text();
 }
 if (link.includes("www.honeywell.in.ua")) {
  price =
   $("#product > div > div.price > span.price-new > span").text() ||
   $("#product > div > div.price > span").text();
 }
 const lastScraped = new Date().toISOString();
 return { price, lastScraped };
};
