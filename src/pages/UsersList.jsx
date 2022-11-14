import {useEffect} from "react";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getUsers} from "../redux/user/action";
import { connect } from 'react-redux';

function UsersList(props) {

    useEffect(() => {
        props.getUsers();
    }, [])

    return (
        <div className='row'>
            {
                props.users.map((user) =>
                    <Card key={user.id} bg='secondary'
                          style={{width: '18rem'}}
                          className='user m-3 col-md-3'
                    >
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">username: {user.username}</Card.Subtitle>
                            <Card.Text>{user.email}</Card.Text>
                            <Card.Text>{user.phone}</Card.Text>
                            <Card.Text>{user.website}</Card.Text>
                            <Link className='btn btn-info'
                                  to={'/user/' + user.id}
                            >Show information</Link>
                        </Card.Body>
                    </Card>
                )
            }

        </div>
    )
}

function mapStateToProps(state) {
    return { users: state.user.users }
}

const mapDispatchToProps = dispatch => ({
    getUsers: (params) => dispatch(getUsers(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)