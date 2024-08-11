type Props = {
  title: string;
  onClick: () => void;
  widthFull?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  stars?: number;
};

function PrimaryButton({
  title,
  onClick,
  widthFull = false,
  disabled,
  loading,
  className = "",
  stars = 0,
}: Props) {
  const renderStars = () => {
    const starsArray = [];
    for (let i = 0; i < stars; i++) {
      starsArray.push(
        <img key={i} src="star-icon.svg" width="20" alt="star" />
      );
    }
    return starsArray;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled ?? loading}
      className={`${
        widthFull ? "w-full" : "px-4"
      } ${className} font-bold bg-colors-secondary rounded-2xl text-white py-3 flex justify-center items-center`}
    >
      {loading ? <>Loading...</> : title}
      <span className="flex ml-2">{renderStars()}</span>
    </button>
  );
}

export default PrimaryButton;
