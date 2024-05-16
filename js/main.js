// main.jsが効いてないのなあぜなあぜ？


// 次回① BGMのループ再生
//音声の再生
document.getElementById("audio").play();
//音声の一時停止
document.getElementById("audio").pause();

// ｈｔｍｌに入れた効いていないループ
<audio src="audio/mejiro.mp3" autoplay loop>
あなたのブラウザーは <code>audio</code>要素をサポートしていません。
</audio>



// 次回② ヘッダーの背景画像の無限スクロール
document.querySelector(`.title`).animate(
  [
    { backgroundPosition: '0 0' },
    { backgroundPosition: '-100% 0' }
  ],
  {
    duration: 5000,
    iterations: Infinity
  }
);


