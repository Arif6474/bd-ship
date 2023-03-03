import React, { useEffect, useState } from 'react'
import './Members.css'
import download from '../../../assets/images/Icons and Logos/fi_download.svg'
import company from '../../../assets/images/companyImage.svg'
import location from '../../../assets/images/Icons and Logos/u_location-pin-alt.svg'
import phone from '../../../assets/images/Icons and Logos/fi_phone-call.svg'
import email from '../../../assets/images/Icons and Logos/fi_mail.svg'
import ProudMember from './ProudMember/ProudMember'
import MemberBanner from './MemberBanner/MemberBanner'
import { IMAGE_URL, MEMBERSHIP_TYPE_API, MEMBERS_API } from '../../../Utilities/APIs'
import axios from 'axios'
function Members() {
    const [membershipTypes, setMembershipTypes] = useState([]);
    useEffect(() => {
       const getMembershipTypes = async() =>{
            const { data } = await axios.get(MEMBERSHIP_TYPE_API)
            setMembershipTypes(data)
        }
        getMembershipTypes()
    }, [])
    const [members, setmembers] = useState([]);
    useEffect(() => {
       const getMembers = async() =>{
            const { data } = await axios.get(MEMBERS_API)
            setmembers(data)
        }
        getMembers()
    }, [])
  return (
    <div>
        <MemberBanner/>
    <div className="container memberDetails">
        <div className="members">
            <div className="member-title">
                <h1 className="membersTitle">Our Members</h1>
            </div>
            <div className="member-search">
                <div className="member-select">
                    <div className="member-search-input">
                        <input type="email" className="form-control searchMember" placeholder="Search Members"/>
                    </div>
                    <div className="select-member">
                        <select className="form-select">
                        <option >Select Member Type</option>
                         
                        {
                        membershipTypes?.map(membershipType => 
                            <option Key={membershipType._id}>{membershipType.name}</option>
                            )
                        }
                            
                        </select>
                    <div className="download">
                        <button className="btn btn-download"><img src={download}
                                alt=""/></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="memberItems">
            <div className="member-item">
                {
                    members?.map(member => 
                        <div className="memeberItem" key={member._id}>
                            <div className="member-info">
                                <div className="companyNameImg">
                                    <img src={company} alt=""/>
                                    <h3>ABC Shipping Lines Ltd.</h3>
                                    <h6>Ordinary Member</h6>
                                </div>
                            </div>
                            <div className="member-info">
                                <div className="memberAddress">
                                    <div>
                                        <img src={location} alt=""/>
                                    </div>
                                    <div>
                                    {member.address}
                                    </div>
                                </div>
                                <div className="memberAddress">
                                    <div>
                                        <img src={phone} alt=""/>
                                    </div>
                                    <div>
                                    {member.contact}</div>
                                </div>
                                <div className="memberAddress">
                                    <div>
                                        <img src={email} alt=""/>
                                    </div>
                                    <div>
                                    {member.mail}</div>
                                </div>
                            </div>
                            <div className="member-info">
                                <div className="memberNameImg">
                                    <img src={IMAGE_URL + member.image} alt=""/>
                                    <h3>{member.name}</h3>
                                    <h6>Director</h6>
                                </div>
                            </div>
                        </div>
                      
                        )
                }
                
               
                
            </div>
        </div>
    </div>
    <ProudMember/>
    </div>
  )
}

export default Members