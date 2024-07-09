// feedback.tsx
import { Avatar } from "@mui/material";
import Rating from "@mui/material/Rating";

type SingleFeedbackProps = {
  name: string;
  comment: string;
  img: string;
  rating: number;
};

const SingleFeedback = ({ name, comment, img, rating }: SingleFeedbackProps) => {
  return (
    <div className="flex flex-col bg-slate-300 rounded-xl p-6 space-y-2 shadow-sm min-h-[170px] sm:min-h-[160px]">
      <div className="flex flex-row items-center gap-4">
        <Avatar alt={name} src={img} sx={{ width: "50px", height: "50px" }} />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-medium">{name}</p>
          <div className="flex flex-row items-center">
            <p className="opacity-50 text-sm mr-1 font-semibold">({rating})</p>
            <Rating
              name={`${name}-rating`}
              value={rating}
              precision={0.5}
              size="small"
              readOnly
            />
          </div>
        </div>
      </div>

      <p className="text-sm">{comment}</p>
    </div>
  );
};

export default SingleFeedback;
