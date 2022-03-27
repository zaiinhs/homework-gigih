interface Props{
  url: string;
  title: string;
}

const Images = ({url, title}: Props) => {
  return (
    <>
      <img
        style={{ borderRadius: "50%", marginRight: "10px", width: "100px" }}
        src={url}
        alt={title}
      />
    </>
  );
};

export default Images;
