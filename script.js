const addBtn = document.getElementById("addBtn");

addBtn.onclick = async () => {

    try {

        const supabase = window.supabase.createClient(
            "PROJECT_URL",
            "ANON_KEY"
        );

        alert("Supabase接続成功");

    } catch(err) {

        alert("エラー: " + err.message);

    }

};
