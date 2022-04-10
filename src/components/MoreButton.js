const MoreButton = (props) => {
  return (
    <button
      class="more"
      onClick={() => {
        props.setLimit((props.limit += 5));
        props.displayInfo();
      }}
    >
      Load more
    </button>
  );
};
export default MoreButton;
