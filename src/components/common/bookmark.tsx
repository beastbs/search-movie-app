interface BookmarkProps {
  isBookmark: boolean;
  onSave: () => void;
}

const Bookmark = ({ isBookmark, onSave }: BookmarkProps) => {
  return (
    <span>
      <i
        className={`bi bi-bookmark${isBookmark ? "-fill" : ""} fs-2`}
        role="button"
        onClick={onSave}
      ></i>
    </span>
  );
};

export default Bookmark;
