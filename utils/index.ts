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
 const lastScraped = new Date().toISOString();
 return { price, lastScraped };
};
