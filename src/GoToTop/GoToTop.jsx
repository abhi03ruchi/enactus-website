import React , {useEffect , useState} from 'react'
import './GoToTop.css';



const GoToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goTOBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const listenToScroll = () => {
        let heightToHidden = 100;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        }else{
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll); 
    }, []);
    return (
        <div className='wrapper'>
            { isVisible && (
            <div className='top-btn' onClick={goTOBtn}>
               <i class="fa-solid fa-arrow-up fa-bounce fa-xs"></i>
               {/* <i class="fa-regular fa-angle-up fa-bounce fa-xs"></i> */}
               
            </div>
            )}
        </div>

    )
};

export default GoToTop;
