import ProfileAvatar from "../assets/profile_avatar.png";
function Avatar() {
  return (
    <a href="../user-profile/index.html">
      <img
        src={ProfileAvatar}
        alt="Profile Picture"
        className="sticky w-9 rounded-full"
      />
    </a>
  );
}

export default Avatar;
