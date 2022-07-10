let isClose = false;
const ipt = document.querySelector('.ipt');
const btn = document.querySelector('.btn');
const openIcon = document.querySelector('#open');
const closeIcon = document.querySelector('#close');

function btnClick() {
  isClose = !isClose;
  if (isClose) {
    ipt.classList.remove('iptshow');
    ipt.classList.add('iptdisable');

    btn.classList.remove('btnshow');
    btn.classList.add('btndisable');

    openIcon.classList.remove('iconshow');
    openIcon.classList.add('iconhidden');
    closeIcon.classList.remove('iconhidden');
    closeIcon.classList.add('iconshow');
    return;
  }
  ipt.classList.add('iptshow');
  ipt.classList.remove('iptdisable');

  btn.classList.add('btnshow');
  btn.classList.remove('btndisable');

  openIcon.classList.add('iconshow');
  openIcon.classList.remove('iconhidden');
  closeIcon.classList.add('iconhidden');
  closeIcon.classList.remove('iconshow');
}
