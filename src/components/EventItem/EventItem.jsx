import PropTypes from 'prop-types';
import { FcClock, FcVoicePresentation, FcOvertime, FcGlobe, FcBookmark } from "react-icons/fc";
import { EventInfo, EventName, Icon } from './EventItem.styled';




export const EventItem = ({ name, location, speaker, start, finish, type }) => {
    const date = new Date(start).toDateString();
    const startTime = new Date(start);
    const endTime = new Date(finish);
    const timeDifference = endTime - startTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    return <>
        <EventName>{name}</EventName>
        <EventInfo><Icon><FcGlobe/></Icon>{location}</EventInfo>
        <EventInfo><Icon><FcVoicePresentation/></Icon>{speaker}</EventInfo>
        <EventInfo><Icon><FcOvertime/></Icon>{date }</EventInfo>
        <EventInfo> <Icon><FcClock /></Icon>{hours ? `${hours} hours` : ''} {minutes ? `${minutes} minutes` : ''}</EventInfo>
        <EventInfo><Icon><FcBookmark/></Icon>{type}</EventInfo>
    </>
}

EventItem.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    start: PropTypes.string,
    finish: PropTypes.string,
    type: PropTypes.string
     
}