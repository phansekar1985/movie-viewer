import React from "react";
import { Comment, Header } from "semantic-ui-react";

const Comments = (props) => {
	const { reviews } = props;

	const getCommentList = () => {
		if (!reviews.length) {
			return (
				<Comment.Content>
					<Comment.Text>No review found!</Comment.Text>
				</Comment.Content>
			);
		}

		return reviews.map((review) => {
			const { author, content, url } = review;

			return (
				<Comment.Content>
					<Comment.Author>{author}</Comment.Author>
					<Comment.Text>{content}</Comment.Text>
					<Comment.Text as="a"><a href={url}>Review Link</a></Comment.Text>
					<br />
					<br />
					<br />
				</Comment.Content>
			);
		});
	};

	return (
		<Comment.Group>
			<Comment>
				{getCommentList()}
			</Comment>
		</Comment.Group>
	);
};

export default Comments;
