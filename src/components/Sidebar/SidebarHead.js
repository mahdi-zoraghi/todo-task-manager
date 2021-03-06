import imageProfile from "../../assets/profile.jpg"

const SidebarHead = () => {
  return (
    <div className="sidebar__sidebarHead">
      <main>
        <img src={imageProfile} alt="profile" />
        <div>
          <span>Good morning,</span>
          <span>Mahdi!</span>
        </div>
      </main>
    </div>
  )
}

export default SidebarHead
