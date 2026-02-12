console.log("緣滾滾 JS 已成功啟動！"); // 這行是用來在 Console 檢查有沒有動的

window.onload = function () {
  const nightBtn = document.getElementById("night-mode-btn");

  if (nightBtn) {
    console.log("找到按鈕了！");
    nightBtn.addEventListener("click", function () {
      console.log("按鈕被點擊了！");
      document.body.classList.toggle("night-mode");

      // 同步切換按鈕文字
      if (document.body.classList.contains("night-mode")) {
        this.textContent = "回歸清晨日光";
      } else {
        this.textContent = "切換大稻埕夜色";
      }
    });
  } else {
    console.log("錯誤：找不到 ID 為 night-mode-btn 的按鈕");
  }
};
