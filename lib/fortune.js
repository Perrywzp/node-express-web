/**
 * [desc]
 * @author wangzhipei
 * @date 2016/8/3/0003.
 */
var fortuneCookies = [
  "Some people make your laugh a little louder, your smile a little brighter and your " +
  "life a little better. Try to be one of those people.",
  "Do not fear what you don`t know.",
  "You will have a pleasant surprise",
  "Whenever possible, keep it simple",
  "Rivers need springs"
];

exports.getFortune = function(){
  var idx = Math.floor(Math.random()* fortuneCookies.length);
  return fortuneCookies[idx];
};
