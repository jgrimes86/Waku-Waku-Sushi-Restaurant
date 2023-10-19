import ReservationItem from "./ReservationItem"

function ReservationList({reservations, clickOnReservation, selectedReservation}) {

    const sortedAlphabetically = reservations.sort((res1, res2) => {
        if (res1.name.toLowerCase() < res2.name.toLowerCase()) {
            return -1
        } else if (res1.name.toLowerCase() > res2.name.toLowerCase()) {
            return 1
        }
    })

    const reservationList = sortedAlphabetically.map(res => {
        return <ReservationItem key={res.id} res={res} clickOnReservation={clickOnReservation} selectedReservation={selectedReservation} />;
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