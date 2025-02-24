import EventPage from '@/components/EventPage'
import React from 'react'

import HACK_ARENA from '../../../../public/asset/img/events/hour_of_code/hour_of_code_thumbnail.png'
import Photo1 from '../../../../public/asset/img/events/hour_of_code/hour_of_code1.jpg'
import Photo2 from '../../../../public/asset/img/events/hour_of_code/hour_of_code2.jpg'
import Photo3 from '../../../../public/asset/img/events/hour_of_code/hour_of_code3.jpg'
import Photo4 from '../../../../public/asset/img/events/hour_of_code/hour_of_code4.jpg'
import Photo5 from '../../../../public/asset/img/events/hour_of_code/hour_of_code5.jpg'
import Photo6 from '../../../../public/asset/img/events/hour_of_code/hour_of_code6.jpg'
import Photo7 from '../../../../public/asset/img/events/hour_of_code/hour_of_code7.jpg'
import Photo8 from '../../../../public/asset/img/events/hour_of_code/hour_of_code8.jpg'
import Photo9 from '../../../../public/asset/img/events/hour_of_code/hour_of_code9.jpg'

const HourOfCode2018 = () => {
    return (
        <main>
            <EventPage
                title={`Hour of Code 2018`}
                description={`
                <p>As a part of the ACM student chapter at Vignan's IIT, we organized the Hour of Code event on 07th Dec 2018. This event was dedicated to the global movement about programming and technology in the current world scenario.</p>
                `}
                thumbnail={HACK_ARENA}
                organizers={{
                    org1: {
                        name: "CSE Department",
                        link: "/team/dept-of-cse",
                        profile: "vignan_logo.png",
                    },
                }}
                event_location={{
                    location: "Vignan's Institute Of Information Technology",
                    city: "Visakhapatnam, Andhra Pradesh",
                    link: "https://www.google.com/maps/search/?api=1&query=Vignan%27s%20Institute%20Of%20Information%20Technology&query_place_id=ChIJh4CLQstoOToRZWqDQ4wZPqo",
                }}
                event_date="Friday, December 07 2018"
                event_time="01:30 AM - 02:30 PM"
                photo_gallary={{
                    p1: { Photo1 },
                    p2: { Photo2 },
                    p3: { Photo3 },
                    p4: { Photo4 },
                    p5: { Photo5 },
                    p6: { Photo6 },
                    p7: { Photo7 },
                    p8: { Photo8 },
                    p9: { Photo9 },
                }}
                registration_available={false}
            />
        </main>
    )
}

export default HourOfCode2018