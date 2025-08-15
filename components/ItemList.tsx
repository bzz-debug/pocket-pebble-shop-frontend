import { useEffect, useState } from "react";
import { getItems } from "../api";
import IndividualItem from "./IndividualItem";

function ItemList() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems().then((result) => {
      setItemList(result);
    });
  });

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
      <h1>ITEM LIST</h1>
      {itemList.map((item) => {
        return <IndividualItem id={item_id} key={item.item_id} />;
      })}
    </>
  );
}

export default ItemList;
