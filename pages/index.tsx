import type { NextPage } from 'next';

function vibrate() {
    if (!window) {
        return;
    }

    if (!window.navigator) {
        return;
    }

    if (!window.navigator.vibrate) {
        return;
    }

    window.navigator.vibrate([200, 100, 200]);
}
const Home: NextPage = () => {
    return (
        <>
            <div className='mainText' onClick={vibrate}>
              BoilerPlate로 사용하자 !
            </div>
        </>
    );
};

export default Home;
