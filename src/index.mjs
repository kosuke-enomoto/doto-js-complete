import "./styles.css";

const onClickAdd = () => {
  // 値の取得と初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
}
  // 未完了リストから指定の要素を削除
  const deleteIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);

  }

  // 未完了リストに追加する関数
  const createIncompleteList = (text) => {

      // Divの作成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ
    const li = document.createElement("li");
    li.innerText = text;


    // 未完了リストに追加していく
    document.getElementById("incomplete-list").appendChild(div);

    // 完了ボタンの生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {

      // 押された完了ボタンの親タグ（Div）を未完了リストから削除し、完了に追加する
      deleteIncompleteList(completeButton.parentNode);

      // 完了リストに追加する
      const addTarget = completeButton.parentNode;

      // TODOのテキストを取得
      const text = addTarget.firstElementChild.innerText;

      // Div以下を初期化する
      addTarget.textContent = null;

      // li 要素を生成する
      const li = document.createElement("li");
      li.innerText = text;

      // 戻すボタンを生成する
      const buckButton = document.createElement("button");
      buckButton.innerText = "戻す";
      buckButton.addEventListener("click", () => {
        
        //削除する
        const deleteTarget = buckButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
        // text を取得
        const text = buckButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);

      });
    
      // divタグの子要素に各要素を設定していく
      addTarget.appendChild(li);
      addTarget.appendChild(buckButton);

      // 完了リストに追加
      document.getElementById("complete-list").appendChild(addTarget);




      
    });

  // 削除ボタンの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（Div）を未完了リストから削除する
    deleteIncompleteList(deleteButton.parentNode);
  });


  // divタグの子要素に各要素を設定していく
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

    

  }


document.getElementById("add-button").addEventListener("click", () => onClickAdd());