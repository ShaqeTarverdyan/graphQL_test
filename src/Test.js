import React from 'react';
import { connect } from 'react-redux';


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUsers();
    }
    render() {
        return (
            <div>
                <ul>
                    {this.props.posts.map(post =>
                        <li key={post.id}>{post.title}</li>
                    )}
                </ul>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch({ type: 'GET_USERS' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Test);