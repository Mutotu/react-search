const ErrorMessage = (props) => {
  return (
    <div>
      {props.inputArtist.length < 3 || props.input === "" ? (
        <p>Please check your spelling</p>
      ) : null}
    </div>
  );
};

export default ErrorMessage;
