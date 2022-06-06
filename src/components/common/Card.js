import React from "react";
import {
  Card as ReactstrapCard,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const Card = ({ title, subtitle, subtitleTag, text, children }) => {
  return (
    <ReactstrapCard style={{ width: "90%", margin: "2%" }}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        {subtitle && (
          <CardSubtitle tag={subtitleTag} className="mb-2 text-muted">
            {subtitle}
          </CardSubtitle>
        )}
        {text && (
          <CardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </CardText>
        )}
        {children}
      </CardBody>
    </ReactstrapCard>
  );
};

export default Card;
