import axios from "axios";
import * as cheerio from "cheerio";

export async function getLocalTemp(area) {
  const resp = await axios.get(
    `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=${area}날씨`
  );

  let result = "";
  const $ = cheerio.load(resp.data);
  const elements = $(".week_item");

  elements.each((idx, el) => {
    // console.log($(el).text());
    result = result + $(el).text() + "\n";
  });

  return result;
}
