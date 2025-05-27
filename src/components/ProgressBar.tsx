type Props = {
  range: number;
};

const getRangeColor = (range: number): string => {
  if (range <= 25) return 'bg-red-500';
  if (range <= 50) return 'bg-orange-400';
  if (range <= 75) return 'bg-lime-400';
  return 'bg-green-600';
};

export const ProgressBar = ({ range }: Props) => {
  return (
    <div className="w-full">
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getRangeColor(range)}`}
          style={{ width: `${range}%` }}
        ></div>
      </div>
    </div>
  );
};
