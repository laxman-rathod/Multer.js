import React, { useEffect, useState } from "react";
import axios from "axios";

const BookUpload = () => {
  const [file, setFile] = useState();
  const [Image, setImage] = useState(null);

  const handleUpload = (e) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://localhost:5000/upload", formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/getImage")
      .then((res) => setImage(res.data[0].image))
      .catch((err) => console.log(err));
  }, []);

  console.log("image retrieved:", Image);

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      <img src={`http://localhost:5000/images/${Image}`} alt="img" />
    </div>
  );
};

export default BookUpload;
