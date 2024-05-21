// HTML要素を取得し、btnという定数に代入
const btn=document.getElementById('btn');
const text =document.getElementById('text');

// HTML要素をクリックしたときに、イベント処理を実行する
btn.addEventListener('click',() => {
  text.textContent = 'ボタンをクリックしました';
});