import React from "react";
// import logo from "../logo.svg";
// import landingPage1 from "./stock/landingpage1.png";
import "./Style/about.css";
import page2i from "./stock/page2.i.jpg";
import page2ii from "./stock/page2.ii.jpg";
import page2iii from "./stock/page2.iii.jpg";
import page2iv from "./stock/page2.iv.jpg";

const About = () => {
    return (
        <section className="HomePage2">
            <div className="page2RightSide">
                <img src={page2i} id="page2i" alt="" />
                <img src={page2ii} id="page2ii" alt="" />
                <img src={page2iii} id="page2iii" alt="" />
                <img src={page2iv} id="page2iv" alt="" />
            </div>
            <div className="page2LeftSide">
                <h1 class="about">About Us</h1>
                <h1 class="head">We are specialist in</h1>
                <div class="box">
                    <img class="pt-img41 animate-wave" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAABFFBMVEUAAADxdzL/49P/49Pwcin/49P/5NTxdzLxdzL/49P/49P/49L/49P/49P/49P/49PxeDP/49P/49P/49P/5NX/49P/5NT/49P/49P/5dXxdC3/4tH/49P/49PxdS//49P/49P/49PvaRz/49PwbyX/49P/9Oz/+fP//fvxdzLwaR3vaBv/49P/6dv/49P/49P/+PLzhUb/////69/vaR3/6dz0jlTxdS/zik7yfjz/+/f/6Nv6v53/9/HxeTX7ya37yq7/6Nv/9e34rYLvZxv0kFf+3MnxdzHxdzLxeDPxeDPxdzL/49PxdzL0j1X0jFL/6dz6wJ//8un0kFfyfj3zh0rwcyz6w6TwbybvayD8zrTtWQXBD1zNAAAATHRSTlMA9g8Hz2s1D8/xQVLXsK2UzwsGBBG6I7fels8oVSrPaY1P7z/QIe9nIV9f9eFs8tDXx0Ao/PHx6NbIsKyTU0n1y7CqaVdKQdWWs2JC7n5jhAAAAhZJREFUWMPtl3lPwjAYxiuMUUCg4oFMnaCIN96c4q2gFgYCnt//e7hSEJPZZQtNA6bPP++b/Uie0PbpAaQ46BlO8VG1xjZ5qlchRLpiSkcQaaSBpkjVkAtSn2Kb7NQBHyEbk/t3Px8TZWCyEY3O9Ro14qNfNq92eyZziUSflPcp2S+rwAUZmsxjnCDVu4hxkDTrL621nknUQjDe8zomzQeRJvbDZSG+iAocEzJcoiaevYQ5mUAbk20BJox/wjmMF6+cTLQfk2CQ1lhogTZb56f+v8lCKAZckOHEJzH2kTobwYEV0ixl3mhOVi0kgMOzjsnZ0tDEzNM8qTMY42XShAZhjFuI2cw4Js3Q0CQ1Pa3SPAXCHlI9N5c0jKqFhAM+4Jhce37lxOvtN57Bl9sPP4OQxjGxD+MdryWsiwgjkomXiZeJl4nnbCJkuARMvJAlLCqM1m0ly9xWsszNI2u7rQjZIAVt9UztTFQYhRy/cFxev6M95+TrV75+Jz+M8i4s78LyLiyPX86Jh7aJp83xMaCqbPVJBbgiyCbxra8qglA7ajSONAh1VDByRbPRijmjgHQXpM5OfPPTUCBE6U673Umbbumu0cgrCCn5htFNuyGPNWbiw2ebgOjk8PCEnseZEv1tKeOasNPLh0iNt0RMfIp9APEgVIvso5QHoUqyX7I8CJUaj2/QcTtIxkiNJQ9S9Co+Mvln+gYUWeKKD84yMgAAAABJRU5ErkJggg==" alt=""></img>
                </div>
                <p>
                    We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.
                </p>
                <div class="btns">
                    <div class="topbtns">
                        <button class="btn-1">Emergency Help</button>
                        <button class="btn-1">Qualified Doctors</button>
                    </div>
                    <div class="btmbtns">
                        <button class="btn-1">Best Professionals</button>
                        <button class="btn-1">Medical Treatment</button>
                    </div>
                </div>
                <div class="box">
                    <img class="pt-img4 animate-wave" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAABFFBMVEUAAADxdzL/49P/49Pwcin/49P/5NTxdzLxdzL/49P/49P/49L/49P/49P/49P/49PxeDP/49P/49P/49P/5NX/49P/5NT/49P/49P/5dXxdC3/4tH/49P/49PxdS//49P/49P/49PvaRz/49PwbyX/49P/9Oz/+fP//fvxdzLwaR3vaBv/49P/6dv/49P/49P/+PLzhUb/////69/vaR3/6dz0jlTxdS/zik7yfjz/+/f/6Nv6v53/9/HxeTX7ya37yq7/6Nv/9e34rYLvZxv0kFf+3MnxdzHxdzLxeDPxeDPxdzL/49PxdzL0j1X0jFL/6dz6wJ//8un0kFfyfj3zh0rwcyz6w6TwbybvayD8zrTtWQXBD1zNAAAATHRSTlMA9g8Hz2s1D8/xQVLXsK2UzwsGBBG6I7fels8oVSrPaY1P7z/QIe9nIV9f9eFs8tDXx0Ao/PHx6NbIsKyTU0n1y7CqaVdKQdWWs2JC7n5jhAAAAhZJREFUWMPtl3lPwjAYxiuMUUCg4oFMnaCIN96c4q2gFgYCnt//e7hSEJPZZQtNA6bPP++b/Uie0PbpAaQ46BlO8VG1xjZ5qlchRLpiSkcQaaSBpkjVkAtSn2Kb7NQBHyEbk/t3Px8TZWCyEY3O9Ro14qNfNq92eyZziUSflPcp2S+rwAUZmsxjnCDVu4hxkDTrL621nknUQjDe8zomzQeRJvbDZSG+iAocEzJcoiaevYQ5mUAbk20BJox/wjmMF6+cTLQfk2CQ1lhogTZb56f+v8lCKAZckOHEJzH2kTobwYEV0ixl3mhOVi0kgMOzjsnZ0tDEzNM8qTMY42XShAZhjFuI2cw4Js3Q0CQ1Pa3SPAXCHlI9N5c0jKqFhAM+4Jhce37lxOvtN57Bl9sPP4OQxjGxD+MdryWsiwgjkomXiZeJl4nnbCJkuARMvJAlLCqM1m0ly9xWsszNI2u7rQjZIAVt9UztTFQYhRy/cFxev6M95+TrV75+Jz+M8i4s78LyLiyPX86Jh7aJp83xMaCqbPVJBbgiyCbxra8qglA7ajSONAh1VDByRbPRijmjgHQXpM5OfPPTUCBE6U673Umbbumu0cgrCCn5htFNuyGPNWbiw2ebgOjk8PCEnseZEv1tKeOasNPLh0iNt0RMfIp9APEgVIvso5QHoUqyX7I8CJUaj2/QcTtIxkiNJQ9S9Co+Mvln+gYUWeKKD84yMgAAAABJRU5ErkJggg==" alt=""></img>
                </div>
            </div>
        </section>
    );
};

export default About;