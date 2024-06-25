import { useState } from "react";
import { Button } from "react-bootstrap";

function Image() {
  const [data, setData] = useState();

  const loader = async () => {
    const response = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/random"
    );
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data && (
        <>
          <h1>{data.sentence}</h1>
          <p>{data.character.name}</p>
        </>
      )}

      <Button onClick={loader}>Load</Button>
    </div>
  );
}

export default Image;
