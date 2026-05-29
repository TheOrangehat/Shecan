import './style/Photos.css';

function Photos({ images }) {
const randomImages = images.slice(0, 3);
  const classes = [
    "carsolimg left-37.5 top-4 opacity-75",
    "carsolimg crlimg z-2",
    "carsolimg right-37.5 top-4 opacity-75",
  ];

  return (
    <div className="carsolparent flex w-fit">
      {randomImages.map((img, index) => (
        <div
          key={img.id}
          className={classes[index]}
          style={{
            backgroundImage: `url(${img.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}

export default Photos;