export default function Logo({ imageUrl, description, width, height }) {
  return (
    <img
      src={imageUrl}
      alt={description}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></img>
  );
}
