import React from 'react';
import Text from './components/Text';
import P from './components/P';
import Run from './components/Run';
import Break from './components/Break';

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
        <P key={idea.id}>
          <Run>
            <Text>{`${idea.user.userName}（${idea.createTime}）：`}</Text>
          </Run>
          <Break />
          <Run>
            <Text>{idea.content}</Text>
          </Run>
        </P>
      ))}
    </>
  );
};

export default IdeaList;
