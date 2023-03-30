import {useEffect, useState} from "react";
import {getCategories} from "../api/CategoryRepository";
import Category from "../api/models/Category";
import {Link} from "react-router-dom";

export default function CategoriesComponent() {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories);
        });
    }, [])

    return <ul>
        {categories.map(category => <li key={category.name}><Link to={"/category/"+category.slug}>{category.name}</Link></li>)}
    </ul>

}
