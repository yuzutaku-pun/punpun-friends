const supabase = window.supabase.createClient(
  "https://snwzkkruiopjahswrwos.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud3pra3J1aW9wamFoc3dyd29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NzUzMDIsImV4cCI6MjA5NzU1MTMwMn0.Db7MKZBE5m9IAIi2C3uCYY6KgMcWnltuR2hl4mSRV6Q"
);

const uidInput = document.getElementById("uid");
const joinBtn = document.getElementById("joinBtn");

joinBtn.onclick = async () => {

  const uid = uidInput.value.trim();

  if (!uid) return;

  localStorage.setItem("uid", uid);

  await updateOnline(uid);

  setInterval(() => {
    updateOnline(uid);
  }, 30000);

};

async function updateOnline(uid){

  await supabase
    .from("users")
    .upsert({
      uid: uid,
      last_seen: new Date().toISOString()
    });

    async function loadUsers(){

  const { data } = await supabase
    .from("users")
    .select("*");

  const list =
    document.getElementById("onlineList");

  list.innerHTML = "";

  data.forEach(user => {

    const diff =
      Date.now() -
      new Date(user.last_seen).getTime();

    const online =
      diff < 60000;

    const div =
      document.createElement("div");

    div.textContent =
      (online ? "🟢 " : "🔴 ")
      + user.uid;

    list.appendChild(div);

  });

}

setInterval(loadUsers,5000);
loadUsers();
    

}
