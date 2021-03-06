import "./styles.css";
import axios from "axios";
import { useState } from "react";

import ArtistItem from "./components/ArtistItem";
import MoreButton from "./components/MoreButton";
import InputForm from "./components/InputForm";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default function App(props) {
  const [data, setData] = useState([]);
  const [dataLength, setDataLength] = useState(0);
  const [limit, setLimit] = useState(5);
  const [inputArtist, setInputArtist] = useState("");
  const [spinning, setSpinning] = useState(false);
  const fetchData = async (artist) => {
    setSpinning(true);
    setInputArtist(artist);
    const res = await axios.get(
      `https://itunes.apple.com/search?term=${artist}&media=music&entity=album&attribute=artistTerm&limit=200`
    );

    setDataLength(res.data.results.length);
    setData(res.data.results);
  };

  const displayInfo = () => {
    return data
      .slice(0, limit)
      .reverse()
      .map((item, i) => {
        return (
          <div key={item.artistId + i} className='artist-card'>
            <ArtistItem
              image={item.artworkUrl100}
              artistName={item.artistName}
              collectionName={item.collectionName}
            />
          </div>
        );
      });
  };

  const represhData = () => {
    setLimit(5);
    setData([]);
  };

  return (
    <div className='App'>
      <InputForm seachTerm={fetchData} represhData={represhData} />

      {dataLength ? (
        <Header dataLength={dataLength} inputArtist={inputArtist} />
      ) : null}
      {dataLength > 5 && dataLength - limit > 4 ? (
        <MoreButton
          displayInfo={displayInfo}
          setLimit={setLimit}
          limit={limit}
        />
      ) : null}
      {!data.length && spinning ? <Spinner /> : null}
      <div className='section-list'> {displayInfo()}</div>
    </div>
  );
}
