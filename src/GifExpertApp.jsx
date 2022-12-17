import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
//nVlYnw2aIOQ1aHdWxFuNig3q6fSPrDF3
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Puch']);
    const onAddCategory = (NewCategory) => {
        if(categories.includes(NewCategory)) return;
        setCategories([...categories, NewCategory]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory
            onNewCategory={(value) => onAddCategory(value)}/>
        <ol>
            { categories.map(category => (
                    <GifGrid key={ category } category = {category}/>
                ))
            }
        </ol>
    </>
  )
}
