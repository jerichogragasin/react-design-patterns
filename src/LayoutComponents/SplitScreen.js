import styled from "styled-components";


//just some styling
const Container = styled.div`
    display: flex;
`;

//using props as styled-component variable
const Pane = styled.div`
    flex: ${props => props.weight};
`;



export const SplitScreen =  ({
    children, // using the children array in order to access the children component from the Parent div 
    leftWeight = 1, // passing weight props from the parent component
    rightWeight = 1,// passing weight props from the parent component
}) => {
    const [left,right] = children;

    return(
        <Container>
            <Pane weight={leftWeight}>
                {left} 
                {/* {Just renders the Component Directly as a Layout Children} */}
            </Pane>
            <Pane weight={rightWeight}>
                {right}
                 {/* {Just renders the Component Directly as a Layout Children} */}
            </Pane>
        </Container>
    )
}