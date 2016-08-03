/**
 * [desc]
 * @author wangzhipei
 * @date 2016/8/3/0003.
 */
suite('Global tests', function(){
  test('page has a valid title', function(){
    assert(document.title && document.title.match(/\S/) &&
      document.title.toUpperCase() != 'TODO');
  });
});
