import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

const Loader = ({ sizeSmall }) => {
    return (
        <Loading small={sizeSmall}>
            <ThreeDots
                height={sizeSmall ? "40" : "80"}
                width={sizeSmall ? "40" : "80"}
                radius="9"
                color="#FFF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true} />
        </Loading>

    );
};

const Loading = styled.div`
    display: flex;
    opacity: 0.7;
    justify-content: center ;
    align-items: center;
    border: none;
    border-radius: 5px;
    background: #52B6FF;

    ${props => props.small ? (
        `
            width: 84px;
            height: 35px;
        `
    ) : (
        `
            width: 303px;
            height: 45px;
        `
    )}
`;

export default Loader;