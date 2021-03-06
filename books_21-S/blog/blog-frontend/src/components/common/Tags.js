import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const TagsBlock = styled.div`
  margin-top: 0.5rem;

  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

export default function Tags({ tags }) {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link to={`/?tag=${tag}`} key={tag} className="tag">
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
}
