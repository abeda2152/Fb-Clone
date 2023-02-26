import { useReducer, useEffect } from "react";
import { photosReducer } from "../../reducers/reducers";
import axios from "axios";

export default function Photos({ username, token }) {
  const [{ loading, error, photos }, dispatch] = useReducer(photosReducer, {
    loading: false,
    profile: {},
    error: "",
  });

  const getPhotos = async () => {
    try {
      dispatch({
        type: "PHOTOS_REQUEST",
      });
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/listImages`,
        { path, sort, max },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: "PHOTOS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "PHOTOS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  useEffect(() => {
    getPhotos();
  }, [username]);
  const path = `${username}/*`;
  const max = 30;
  const sort = "desc";

  console.log(photos);
  return (
    <div className="profile_card">
      <div className="profile_card_header">
        Photos
        <div className="profile_header_link hover1">See all photos</div>
      </div>
      {photos ? (
        <>
          <div className="photos_card_count">
            {photos.total_count === 0
              ? ""
              : photos.total_count === 1
              ? "1 Photo"
              : `${photos.total_count} Photos`}
          </div>
          <div className="profile_card_grid">
            {photos.resources &&
              photos.resources.slice(0, 9).map((img) => (
                <div className="profile_photo_card" key={img.public_id}>
                  <img src={img.secure_url} alt="" />
                </div>
              ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
