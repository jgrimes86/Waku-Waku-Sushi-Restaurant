import ReservationItem from "./ReservationItem"

function ReservationList({reservations, clickOnReservation, selectedReservation, handleChangeReservation}) {

    const reservationList = reservations.map(res => {
        return <ReservationItem key={res.id} res={res} clickOnReservation={clickOnReservation} selectedReservation={selectedReservation} handleChangeReservation={handleChangeReservation} />;
})

    return (
        <div id="reservation-filter" >
            <div id="reservation-selection">
                <h4>Click on a Reservation to Edit:</h4>
                <ul id="reservation-list">
                    {reservationList}
                </ul>
            </div>
        </div>
    )
}

export default ReservationList;