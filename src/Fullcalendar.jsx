import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const events = [
    {
        id: 'a',
        title: 'my event 1',
        status: 1,
        start: '2024-04-16'
    },
    { 
        id: 'b',
        status: 1,
        title: 'my event 2',
        start: '2024-04-09'
    },
    { 
        id: 'c',
        status: 0,
        title: 'my event 3',
        start: '2024-04-19'
    },
    { 
        id: 'c',
        status: 1,
        title: 'my event 4',
        start: '2024-04-19'
    },
    { 
        id: 'c',
        status: 1,
        title: 'my event 5',
        start: '2024-04-19'
    },
    { 
        id: 'c',
        status: 0,
        title: 'my event 6',
        start: '2024-04-22'
    },
    { 
        id: 'c',
        status: 0,
        title: 'my event 7',
        start: '2024-04-23'
    },
    { 
        id: 'd',
        status: 0,
        title: 'my event 8',
        start: '2024-04-20'
    },
    { 
        id: 'e',
        status: 0,
        title: 'my event 9',
        start: '2024-04-19' 
    }
]
//events.setAllDay( false, [ settings ] )

let randNum = parseInt(100*Math.random());

export function Fullcalendar() {
    const [visibility, setVisibility] = useState(false);
    const [eventType, setEventType] = useState('');
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const closeModal = () =>{
        setVisibility(false)
    }




    return (
        <>
            <Modal 
                show={visibility} 
                eventType={eventType}
                eventTitle={eventTitle} 
                eventDate={eventDate}
                closeModal={closeModal} 
            >
                
            </Modal>

            <div style={{width:954, height:600, backgroundColor:'#45c572'}}>
                <h3>
                    Hello Mike {randNum}, 
                </h3>

                <div style={{width:950, height:400, margin:2, backgroundColor:'#FFF'}}>
                    <FullCalendar
                        plugins={[timeGridPlugin]}
                        initialView='timeGridWeek'
                        weekends={true}
                        events={events}
                        eventContent={(eventInfo)=>{
                            return (
                                <>
                                    <div
                                        className='eventTitle' 
                                        style={{backgroundColor: eventInfo.event.extendedProps.status ? '#45c572':'#0095ff'}}
                                        onClick={()=>{
                                            let dtd = eventInfo.event.start.getFullYear()+"-"+('0' + (eventInfo.event.start.getMonth()+1)).slice(-2)+"-"+('0' + eventInfo.event.start.getDate()).slice(-2);
                                            setEventType('Edit Event')
                                            setEventTitle(eventInfo.event.title)
                                            setEventDate(dtd)
                                            setVisibility(true);
                                        }}
                                    >
                                        <i>{eventInfo.event.title}</i>
                                    </div>
                                    <div
                                        className='deleteEvent' 
                                        onClick={()=>{
                                            let dtd = eventInfo.event.start.getFullYear()+"-"+('0' + (eventInfo.event.start.getMonth()+1)).slice(-2)+"-"+('0' + eventInfo.event.start.getDate()).slice(-2);
                                            setEventType('Delete Event')
                                            setEventTitle(eventInfo.event.title)
                                            setEventDate(dtd)
                                            setVisibility(true);
                                        }}
                                    >
                                        <i>X</i>
                                    </div>
                                    
                                </>
                            )
                        }}
                        editable={true}
                        dayCellContent={(val)=>{

                            if(val.isPast){
                                return '';
                            }

                            return (
                                <>
                                    <button 
                                        className='btn' 
                                        onClick={(event)=>{
                                            let dtd = val.date.getFullYear()+"-"+('0' + (val.date.getMonth()+1)).slice(-2)+"-"+('0' + val.date.getDate()).slice(-2);
                                            setEventType('Add Event')
                                            setEventTitle('');
                                            setEventDate(dtd)
                                            setVisibility(true);
                                        }} 
                                    >
                                        Add Item
                                    </button>
                                </>)
                        }}
                    />
                </div>
            </div>
        </>
    )
}


const Modal = ({ closeModal, children, show, eventType, eventTitle, eventDate }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <p>{eventType}</p>
                <table className='modalFrm'>
                    <tr>
                        <td width="30%">Date : </td>
                        <td style={{textAlign:"left"}}>{eventDate}</td>
                    </tr>
                    <tr>
                        <td>Title : </td>
                        <td><input value={eventTitle} style={{width:"100%"}} /></td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td style={{textAlign:"left"}}>
                            <input type='checkbox' />
                        </td>
                    </tr>
                </table>
                <button type="button" className='modalSaveBtn' onClick={()=>{closeModal(false)}} >
                    Save 
                </button>
                <button type="button" className='modalCloseBtn' onClick={()=>{closeModal(false)}} >
                    Close 
                </button>
                
            </section>
        </div>
    );
  };