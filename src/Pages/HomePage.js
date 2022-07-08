import React, {useEffect, useState} from "react";
import {
    useParams
} from "react-router-dom";
import {changeCatAction} from "../redux/cats/actions";
import {connect, useDispatch} from "react-redux";
import CatCard from "../Layouts/CatCard";
import "./HomePage.css";

const HomePage = ({changeCatAction, cats}) => {
    const [page, setPage] = useState(2);
    const dispatch = useDispatch();
    let {category_ids} = useParams();

    useEffect(() => {
        if (category_ids) {
            dispatch(changeCatAction({category_ids}))
        }
    }, [category_ids]);
    const loadImages = () => {
        dispatch(changeCatAction({category_ids, page, load: true}));
        setPage(prev => prev + 1)
    };
    return (<div className="cats">
        <div className="cat-lost">
        {cats.map(cat => {
            return (<CatCard key={cat.id} cat={cat}/>)
        })}
        </div>
        {category_ids ?    <div className="load"><button onClick={loadImages}>load more</button></div> : ''}
    </div>)
}
const mapStateToProps = state => {
    return {
        cats: state.cat.cats
    }
};
const mapDispatchToProps = dispatch => {
    return {
        changeCatAction
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);