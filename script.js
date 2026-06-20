const uidInput = document.getElementById("uid");
const joinBtn = document.getElementById("joinBtn");
const status = document.getElementById("status");

joinBtn.onclick = () => {

    const uid = uidInput.value.trim();

    if (!uid) {
        alert("UIDを入力");
        return;
    }

    localStorage.setItem("uid", uid);

    status.innerHTML = "🟢 オンライン";
};

const savedUID =
localStorage.getItem("uid");

if(savedUID){

    uidInput.value = savedUID;

    status.innerHTML = "🟢 オンライン";
}
