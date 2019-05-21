import React from 'react';
import gql from 'graphql-tag';
import { Mutation, ApolloConsumer, Query } from 'react-apollo';
import { connect } from 'react-redux';

import client from './client';




const GET_INFO = gql`
{
  allPosts {
    id
    title
  }
}
`;

class Test extends React.Component {
    render() {
        return (
            <div>
                <Query query={GET_INFO}>
                    {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;
                        return (
                            <>
                                <select name='dog'>
                                    {data.allPosts.map(post => (
                                        <option key={post.id} value={post.id}>
                                            {post.title}
                                        </option>
                                    ))}
                                </select>
                                <div>
                                    {this.props.item}
                                </div>
                            </>
                        );
                    }}
                </Query>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        item: state.item
    }
}
const mapDispatchToProps = dispatch => {

}
export default connect(mapStateToProps)(Test);