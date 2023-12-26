module.exports = (htmlTemplate, element) => {
  const output = htmlTemplate
    .replace(/{%PRODUCT_NAME%}/g, element.productName)
    .replace(/{%IMAGE%}/g, element.image)
    .replace(/{%ID%}/g, element.id)
    .replace(/{%DESCRIPTION%}/g, element.description)
    .replace(/{%NUTRIENTS%}/g, element.nutrients)
    .replace(/{%FROM%}/g, element.from)
    .replace(/{%QUANTITY%}/g, element.quantity)
    .replace(/{%PRICE%}/g, element.price)
    .replace(/{%NOT_ORGANIC%}/g, element.organic ? "" : "not-organic");

  return output;
};
