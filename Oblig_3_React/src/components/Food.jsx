

export default function Food(props) {
    const {food} = props;
    return(
        <>
        <ul>
        {food.map( (item) => (
            <li key={item}>
                <p>{item}</p>
            </li>
         ) )}
        </ul>
        </>
    )

}