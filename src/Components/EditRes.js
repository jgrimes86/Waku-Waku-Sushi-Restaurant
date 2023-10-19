
function EditRes({handleSubmit, editResForm, handleChange, clearFormContent, deleteReservation}) {
    return (
        <>
            <form id="res-edit" onSubmit={handleSubmit}>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input 
                    name="phoneNumber" 
                    type="text" 
                    value={editResForm.phoneNumber} 
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor="date">Day: </label>
                <select 
                    className="dropdown" 
                    name="date" 
                    value={editResForm.date} 
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                </select>
                <br />
                <label htmlFor="time">Time: </label>
                <select 
                    className="dropdown" 
                    name="time" 
                    value={editResForm.time} 
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="7:30">7:30</option>
                    <option value="9:00">9:00</option>
                </select>
                <br />
                <label htmlFor="guests">Guests: </label>
                <select 
                    className="dropdown" 
                    name="guests" 
                    value={editResForm.guests} 
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <br/>
                <label htmlFor="table">Table: </label>
                <select 
                    className="dropdown" 
                    name="table" 
                    value={editResForm.table} 
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <br/>
                <input type="submit" value="Change Reservation" />
                <button onClick={clearFormContent}>Clear Changes</button>
            </form>
                <button onClick={deleteReservation}>Delete Reservation</button>
        </>
    )

}

export default EditRes