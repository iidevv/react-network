import React from "react"
import Preloader from "../../common/Preloader"

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className="pb-8">
                <img className="rounded-xl shadow-lg" src="https://learnfromben.com/wp-content/uploads/2018/06/Advanced-Landscape-Photography-video-course-Benjamin-Jaworskyj-horizontal-panorama.jpg" alt="wallpapper" />
                <p className="py-4 text-4xl uppercase">{props.profile.fullName}</p>
        </div>
    )
}

export default ProfileInfo