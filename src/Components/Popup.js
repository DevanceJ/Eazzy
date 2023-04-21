import { useGlobalContext } from '../context'
const Popup = () => {
    const { setShowPopup } = useGlobalContext()
    const close = () => {
        setShowPopup(false);
    }
    return (
        <div className="popup">
            <div className="innerPop">
                <form className='myForm'>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="phone">Phone number:</label>
                    <input type="tel" id="phone" name="phone" required />

                    <label for="date">Date:</label>
                    <input type="date" id="date" name="date" required />

                    <label for="rating">Rating:</label>
                    <input
                        type="range"
                        id="rating"
                        name="rating"
                        min={0}
                        max={5}
                    />
                    <span id="rating-value"></span>
                </form>
                <button onClick={close}>Save</button>
            </div>
        </div>
    )
}

export default Popup