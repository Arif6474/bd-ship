import React from 'react'
// import { useParams } from 'react-router-dom'
import ProudMember from '../Members/ProudMember/ProudMember'
import NewsEventBanner from './NewsEventBanner/NewsEventBanner'
import './NewsEventDetails.css'
import RelatedNews from './RelatedNews/RelatedNews'
function NewsEventDetails() {
    // const { id } = useParams();

  return (
   <div>
    <NewsEventBanner/>
    <div className='news-event'>
     <div className="newsDetailsContainer">
        <div className="news-event-content">
            <div className="news-event-details-content">
                <h6>20 October, 2021</h6>
                <h1>Call for action against Gulf of Guinea piracy gains support in Asia</h1>
                <p>The NextGEN (where "GEN" stands for "Green and Efficient Navigation") portal, an online collaborative
                    global ecosystem of maritime transport decarbonisation initiatives, has been launched by the
                    International Maritime Organization (IMO) and the Maritime and Port Authority of Singapore (MPA)
                    today. NextGEN - at https://nextgen.imo.org - aims to encourage information-sharing, create critical
                    networks and opportunities for collaboration, and facilitate capacity-building. By showcasing the
                    universe of maritime decarbonisation projects on a single platform, the NextGEN portal will serve as
                    a focal point and reference tool for both public and private stakeholders.

                    The NextGEN portal was launched on 27 September during the IMO-United Nations Environment Programme
                    (UNEP)-Norway Zero-and Low-Emission Innovation Forum. The three-day online global platform is aimed
                    at championing innovation to accelerate the maritime sector's transition to a zero or low-emission
                    future.

                    In 2018, the IMO adopted the Initial IMO Greenhouse (GHG) Strategy, which seeks to reduce GHG
                    emissions from international shipping by at least 50% by 2050 compared to 2008. Recognising that the
                    industry faces challenges reaching the ambitious decarbonisation targets with the current levels of
                    technological development in low and zero-carbon fuels, NextGEN was conceptualised as an initiative
                    to support the maritime sector's push towards the "next generation" of low and zero-carbon fuels and
                    technologies to meet the goals of the Initial Strategy.

                    To date, the NextGEN portal encompasses over 140 projects spanning over 500 partners, 13 fuel types,
                    and a diversity of regions including Africa, Asia, the Caribbean, Latin America, the Middle East and
                    the Pacific Islands. In particular, NextGEN spotlights global collaborative projects led by IMO and
                    the Maritime Technology Cooperation Centres, which support maritime decarbonisation in Small Island
                    Developing States and Least Developed Countries through technical assistance, technology transfer
                    and capacity-building.

                    In addition, NextGEN is bringing stakeholders together to identify the gaps and opportunities for
                    decarbonisation in the international shipping community. For example, Singapore and IMO had
                    co-organised the NextGEN Inaugural Meeting during the Singapore Maritime Week 2021, which was
                    attended by over seventy representatives from governments, industry, International Organisations and
                    academia.

                    Ms Quah Ley Hoon, Chief Executive, MPA, said, "No one can tackle decarbonisation alone. It needs to
                    be a global collective effort whereby we need to work together, across borders and sectors, to build
                    capacity, share best practices and ensure a level playing field for all. By bringing ideas and
                    stakeholders together, NextGEN builds on the key principle of inclusivity."

                    Mr Kitack Lim, Secretary-General, IMO, said, “The single biggest challenge we face is the battle
                    against global warming and climate change. We need more collaborative action to speed up research
                    into emission-cutting technology in the maritime sector and into zero- and low-carbon marine fuels.
                    Above all, we need to make sure we leave no one behind.”</p>
            </div>
        </div>
    </div>
    <RelatedNews/>
    <ProudMember/>
   </div>
   </div>

  )
}

export default NewsEventDetails