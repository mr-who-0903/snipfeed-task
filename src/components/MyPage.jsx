import React from 'react'
import '../css/MyPage.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Avatar from "@material-ui/core/Avatar";

const MyPage = () => {
    return (
        <div className="myPage">
            <Tabs>
                <TabList>
                <Tab>Links</Tab>
                <Tab>Design</Tab>
                </TabList>

                <div style={{display:'flex'}}>
                <div className="left-cont">
                    <TabPanel style={{display:'flex', flexDirection:'column'}}>

                        <div className="box1">
                            <h4 style={{fontWeight:"600", margin:'0'}}>Add Block</h4>

                            <ul className="box1-ul">
                                <li>
                                    <div className="list-item">
                                        <img style={{backgroundColor:'#dfdfff'}} src="https://creators.snipfeed.app/icons/my-page/add-block/custom-link.svg" />
                                        <p>Custom Link</p>
                                    </div>
                                </li>
                                <li >
                                    <div className="list-item li">
                                        <img style={{backgroundColor:"#d5ffe0"}} src="https://creators.snipfeed.app/icons/my-page/add-block/mailing-list.svg" />
                                        <p>Mailing List</p>
                                    </div>
                                </li>    
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#d9fbff'}} src="https://creators.snipfeed.app/icons/my-page/add-block/social.svg" />
                                        <p>Link your Socials</p>
                                    </div>
                                </li>    
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#ffcaca'}} src="https://creators.snipfeed.app/icons/my-page/add-block/text.svg" />
                                        <p>Text</p>
                                    </div>
                                </li>    
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#dbe3ff'}} src="https://creators.snipfeed.app/icons/my-page/add-block/music.svg" />
                                        <p>Music/Podcast preview</p>
                                    </div>
                                </li> 
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#ffcaca'}} src="https://creators.snipfeed.app/icons/my-page/add-block/video.svg" />
                                        <p>Video Preview</p>
                                    </div>
                                </li> 
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#d5ffe0'}} src="https://creators.snipfeed.app/icons/my-page/add-block/product.svg" />
                                        <p>Produce</p>
                                    </div>
                                </li>         
                            </ul>  

                            <h4 style={{fontWeight:"600", margin:'0'}}>Monetizable Blocks</h4> 
                            <ul className="box1-ul">
                                <li>
                                    <div className="list-item">
                                        <img style={{backgroundColor:'#ffcaca'}} src="https://creators.snipfeed.app/icons/my-page/add-block/live-stream.svg" />
                                        <p>Livestreams</p>
                                    </div>
                                </li>
                                <li >
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#ffebbe'}} src="https://creators.snipfeed.app/icons/my-page/add-block/shoutout.svg" />
                                        <p>Shoutout/Q&A's</p>
                                    </div>
                                </li>    
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#dfdfff'}} src="https://creators.snipfeed.app/icons/my-page/add-block/content.svg" />
                                        <p>Exclusive Content</p>
                                    </div>
                                </li>    
                                <li>
                                    <div className="list-item li">
                                        <img style={{backgroundColor:'#ffc9c9'}} src="https://creators.snipfeed.app/icons/my-page/add-block/tip.svg" />
                                        <p>Tipping</p>
                                    </div>
                                </li>    
                            </ul>                       

                        </div>

                        <div className="box2">
                            <span className="box1-span">Page Header</span>

                            <div>
                                <h4 style={{fontWeight:"500", marginBottom:"3px"}}>Add Your Bio</h4>
                                <p style={{margin:"0", fontSize:"12px"}}>Profile Pic, Name and Bio</p>
                            </div>
                        </div>                        

                        

                    </TabPanel>
                    <TabPanel>
                    <h2>No Design templates yet</h2>
                    </TabPanel>
                </div>

                <div className="right-cont">
                    <div className="mobile">
                        <Avatar/>
                        <h1 style={{fontWeight:'500'}}>@ritikjain</h1>
                    </div>
                </div>
                </div>

            </Tabs>
        </div>
   
    )
}

export default MyPage
