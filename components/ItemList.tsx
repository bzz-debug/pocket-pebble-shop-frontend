import { useEffect, useState } from "react";
import { getItems } from "../api";
import ItemCards from "./ItemCards";

function ItemList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems().then((result) => {
      setItemList(result.data.items);
      console.log(Array.isArray(itemList));
    });
  }, []);

  //  useEffect(() => {
  //   if (topic) {
  //     getArticles(topic, sortBy, orderBy)
  //       .then((result) => {
  //         console.log(result.data.articles, topic);
  //         if (result.data.articles) {
  //           setArticleList(result.data.articles);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data.message);
  //         setTopicErr(err.response.data.message);
  //       });
  //   } else {
  //     getArticles('', sortBy, orderBy)
  //       .then((result) => {
  //         console.log(result.data.articles, topic);
  //         if (result.data.articles) {
  //           setArticleList(result.data.articles);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }, [topic, sortBy, orderBy]);

  return (
    <>
    <div id="item-list-div">
      <h1>ITEM LIST</h1>
      {console.log(itemList)}
      {itemList.map((item) => {
        return <ItemCards item={item} key={item.item_id} />;
      })}
      </div>
    </>
  );
}

export default ItemList;
