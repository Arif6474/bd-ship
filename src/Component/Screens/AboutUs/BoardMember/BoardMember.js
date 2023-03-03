import axios from 'axios';
import React, { useEffect, useState } from 'react'
import user from '../../../../assets/images/boardMember/Munir Sadique  .png'
import { BOARD_OF_DIRECTORS_API, IMAGE_URL } from '../../../../Utilities/APIs';
import './BoardMember.css'
function BoardMember() {
    const [boardOfDirectors, setBoardOfDirectors] = useState([]);
    // console.log(boardOfDirectors);
    useEffect(() => {
        const getBoardOfDirectors = async () => {
            const { data } = await axios.get(BOARD_OF_DIRECTORS_API)
            setBoardOfDirectors(data)
        }
        getBoardOfDirectors()
    }, [])
  return (
    <div className="container boardMember">
    <div className="reverent">
        <div className="reverent-board-member">
            <h1>Reverent
                Board Members</h1>
        </div>
    </div>

    <div className="board-members">
        <div className="board-chairman">
            {
                boardOfDirectors?.map(boardOfDirector => 
            <div className="chairmen" key={boardOfDirector._id}>
                <img src={IMAGE_URL + boardOfDirector.image} alt=""/>
                <h2>{boardOfDirector.name}</h2>
                <h6>{boardOfDirector.designation}</h6>
            </div>
                    )
            }
        </div>
        <div className="board-chairman">
            <div className="all-members">
                <div className="revere-member membersPro">
                    <img src={user} alt=""/>
                    <h3>Mohamadul Haque </h3>
                    <h6>Vice-Chairman </h6>
                </div>
                <div className="revere-member membersPro">
                    <img src={user} alt=""/>
                    <h3>Mohamadul Haque </h3>
                    <h6>Vice-Chairman </h6>
                </div>
                <div className="revere-member membersPro">
                    <img src={user} alt=""/>
                    <h3>Mohamadul Haque </h3>
                    <h6>Vice-Chairman </h6>
                </div>
                <div className="revere-member membersPro">
                    <img src={user} alt=""/>
                    <h3>Mohamadul Haque </h3>
                    <h6>Vice-Chairman </h6>
                </div>
                <div className="revere-member membersPro">
                    <img src={user} alt=""/>
                    <h3>Mohamadul Haque </h3>
                    <h6>Vice-Chairman </h6>
                </div>
                <div className="revere-member membersPro">
                    <img src={user} alt=""/>
                    <h3>Mohamadul Haque </h3>
                    <h6>Vice-Chairman </h6>
                </div>
             
              
            </div>
        </div>
    </div>
</div>


  )
}

export default BoardMember