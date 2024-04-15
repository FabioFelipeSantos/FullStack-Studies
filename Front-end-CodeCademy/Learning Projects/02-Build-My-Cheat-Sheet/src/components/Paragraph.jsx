import PropTypes from "prop-types";

export default function Paragraph(props) {
  return <p className="text-lg text-justify my-4">{props.children}</p>;
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
