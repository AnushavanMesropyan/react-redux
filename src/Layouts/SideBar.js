import React, {useEffect} from "react";
import {connect, useDispatch,} from "react-redux";
import {changeCategoryAction} from "../redux/category/actions";
import './css/SideBar.css'
import {Link} from "react-router-dom";

const SideBar= ({changeCategoryAction,categories})=>{
    const dispatch = useDispatch();

    useEffect(   ()=>{
        dispatch(changeCategoryAction())
    },[]);

    return(<div className="sidebar ">
            <div className="logo-details">
                <span className="logo-name">Cats</span>
            </div>
            <ul className="nav-links">
                {categories.map(category=>{
                    return(<li key={category.id}>
                        <Link to={`${category.id}`}>
                            <span className="link-name">{category.name}</span>
                        </Link>
                    </li>)
                })}

            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        categories: state.category.categories,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeCategoryAction
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);