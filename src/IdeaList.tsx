import React from 'react';
import Text from './components/Text';
import P from './components/P';
import Run from './components/Run';

interface IdeaInfo {
  id: string;
  content: string;
  createTime: string;
  user: {
    userName: string;
  };
}

interface Props {
  ideas: IdeaInfo[];
}

const IdeaList: React.SFC<Props> = ({ ideas }) => {
  return (
    <>
      {(ideas || []).map((idea) => (
        <>
          <P key={idea.id}>
            <Run>
              <Text>{`${idea.user.userName}（${idea.createTime}）：`}</Text>
            </Run>
          </P>
          <P>
            <Run>
              <Text>{idea.content}</Text>
            </Run>
          </P>
          <P />
        </>
      ))}
    </>
  );
};

export default IdeaList;
