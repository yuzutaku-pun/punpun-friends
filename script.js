const addBtn = document.getElementById("addBtn");

addBtn.onclick = async () => {

    try {

        const supabase = window.supabase.createClient(
            "あなたのProject URL",
            "あなたのAnon Key"
        );

        const { data, error } =
            await supabase.from("users").select("*");

        if (error) {
            alert("DBエラー: " + error.message);
            return;
        }

        alert("接続成功");

    } catch(err) {

        alert("例外: " + err.message);

    }

};
