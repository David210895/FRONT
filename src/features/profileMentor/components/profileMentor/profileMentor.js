import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from '../../../../components';
import { VideoComponent } from '../../../videos';
class ProfileMentorContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                {this.props.results.map(
                    curso => {
                        return (
                            <VideoComponent
                                key={curso.id}
                                id={curso.id}
                                course={curso.name}
                                description={curso.description}
                                poster={curso.picture}
                            />

                        )
                    }
                )}
            </>

        );
    }
}

const mapStateToProps = state => ({
    results: state.results
});

const ProfileMentor = withRouter(connect(mapStateToProps)(ProfileMentorContainer));

export {
    ProfileMentor
}

