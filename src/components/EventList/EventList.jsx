import { EventItem } from "components/EventItem/EventItem"
import PropTypes from 'prop-types';
import { Event, EventsBoard, Title } from './EventList.styled';


export const EventList = ({ events }) => {
    return <>
        <Title>24th Core Worlds Coalition Conference</Title>
        <EventsBoard>
            {events.map(({ name, location, speaker, time: { start, end }, type }) => {
                return <Event key={name} type={type}>
                    <EventItem
                        name={name}
                        location={location}
                        speaker={speaker}
                        start={start}
                        finish={end}
                        type={type}
                    />
                </Event>
            })}
        </EventsBoard>
    </>
};

EventList.propTypes = {
    events: PropTypes.array
}

