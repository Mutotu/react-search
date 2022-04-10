const ArtistItem = (props) => {
  return (
    <div >
      <img src={props.image} alt={"Album"} />
      <p>{props.artistName}</p>
      <p>{props.collectionName}</p>
    </div>
  );
};

export default ArtistItem;
