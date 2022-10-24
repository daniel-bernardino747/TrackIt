import { COLOR } from '../../constants/Colors';
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
    border-radius: 0.3125em;
    background: ${COLOR.bgButton};

    ${props => props.small ? (
        `
            width: 5.25em;
            height: 2.1875em;
        `
    ) : (
        `
            width: 18.9375em;
            height: 2.8125em;
        `
    )}
`;

export default Loader;