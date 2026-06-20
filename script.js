alert("読み込み成功");

const addBtn = document.getElementById("addBtn");

if (addBtn) {
    addBtn.onclick = () => {
        alert("ボタン成功");
    };
} else {
    alert("addBtnが見つかりません");
}
