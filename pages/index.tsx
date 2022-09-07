import React, { useEffect } from 'react';
import type { NextPage } from 'next';

const Home: NextPage = () => {

    useEffect(() => {
        let nameTxt = ['ㅂ', 'ㅅ' , 'ㅇ', 'ㄴ', 'ㄱ', 'ㅏ', 'ㅏ', 'ㅏ'];

        function shuffleArray(array : any, repeats : number) {
            array.sort(() => (Math.random() - 0.5));
            for (let i = 0; i <= repeats; i++) {
                nameTxt = nameTxt.concat(array);
            };
            return nameTxt;
        }
        // console.log(nameTxt);
        let randomTxt = shuffleArray(nameTxt, 12).join('');

        let txtTarget : any = document.querySelector(".mainText");
        txtTarget.innerHTML = randomTxt;
    }, []);
    

    return (
        <>
            <div className='mainText' />
        </>
    );
};

export default Home;
