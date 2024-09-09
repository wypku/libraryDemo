import { Link } from "react-router-dom";

export const ReviewWidget: React.FC<{
  fetchUserReviewBook: any;
  BookId: number;
  isReviewLeft: boolean;
}> = (props) => {
  props.fetchUserReviewBook(props.BookId);
  if (!props.isReviewLeft) {
    return (
      <>
        <hr />
        <p className="mt-3">
          Help other find their adventure by reviewing your loan.
        </p>
        <Link className="btn btn-primary" to={`/checkout/${props.BookId}`}>
          Leave a review
        </Link>
      </>
    );
  }
  return <></>;
};
