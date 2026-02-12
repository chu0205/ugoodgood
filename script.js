// 先測試按鈕到底有沒有被抓到
const nightBtn = document.getElementById("night-mode-btn");

if (nightBtn) {
  nightBtn.addEventListener("click", () => {
    alert("緣滾滾：霓虹燈啟動！"); // 如果按了會跳出視窗，代表這段有通
    document.body.classList.toggle("night-mode");
  });
} else {
  console.log("找不到按鈕，請檢查 ID 是否正確");
}
