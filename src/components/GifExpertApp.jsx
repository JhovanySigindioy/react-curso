import { useState } from "react";
import { AddCategory, GifGrid } from '../components';


const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory
                //setCategories={setCategories}
                onAddCategory={onAddCategory}
            />

            {
                categories.map((category) =>
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
            }

        </>
    );
};

export {
    GifExpertApp,
}
