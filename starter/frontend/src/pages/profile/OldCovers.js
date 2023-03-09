import { useRef } from "react";
import { useSelector } from "react-redux";
import useClickOutside from "../../helpers/clickOutside";

export default function OldCovers({ photos, setCoverPicture, setShow }) {
  const { user } = useSelector((state) => ({ ...state }));
  const menu = useRef(null);

  useClickOutside(menu, () => setShow(false));

  return (
    <div className="blur">
      <div className="postBox selectCoverBox" ref={menu}>
        <div className="box_header">
          <div className="small_circle" onClick={() => setShow(false)}>
            <i className="exit_icon"></i>
          </div>
          <div className="old_pictures_wrap scrollbar">
            <div className="old_pictures">
              {photos &&
                photos
                  .filter(
                    (img) => img.folder === `${user.username}/cover_pictures`
                  )
                  .map((photo) => (
                    <img
                      src={photo.secure_url}
                      key={photo.public_id}
                      alt=""
                      onClick={() => {
                        setCoverPicture(photo.secure_url);
                        setShow(false);
                      }}
                    />
                  ))}
            </div>
            <div className="old_pictures">
              {photos &&
                photos
                  .filter(
                    (img) => img.folder !== `${user.username}/post_images`
                  )
                  .map((photo) => (
                    <img
                      src={photo.secure_url}
                      key={photo.public_id}
                      alt=""
                      onClick={() => {
                        setCoverPicture(photo.secure_url);
                        setShow(false);
                      }}
                    />
                  ))}
            </div>
          </div>
          <span>Select photo</span>
        </div>
        <div className="selectCoverBox_links">
          <div className="selectCoverBox_link">Recent Photos</div>
          <div className="selectCoverBox_link">Photo Albums</div>
        </div>
      </div>
    </div>
  );
}
