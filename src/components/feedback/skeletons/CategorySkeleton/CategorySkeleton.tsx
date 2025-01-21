import { Col, Row } from "react-bootstrap";
import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
  const renderSkeleton = Array(4)
    .fill(0)
    .map((_, index) => (
      <Col
        key={index}
        sx={3}
        className="d-flex justify-content-center mb-5 mt-2"
      >
        <ContentLoader
          speed={2}
          width={200}
          height={200}
          viewBox="0 0 200 200"
          backgroundColor="#f0f0f0"
          foregroundColor="#ffffff"
        >
          <rect x="61" y="179" rx="3" ry="3" width="85" height="6" />
          <circle cx="104" cy="84" r="84" />
        </ContentLoader>
      </Col>
    ));
  return <Row>{renderSkeleton}</Row>;
};

export default CategorySkeleton;
