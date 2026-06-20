const supabase = window.supabase.createClient(
  "https://snwzkkruiopjahswrwos.supabase.co/rest/v1/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud3pra3J1aW9wamFoc3dyd29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NzUzMDIsImV4cCI6MjA5NzU1MTMwMn0.Db7MKZBE5m9IAIi2C3uCYY6KgMcWnltuR2hl4mSRV6Q"
);

const addBtn = document.getElementById("addBtn");
const uidInput = document.getElementById("uid");
const friends = document.getElementById("friends");

addBtn.onclick = async () => {

  const uid = uidInput.value.trim();

  if (!uid) return;

  const { error } = await supabase
    .from("users")
    .insert([
      { uid: uid }
    ]);

  if (error) {
    alert("保存失敗");
    console.log(error);
    return;
  }

  const div = document.createElement("div");
  div.className = "friend";
  div.textContent = uid;

  friends.appendChild(div);

  alert("保存成功");

  uidInput.value = "";
};
