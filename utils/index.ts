import cheerio from "cheerio";
import axios from "axios";

export const resolveUrl = async (link: string) => {
 const { data } = await axios.get(link);
 const $ = cheerio.load(data);
 let title: string = "";
 let price: string = "";
 if (link.includes("rolfis")) {
  title = $(
   "body > div.wrapper > main > div.wrapperCenter.contentMainPage > div.js_shop_id.js_shop.shop_id > div.shop_id_main.clearfix > div.shopIdRight > div > form.js_shop_form.shop_form.shopItem__formBuy.ajax > h1"
  ).text();
  price =
   $(
    "body > div.wrapper > main > div.wrapperCenter.contentMainPage > div.js_shop_id.js_shop.shop_id > div.shop_id_main.clearfix > div.shopIdRight > div > form.js_shop_form.shop_form.shopItem__formBuy.ajax > div.shop_id_buyInfo.clearfix > div.shop_id_details > div.js_shop_param_price.shop_param_price.shop-item-price > span.shop_id_price > span.js_shop_price.shop_id_curr_price"
   ).text() ||
   $(
    "body > div.wrapper > main > div.wrapperCenter.contentMainPage > div.js_shop_id.js_shop.shop_id > div.shop_id_main.clearfix > div.shopIdRight > div > form.js_shop_form.shop_form.shopItem__formBuy.ajax > div.shop_id_buyInfo.clearfix > div.shop_id_details > div.js_shop_param_price.shop_param_price.shop-item-price > span.shop_id_old_price > span.js_shop_price.shop_price_value"
   ).text();
 }
 if (link.includes("profimann")) {
  title = $(
   "#tygh_main_container > section.content > div > div:nth-child(1) > section > div:nth-child(3) > div > div > h1"
  ).text();
  price = $("#sec_discounted_price_3569").text();
 }
 const lastScraped = new Date().toISOString();
 return { price, lastScraped };
};
