// 食物列表 - 理工篇特色食物
const foodList = [
  "第一食堂-黄焖鸡",
  "第一食堂-猪杂汤饭",
  "第一食堂-猪杂汤面",
  "第一食堂-叉烧饭",
  "第一食堂-烧鹅饭",
  "第一食堂-白切鸡饭",
  "第一食堂-手撕鸡饭",
  "第一食堂-鸡扒饭",
  "第一食堂-猪扒饭",
  "第一食堂-牛扒饭",
  "第一食堂-鸡腿饭",
  "第一食堂-肠粉",
  "第一食堂-减脂餐",
  "第一食堂-自选菜",
  "第二食堂-自选菜",
  "第一食堂-味孔记",
  "第一食堂-杨国福",
  "第一食堂-拉面",
  "第一食堂-云吞",
  "第一食堂-鸡杂面",
  "第二食堂-烧鹅粉",
  "第二食堂-小炒",
  "第二食堂-水煮肉片",
  "北街-关东煮",
  "北街-两荤一素",
  "北街-饺子",
  "北街-螺蛳粉",
  "北街-汉堡",
  "北街-益禾堂",
  "泡面",
  "四饭-潮汕牛肉裸条",
  "四饭-皮蛋廋肉粥",
  "四饭-莞工三明治",
  "四饭-炒饭",
  "四饭-炒粉",
  "四饭-热干面",
  "四饭-酱香饼",
  "四饭-手枪腿",
  "四饭-鸡架",
  "四饭-意面",
  "四饭-寿司",
  "四饭-煎饼果子",
  "四饭-鱼粉",
  "四饭-关东煮",
  "四饭-蒸面",
  "四饭-煎饺",
  "四饭-蒸饺",
  "四饭-水果",

  "四饭-椰子鸡",
  "四饭-柠檬茶",
  "外卖-麦当劳",
  "北街-KFC",
  "外卖",
  "四饭-肉夹馍"
];

// 获取DOM元素
const foodNameElement = document.getElementById('food-name');
const randomButton = document.getElementById('random-but');

// 添加点击事件监听器
randomButton.addEventListener('click', function() {
  // 添加点击动画效果
  randomButton.style.transform = 'translateY(3px)';
  randomButton.style.boxShadow = '0 4px 15px rgba(245, 87, 108, 0.3)';
  
  setTimeout(() => {
    randomButton.style.transform = 'translateY(-3px)';
    randomButton.style.boxShadow = '0 6px 20px rgba(245, 87, 108, 0.4)';
  }, 150);
  
  // 添加食物名称显示动画
  foodNameElement.style.opacity = '0';
  foodNameElement.style.transition = 'opacity 0.3s';
  
  setTimeout(() => {
    // 随机选择食物
    const randomFood = foodList[Math.floor(Math.random() * foodList.length)];
    foodNameElement.textContent = randomFood;
    
    // 恢复显示
    foodNameElement.style.opacity = '1';
  }, 300);
});

// 添加页面加载动画
document.addEventListener('DOMContentLoaded', function() {
  foodNameElement.style.opacity = '0';
  setTimeout(() => {
    foodNameElement.style.opacity = '1';
    foodNameElement.style.transition = 'opacity 0.5s';
  }, 300);
});