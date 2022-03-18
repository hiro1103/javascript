// 追加ボタン押下時に実行する関数
const onClickAdd = () => {
    // テキストボックスのElementを取得
    const textEl = document.getElementById("add-text")

    // テキストボックスの値を取得
    const text = textEl.value

    // テキストボックスを空に
    text.value = ""

    // liタグ生成
    const li = document.createElement("li")

    // divタグ生成
    const div = document.createElement("div")

    // pタグ生成
    const p = document.createElement("p")
    p.textContent = text

    // buttonタグ生成
    const button = document.createElement("button")
    button.textContent = "削除"

    // ボタン押下時に行を削除する処理
    button.addEventListener("click", () => {
        const deleteTarget = button.closest("li")

        // ulタグ配下から上記で特定した行を削除
        document.getElementById("memo-list").removeChild(deleteTarget)
    })

    // divタグ配下にpタグとbuttonタグを設定
    div.appendChild(p)
    div.appendChild(button)

    // liタグ配下に上記のdivタグを設定
    li.appendChild(div)

    // メモ一覧のリストに上記のliタグを設定
    document.getElementById("memo-list").appendChild(li)
}

// [追加]ボタン押下時にonClickAdd関数を実行するよう登録
document.getElementById("add-button").addEventListener("click", () => onClickAdd())
