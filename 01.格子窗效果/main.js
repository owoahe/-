(function () {
  //获取元素
  const maintainer = document.querySelector('.maintainer');
  const items = document.querySelectorAll('.grid');
  init();
  //为maintainer绑定点击事件，利用冒泡使用事件委托
  maintainer.addEventListener('click', (e) => {
    //获取被点击的元素
    const target = e.target.parentNode;
    //设置被点击元素的宽度
    if (target.nodeName == 'DIV') {
      items.forEach((item) => (item.style.width = '10vw'));
      target.style.width = '60vw';
    }
  });
  //初始化函数，进入页面时，设置第一个元素宽度为60vw
  function init() {
    items[0].style.width = '60vw';
    maintainer.style.zIndex = '9999';
  }
})();
