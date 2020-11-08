import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLi = styled.li`
  list-style: decimal inside;
  margin-bottom: 1.3rem;
  line-height: 1.3;
`;

const List = ({content}) => (
    <ul>
        {content.map((item) => (
          <StyledLi key={item}>{item}</StyledLi>
        ))}
    </ul>
)

List.propTypes = {
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default List;
