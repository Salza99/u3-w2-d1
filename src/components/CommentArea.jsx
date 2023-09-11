import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  };
  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY5YzllMzhkM2Q0OTAwMTRjZmQ3ZjgiLCJpYXQiOjE2OTQ0MzY0ODksImV4cCI6MTY5NTY0NjA4OX0.ubH9GR6FLH6y4d2HXPSBC07i7DmrwFfHQ1UUXRVgdxg",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
        let filterComments = await comments.filter((c) => c.elementId === this.props.asin);
        console.log(filterComments);
        this.setState({ comments: filterComments, isLoading: false, isError: false });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    return (
      <div className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.asin} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default CommentArea;
