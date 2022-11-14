import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Card, ListGroup} from "react-bootstrap";
import CurrentAlbum from "../components/CurrentAlbum";
import Posts from "../components/Posts";
import {getCurrentUser} from "../redux/user/action";
import {connect} from "react-redux";


export function CurrentUser(props) {
    let {id} = useParams();

    useEffect(() => {
        props.getCurrentUser(id)
    }, [])


    return (
        <div>
            <div className='text-center m-3'>
                <div className='d-flex justify-content-center'>
                    <div className='avatar'></div>
                </div>
                <Link to={'/'} className='btn btn-primary mt-2'>Back to all users</Link>
                <h1 className='mt-3'>Name - {props.currentUser.name}</h1>
                <h3>Username - {props.currentUser.username}</h3>
                <h3>Email - {props.currentUser.email}</h3>
                <h3>Phone - {props.currentUser.phone}</h3>
                <h3>Website - {props.currentUser.website}</h3>
            </div>

            <CurrentAlbum userId={props.currentUser.id}/>
            <Posts userId={props.currentUser.id}/>

        </div>


    )
}


function mapStateToProps(state) {
    return {currentUser: state.user.currentUser}
}

const mapDispatchToProps = d => ({
    getCurrentUser: (params) => d(getCurrentUser(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)