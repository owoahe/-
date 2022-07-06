(function () {
  //获取元素
  const navbar = document.querySelector('.navbar');
  const items = document.querySelectorAll('.navbar_item');
  const cursor = document.querySelector('.cursor');
  //初始化函数
  init();
  //恢复动画
  resetTransition();

  //监听navbar的点击事件，利用事件委托
  navbar.addEventListener('click', (e) => {
    const target = e.target;
    cursor.style.left = target.offsetLeft + 'px';
    let timer = setTimeout(() => {
      cursor.textContent = target.textContent;
      clearTimeout(timer);
    }, 610);
  });
  //设置游标宽高以及位置
  function init() {
    //利用循环判断游标在哪个文字的上方，动态设置左边距
    for (let i = 0; i < items.length; i++) {
      if (items[i].textContent == cursor.textContent) {
        cursor.style.width = items[i].clientWidth + 'px';
        cursor.style.height = items[i].clientHeight + 'px';
        cursor.style.left = items[i].offsetLeft + 'px';
        cursor.style.transition = 'none';
      }
    }
  }

  //恢复动画的函数
  function resetTransition() {
    const cursorTimer = setTimeout(() => {
      cursor.style.transition = 'left 1s ease';
      clearTimeout(cursorTimer);
    }, 0);
  }

  //监听页面的resize，设置游标宽高以及位置
  window.addEventListener('resize', () => {
    init();
    resetTransition();
  });
})();
