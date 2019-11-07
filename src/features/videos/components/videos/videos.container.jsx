import React from "react";
import { VideoComponent } from "..";
import { Header, Footer, Landing } from '../../../../components';
import { getCoursesAll } from '../../store/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './videos.container.scss';
class VideosContainer extends React.Component {
  componentDidMount() {
    this.props.getCoursesAll()
  }
  render() {
    const videos = this.props.Courses.data
    console.log(videos)
    return (
      <>
        <Header />
        <Landing />
        <div className="grid">
          {
            videos.map(video => {
              return (
                <VideoComponent
                  key={video.id}
                  className="videos__video"
                  id={video.id}
                  course={video.name}
                  description={video.description}
                  poster={video.picture}
                />
              )
            })
          }
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  Courses: state.Courses
})

const mapDispatchToProps = {
  getCoursesAll
}

const Videos = withRouter(connect(mapStateToProps, mapDispatchToProps)(VideosContainer));

export {
  Videos
};