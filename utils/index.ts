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
  price = $("#sec_discounted_price_3569").text();
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
  price = $(
   "#product > div.col-sm-7.prod_wrap > ul > li > span.price_show"
  ).text();
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
 const lastScraped = new Date().toISOString();
 return { price, lastScraped };
};
