//账号列表
const books = [
  {
    id: 1,
    name: '张伟',
    phone: 13250005444,
  },
  {
    id: 2,
    name: '曾小贤',
    phone: 13250005443,
  },
];

init(books);

//输入框元素
const usernameIpt = document.querySelector('.username');
const userphoneIpt = document.querySelector('.userphone');
const searchIpt = document.querySelector('.searchipt');

//展示切换
function showList(type) {
  const add = document.querySelector('.add');
  const list = document.querySelector('.list');

  switch (type) {
    case 'list':
      list.classList.add('listshow');
      add.classList.add('addhidden');
      break;
    case 'add':
      add.classList.remove('addhidden');
      list.classList.remove('listshow');
      break;
  }
}

// 弹窗提示
function showToast(title, message, delay = 2000) {
  const shadow = document.querySelector('.shadow');
  const titleBox = document.querySelector('.title');
  const messageBox = document.querySelector('.info');
  shadow.style.display = 'flex';
  titleBox.innerHTML = title;
  messageBox.innerHTML = message;
  const timer = setTimeout(() => {
    shadow.style.display = 'none';
    clearTimeout(timer);
  }, delay);
}

function init(bks) {
  let books = bks;
  //获取结果列表这个元素
  let result = document.querySelector('.result');
  //将元素清空
  result.innerHTML = '';
  //循环遍历books，将它渲染到页面
  for (let index = 0; index < books.length; index++) {
    const p = document.createElement('p');
    const text = document.createTextNode(
      books[index].name + ':' + books[index].phone
    );
    p.appendChild(text);
    result.appendChild(p);
  }
}

//用户每次输入的类
class User {
  constructor(id, name, phone) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}
//用户输入的值
const userInputVal = {
  name: '',
  phone: '',
};

//用户输入函数
function onUserInputHander(type) {
  //用户输入值，将其添加到userInputVal对象
  userInputVal[type] = event.target.value;
}

//用户提交函数
function onUserPostHander() {
  //阻止默认事件
  event.preventDefault();
  //手机号正则
  const phoneRegx = new RegExp(
    /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  );
  //判断输入是否为空，手机号是否正确
  if (
    userInputVal.name.trimStart().trimEnd().trim() == '' ||
    userInputVal.phone == '' ||
    !phoneRegx.test(userInputVal.phone)
  )
    return showToast('错误', '请输入正确的姓名与手机号!');
  //验证通过，将输入的数值添加到一个新的对象
  let person = new User(
    new Date().getTime() + Math.random(),
    userInputVal.name,
    userInputVal.phone
  );
  //判断books里面是否有用户输入的用户
  const hasOwn = books.find((item) => item.name == person.name);
  if (hasOwn) return showToast('失败', '用户已存在!');
  //如果没有，就将它添加到books数组
  books.push(person);
  showToast('成功', '添加成功！', 1000);
  usernameIpt.value = '';
  userphoneIpt.value = '';
  //重新遍历
  init(books);
}

//搜索框输入的值
let searchVal = '';
//输入时执行的函数
function searchInputHandler() {
  //如果输入框为空，就说明没有进行搜索，则将联系人全部渲染出来
  if (event.target.value.trim().trimStart().trimEnd() == '') {
    searchIpt.value = '';
    return init(books);
  }
  //如果输入框有值，就会进行赋值
  searchVal = event.target.value;
}

//搜索按钮点击函数
function search(val) {
  event.preventDefault();
  //过滤
  const result = books.filter((item) => {
    return item.name.match(searchVal);
  });
  //将过滤结果显示到页面上
  if (result.length > 0) return init(result);
  showToast('提示', '没有搜索到该用户信息！');
  searchIpt.value = '';
  init(books);
}
