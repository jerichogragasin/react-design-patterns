export const LargePersonListItem = ({person}) => {
    const {name, age, hairColor, hobbies} = person;
    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Hobbies</p>
            <ul>
                {
                    hobbies.map(hobby => 
                        <li key={hobby}>{hobby}</li>
                    )
                }
            </ul>
        </>
    );
};


export default LargePersonListItem;