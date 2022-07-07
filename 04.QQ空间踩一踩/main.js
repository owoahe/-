const items = document.querySelectorAll('.item');
let show = false;
let iconshow = false;

const showList = {
  love: './image/10001.gif',
  wok: './image/10002.gif',
  spray: './image/10003.gif',
};

function showItem() {
  show = !show;
  console.log('zhix ', new Date().getTime());
  if (show) {
    items.forEach((item, index) => {
      item.classList.add('show');
      /*这里是替换下面被注释掉的代码 */
      items[index].classList.add(item.classList[1] + 'show');
    });
    // 爱心的显示
    // items[0].classList.add('loveshow');
    // 锅的显示
    // items[1].classList.add('wokshow');
    //喷头的显示
    // items[2].classList.add('sprayshow');
    return;
  }

  items.forEach((item, index) => {
    item.classList.add('hidden');
    /*这里是替换下面被注释掉的代码 */
    items[index].classList.remove(item.classList[1] + 'show');
  });
  //   爱心的隐藏
  //   items[0].classList.remove('loveshow');
  //锅的隐藏
  //   items[1].classList.remove('wokshow');
  //喷头
  //   items[2].classList.remove('sprayshow');
}

function showIcon(type) {
  if (iconshow === false) {
    iconshow = true;
    const img = document.getElementsByClassName('iconImg')[0];
    img.src = showList[type];
    img.classList.remove('imghidden');
    img.classList.add('imgshow');
    const timer = setTimeout(() => {
      img.classList.remove('imgshow');
      img.classList.add('imghidden');
      clearTimeout(timer);
      iconshow = false;
    }, 2000);
  }
}
