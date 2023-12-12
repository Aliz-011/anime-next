import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Topic } from '@/types/mangaType';

const Comments = ({ data }: { data: Topic[] }) => {
  return (
    <div className="relative p-4">
      <div className="flex flex-col gap-y-4 my-8">
        <h1 className="text-2xl font-semibold text-white">
          Comments({data.length})
        </h1>
      </div>
      <Separator className="my-4" />
      {data.map((comment) => (
        <div key={comment.id} className=" p-4 rounded shadow mb-4">
          <div className="flex items-center mb-2 gap-x-2">
            <Avatar>
              <AvatarImage src={`${comment.user.avatar}`} alt="user avatar" />
            </Avatar>
            <div>
              <p className="font-semibold text-gray-100">
                {comment.user.nickname}
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(comment.createdAt).toDateString()}
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
