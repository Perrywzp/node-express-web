/**
 * [desc]
 * @author wangzhipei
 * @date 2016/8/3/0003.
 */
suite('About Page Tests',function(){
  test('page should contain link to contact page', function(){
    assert($('a[herf="/contact"]').length);
  });
});
