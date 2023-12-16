import { FC } from 'react';
import { Avatar, Card } from 'antd';
import { ClientsCardInt } from '../../utils';
import { ShareIcon, CommentIcon, LikeIcon } from '../../assets/icons';

const { Meta } = Card;
const ClientsCard: FC<ClientsCardInt> = ({ data }) => {
  const {
    viewNum,
    commentNum,
    likeNum,
    shareNum,
    datePosted,
    authorName,
    authorImg,
    postContent,
  } = data;
  return (
    <Card className="w-[50ch]">
      <Meta
        title={<h4 className="truncate">{postContent}</h4>}
        description={(
          <div className="flex flex-col">
            <div>
              <Avatar src={authorImg} />
              <span>
                {' '}
                {authorName}
                {' '}
              </span>
            </div>
            <div>
              <span>
                {' '}
                {datePosted}
                {' '}
              </span>
            </div>
            <div className="mt-5 flex justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-3">
                  <CommentIcon color="fill-primaryColor" />
                  <span>
                    {' '}
                    {commentNum}
                    {' '}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <LikeIcon color="fill-primaryColor" />
                  <span>
                    {' '}
                    {likeNum}
                    {' '}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <ShareIcon color="fill-primaryColor" />
                  <span>
                    {' '}
                    {shareNum}
                    {' '}
                  </span>
                </div>
              </div>
              <div>
                <span>
                  {' '}
                  {viewNum}
                  {' '}
                  views
                  {' '}
                </span>
              </div>
            </div>
          </div>
        )}
      />
    </Card>
  );
};

export default ClientsCard;
