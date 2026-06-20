alert("A");

const supabase = window.supabase.createClient(
    "https://snwzkkruiopjahswrwos.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNud3pra3J1aW9wamFoc3dyd29zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NzUzMDIsImV4cCI6MjA5NzU1MTMwMn0.Db7MKZBE5m9IAIi2C3uCYY6KgMcWnltuR2hl4mSRV6Q"
);

alert("B");

const addBtn = document.getElementById("addBtn");

addBtn.onclick = async () => {

    alert("C");

    const { data, error } =
        await supabase
            .from("users")
            .select("*");

    alert("D");

    if(error){
        alert(error.message);
        return;
    }

    alert(JSON.stringify(data));

};
