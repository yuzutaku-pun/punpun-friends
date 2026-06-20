const supabase = window.supabase.createClient(
  "https://snwzkkruiopjahswrwos.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud3pra3J1aW9wamFoc3dyd29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NzUzMDIsImV4cCI6MjA5NzU1MTMwMn0.Db7MKZBE5m9IAIi2C3uCYY6KgMcWnltuR2hl4mSRV6Q"
);

const addBtn = document.getElementById("addBtn");
const uidInput = document.getElementById("uid");

addBtn.onclick = async () => {

  const user = uidInput.value.trim();

  if (!user) {
    alert("UIDを入力");
    return;
  }

  const { error } = await supabase
    .from("users")
    .insert([
      { user: user }
    ]);

  if (error) {
    alert("保存失敗: " + error.message);
    return;
  }

  alert("保存成功");
};
